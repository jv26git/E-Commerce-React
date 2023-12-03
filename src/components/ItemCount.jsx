import { useState } from 'react';

export const ItemCount = ({ initial, stock, onAdd }) => {
  const [quantity, setCantidad] = useState(initial);
  const increment = () => {
    if (quantity < stock) {
      setCantidad(quantity + 1);
    }
  };
  const decrement = () => {
    if (quantity > 1) {
      setCantidad(quantity - 1);
    }
  };

  return (
    <div className='Contador'>
      <div className='Controles'>
        <button className='Button' onClick={decrement}>-</button>
        <h4 className='Cantidad'>{quantity}</h4>
        <button className='Button' onClick={increment}>+</button>
      </div>
      <div>
        <button className='Button' onClick={() => onAdd(quantity)} disabled={!stock}>
          Agregar al carrito
        </button>
      </div>
    </div>
  )
};