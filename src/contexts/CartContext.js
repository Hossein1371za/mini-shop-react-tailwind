import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [itemAmount,setItemAmount] = useState(0)
  const [total,setTotal] = useState(0)
  const [cart, setCart] = useState([]);

  useEffect(()=>{
    if(cart){
      const amount = cart.reduce((accumolator,currentItem)=>{
        return accumolator + currentItem.amount
      },0)
      setItemAmount(amount)
    }
  },[cart])

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
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };
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

  const removeItemCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const incItem = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  };

  const decItem = (id) => {
    const CartItem = cart.find((item) => item.id === id);
    if (CartItem) {
      if (CartItem.amount > 1) {
        const newCart = cart.map((item) => {
          if (item.id === id) {
            return { ...item, amount: item.amount - 1 };
          } else {
            return item;
          }
        });
        setCart(newCart);
      } else {
        removeItemCart(id);
      }
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeItemCart,
        clearCart,
        incItem,
        decItem,
        itemAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
