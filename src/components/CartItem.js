import React from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

const CartItem = ({ item }) => {
  const { id, image, title, amount, price } = item;

  return (
    <div className="flex">
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
            <div className="text-xl cursor-pointer">
              <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
            </div>
          </div>
          <div className="flex gap-x-2 h-[36px] text-sm">
            <div>qty</div>
            <div>price</div>
            <div>final price</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
