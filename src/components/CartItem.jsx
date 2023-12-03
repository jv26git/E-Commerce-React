import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartItem = ({ item }) => {
    const { removeItem, calculateSubTotal } = useContext(CartContext);

    const handleRemoveItem = (itemId) => {
        removeItem(itemId);
    };

    const subTotal = calculateSubTotal(item.id);

    return (
        <div className="cart-item">
            <button onClick={() => handleRemoveItem(item.id)} className="Button-X">X</button>
            <span>Serie: {item.tittle}</span>
            <span>Producto: {item.description}</span>
            <span>Precio: $USD {item.price}</span>
            <span>Cantidad: {item.quantity}</span>
            <span> Subtotal: $USD {subTotal}</span>
        </div>
    );
};
export default CartItem;