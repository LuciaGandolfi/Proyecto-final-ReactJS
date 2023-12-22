import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  cart: { items: [], totalQuantity: 0 },
  addItem: () => {},
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ items: [], totalQuantity: 0 });

  useEffect(() => {
    const calculateTotalQuantity = () => {
      const totalQuantity = cart.items.reduce((total, item) => total + item.quantity, 0);
      setCart((prev) => ({ ...prev, totalQuantity }));
    };

    calculateTotalQuantity();
  }, [cart.items]);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => ({
        ...prev,
        items: [...prev.items, { ...item, quantity }],
        totalQuantity: prev.totalQuantity + quantity,
      }));
    } else {
      console.error('El producto ya fue agregado');
    }
  };

  const removeItem = (itemId) => {
    const removedItem = cart.items.find((item) => item.id === itemId);

    if (removedItem) {
      const cartUpdated = {
        items: cart.items.filter((prod) => prod.id !== itemId),
        totalQuantity: cart.totalQuantity - removedItem.quantity,
      };
      setCart(cartUpdated);
    }
  };

  const clearCart = () => {
    setCart({ items: [], totalQuantity: 0 });
  };

  const isInCart = (itemId) => {
    return cart.items.some((prod) => prod.id === itemId);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
