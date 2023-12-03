import { CartContext } from "../context/CartContext";
import { useContext, useState } from "react";
import { db } from "../firebase/firebaseconfig";
import { Timestamp, addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore";
import { CheckoutForm } from "./CheckoutForm";

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');
    const { cart, clearCart, calculateTotal } = useContext(CartContext);

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true);

        const calculatedTotal = calculateTotal();
        const order = {
            buyer: { name, phone, email },
            items: cart,
            total: calculatedTotal,
            date: Timestamp.fromDate(new Date()),
        };

        const update = writeBatch(db);
        let outOfStock = [];
        const ids = cart.map(prod => prod.id);
        const productsRef = collection(db, 'products');
        const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)));
        const { docs } = productsAddedFromFirestore;

        docs.forEach(doc => {
            const { stock } = doc.data();
            const { quantity } = cart.find(prod => prod.id === doc.id) || {};
            const updatedStock = stock >= quantity ? stock - quantity : stock;
            stock >= quantity
                ? update.update(doc.ref, { stock: updatedStock })
                : outOfStock = [...prev, { id: doc.id, ...dataDoc }];
        });

        const hasError = outOfStock.length > 0;
        if (hasError) {
            setLoading(false);
        } else {
            update.commit()
                .then(async () => {
                    const orderRef = collection(db, 'order');
                    const orderAdded = await addDoc(orderRef, order);
                    setOrderId(orderAdded.id);
                    clearCart();
                })
                .finally(() => setLoading(false));
        }
    };

    return (
        <div className="pursuit">
            {loading ? (
                <h1 className="talon">Su talón está siendo generado...</h1>
            ) : orderId ? (
                <div className="receipt">
                    <h4 className="talon">Estimado cliente su ID es: {orderId}</h4>
                    <span>¡Muchas gracias por su compra!</span>
                    <span>Nos comunicaremos con usted a la brevedad.</span>
                </div>
            ) : (
                <div>
                    <h1 className="check">CheckOut</h1>
                    <CheckoutForm onConfirm={createOrder} />
                </div>
            )}
        </div>
    );
};
export default Checkout;