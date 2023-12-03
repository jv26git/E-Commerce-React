import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: [],
    total: 0
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const addItem = (item, quantity) => {
        const itemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);
        if (itemIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[itemIndex].quantity += quantity;
            setCart(updatedCart);
        } else {
            setCart((prev) => [...prev, { ...item, quantity }]);
        }
    };

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }
    const clearCart = () => {
        setCart([])
    }

    const calculateSubTotal = (itemId) => {
        const item = cart.find((cartItem) => cartItem.id === itemId);
        const subTotal = item ? item.price * item.quantity : 0;
        return subTotal;
    };

    const calculateTotal = () => {
        let total = 0;
        cart.forEach(item => {
            const price = (item.price);
            const quantity = (item.quantity);
            total += (!isNaN(price) && !isNaN(quantity)) ? price * quantity : 0;
        });
        return total;
    };

    const contextValue = {
        cart,
        calculateSubTotal,
        calculateTotal,
        addItem,
        removeItem,
        clearCart,
    };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}