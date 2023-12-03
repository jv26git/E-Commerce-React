import React, { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext"

const CartWidget = () => {
    const [counter, setCounter] = useState(0);
    const count = useContext(CartContext);

    useEffect(() => {
        const updateCount = () => {
            let totalQuantity = 0;
            count.cart.forEach(item => {
                totalQuantity += item.quantity;
            });
            setCounter(totalQuantity);
        }
        updateCount();
    }, [count.cart]);

    return (
        <>
            <Link to='/cart'>
                <i className="bi bi-cart4 changuito"></i>
                <span className='counter'>{counter}</span>
            </Link>
        </>
    );
}
export default CartWidget