import React, { useContext, useEffect,useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { BsBag } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";
import Logo from "../assets/img/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const [isActive,setIsActive] = useState(false)
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
    })
  },[])
  return (
    <header className={`${isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"} fixed transition-all z-10 w-full`}>
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link to={"/"}>
          <img className="w-[40px]" src={Logo} alt="" />
        </Link>
        <div onClick={() => setIsOpen(!isOpen)}>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer flex relative"
          >
            <BsBag className="text-2xl" />
            <div className="bg-red-500 text-white rounded-full absolute -right-2 -bottom-2 w-[18px] h-[18px] text-[12px] flex justify-center items-center">
              {itemAmount}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
