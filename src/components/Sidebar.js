import React, { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash } from "react-icons/fi";
import CartItem from "./CartItem";
import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const {cart} = useContext(CartContext)

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed h-full top-0 shadow-2xl md:w-[35vw] lg:w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase font-semibold text-sm">
          Shopping Bag (0)
          </div>
        <div onClick={handleClose} className="cursor-pointer w-8 h-8 flex items-center justify-center">
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div>
        {cart.map((item)=>{
          return (
            <CartItem key={item.id} item={item}/>
          )
        })}
      </div>
    </div>
  );
};

export default Sidebar;
