import React,{useContext} from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { Link } from 'react-router-dom';
import {IoMdArrowForward} from "react-icons/io"
import {FiTrash} from "react-icons/fi"
import CartItem from "./CartItem"

const Sidebar = () => {
  const {isOpen,handleClose} = useContext(SidebarContext)

  return <div>Sidebar</div>;
};

export default Sidebar;
