import { useContext } from "react";
import { CartContext } from '../context/CartContext'
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

export const Cart = () => {
    const { cart, clearCart, calculateTotal } = useContext(CartContext)
    if (cart.length === 0) {
        return (
            <div className="cart-vacio">
                <h1>No hay Items en el carrito</h1>
                <Link to='/' className="Button2">Volver</Link>
            </div>
        )
    }

    const total = calculateTotal()
    return (
        <div className="carrito">
            {cart.map(item => <CartItem key={item.id} item={item} />)}
            <h3> Total: $USD {total}</h3>
            <button onClick={() => clearCart()} className="Button2">Limpiar Carrito</button>
            <Link to='/checkout' className="Button2 check2">Checkout</Link>
        </div>
    )
}