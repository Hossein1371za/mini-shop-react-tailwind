import React, { createContext,useEffect,useState } from 'react';

export const CartContext = createContext()

const CartProvider = ({children}) => {
const [cart,setCart] = useState([])
const addTocart = ()=>{
  console.log("addTocart");
}

  return <CartContext.Provider value={{addTocart}}>
    {children}
  </CartContext.Provider>;
};

export default CartProvider;
