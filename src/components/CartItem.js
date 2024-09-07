import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";


const CartItem = ({ item }) => {
  const { id, image, title, amount, price } = item;
  const {removeItemCart} = useContext(CartContext)
  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gr200 w-full font-light text-gray-500 ">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt="" />
        </Link>
        <div className="flex flex-col w-full">
          <div className="flex justify-between mb-2">
            <Link
              className="text-primary text-sm font-medium max-w-[240px] hover:text-blue-500"
              to={`/product/${id}`}
            >
              {title}
            </Link>
            <div  onClick={()=>removeItemCart(id)} className="text-xl cursor-pointer">
              <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
            </div>
          </div>
          <div className="flex gap-x-2 h-[36px] text-sm">
            <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
              <div className="flex-1 flex justify-center items-center h-full cursor-pointer">
                <IoMdRemove />
              </div>
              <div className="flex items-center justify-center px-2">
                {amount}
              </div>
              <div className="flex-1 flex justify-center items-center h-full cursor-pointer">
                <IoMdAdd />
              </div>
            </div>
            <div className="flex-1 flex justify-around items-center">
              $ {price}
            </div>
            <div className="flex-1 flex justify-end items-center text-primary font-medium">{`$ ${parseFloat(
              price * amount
            ).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
