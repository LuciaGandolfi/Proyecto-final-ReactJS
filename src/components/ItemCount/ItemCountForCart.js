import React, { useState, useEffect } from 'react';
import './ItemCount.css';

const ItemCountForCart = ({ stock, onAdd }) => {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {

    if (quantity > stock) {
      setQuantity(stock);
    }
  }, [quantity, stock]);

  const handleAddToCart = () => {
    onAdd(quantity);
  };

  return (
    <div className='Counter'>
      <div className='Number'>{quantity}</div>
      <div>
      </div>
    </div>
  );
};

export default ItemCountForCart;
