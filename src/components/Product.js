import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";

const Product = ({ product }) => {
const {addTocart} = useContext(CartContext)
  const {  image, category, title, price } = product;
  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-[200px] mx-auto flex items-center justify-center">
            <img
              className="max-h-[160px] group-hover:scale-110 duration-300"
              src={image}
              alt=""
            />
          </div>
        </div>
        <div className="absolute top-6 -right-11 p-2 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 gap-y-2 transition-all duration-300 group-hover:right-5">
          <button onClick={addTocart}>
            <div className="flex items-center justify-center h-12 w-12 text-white bg-red-500">
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link
            to="/product/${id}"
            className="bg-white w-12 h-12 flex items-center justify-center drop-shadow-xl text-primary"
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>
      <div>
        <div className="text-sm capitalize text-gray-500">{category}</div>
        <Link to="/product/${id}">
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>
        <div className="font-semibold">$ {price}</div>
      </div>
    </div>
  );
};

export default Product;
