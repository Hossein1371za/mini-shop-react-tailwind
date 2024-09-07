import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart)
    }else{
      setCart([...cart,newItem])
    }
  };

  const removeItemCart=(id)=>{
    const newCart = cart.filter((item)=>(
      item.id !== id
    ))
    setCart(newCart)
  }

  // secound
  // const addToCart = (id, product) => {
  //   setCart((prevCart) => {
  //     const cartItem = prevCart.find((item) => item.id === id);
  //     if (cartItem) {
  //       return prevCart.map((item) =>
  //         item.id === id ? { ...item, amount: item.amount + 1 } : item
  //       );
  //     } else {
  //       return [...prevCart, { ...product, amount: 1 }];
  //     }
  //   });
  // };

  return (
    <CartContext.Provider value={{cart, addToCart,removeItemCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
