import React, { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash, FiTrash2 } from "react-icons/fi";
import CartItem from "./CartItem";
import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total } = useContext(CartContext);

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed h-full top-0 shadow-2xl md:w-[35vw] lg:w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase font-semibold text-sm">
          Shopping Bag ({`${cart.length}`})
        </div>
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex items-center justify-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className="flex flex-col h-[440px] lg:h-[540px] gap-y-2 overflow-y-auto overflow-x-hidden border-b">
        {cart.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
      {cart.length ? (
        <div className="m-4">
          <div className="flex justify-between items-center w-fll">
            <div className="uppercase font-semibold">
              <span className="mr-2">total : </span>${" "}
              {parseFloat(total).toFixed(2)}
            </div>
            <div
              onClick={clearCart}
              className="h-12 w-12 bg-red-500 text-white flex items-center justify-center cursor-pointer "
            >
              <FiTrash2 />
            </div>
          </div>
          <Link
            to="/"
            className="bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium mb-2"
          >
            View Cart
          </Link>
          <Link
            to="/"
            className="bg-primary flex p-4 justify-center items-center text-white w-full font-medium"
          >
            Checkout
          </Link>
        </div>
      ) : (
        <div className="text-red-600 text-lg mx-auto mt-4 text-center">
          shoping cart is empety
        </div>
      )}
    </div>
  );
};

export default Sidebar;
