import React from 'react';

const CartItem = ({ item }) => {
  console.log('Item data:', item);

  return (
    <div className="cart-item">
      <img src={item.img} alt={item.name} />
      <div className="item-details">
        <h3>{item.name}</h3>
        <p>Price: ${item.price}</p>
        <p>Quantity: {item.quantity}</p>
      </div>
    </div>
  );
};


export default CartItem;
