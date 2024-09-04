import React, { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products,setProducts] = useState([])
  useEffect(()=>{
    const fetchProduct = async ()=>{
      const res = await fetch("https://fakestoreapi.com/products")
      const data = await res.json()
      console.log(data);
    }
    fetchProduct()
  },[])
  return <ProductContext.Provider>{children}</ProductContext.Provider>;
};

export default ProductProvider;
