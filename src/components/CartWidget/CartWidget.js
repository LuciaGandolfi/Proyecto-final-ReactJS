import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import cartImage from './assets/cart.svg';
import './CartWidget.css';

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <div className='CartWidget'>
      <img
        className='CartImg'
        src={cartImage} 
        alt='cart-widget'
      />
      {totalQuantity > 0 && (
        <span className='CartItemCount'>{totalQuantity}</span>
      )}
    </div>
  );
};

export default CartWidget;
