import React from "react";
import { IoIosSearch } from "react-icons/io";
import { GrCart } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "../rtk-query/cart/cartSlice";
import logo from "/logo.png";

const Navbar = () => {
  let { items } = useSelector((state) => state.cartItems);

  const dispatch = useDispatch();

  const cartHandler = () => {
    dispatch(toggleModal());
  };

  return (
    <div className="container mx-auto flex justify-between items-center h-24 bg-black/85 rounded-sm px-4">
      <div>
        <Link to="/">
          <img src={logo} alt="logo" className="w-[80px]" />
        </Link>
      </div>
      <div className="flex items-center justify-center w-2/4 ">
        <div className="relative flex items-center justify-center w:2/3 md:w-3/4">
          <input
            className="p-2 rounded-md outline-none w-full"
            type="text"
            placeholder="Arayınız..."
          />
          <IoIosSearch className="absolute right-0 top-2" size={25} />
        </div>
      </div>
      <ul className="flex space-x-8 items-center text-white">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="relative flex flex-col justify-center items-center p-1">
          <button onClick={cartHandler}>
            <GrCart size={20} />
          </button>
          <span className="absolute top-6 right-0 w-6 text-center rounded-full bg-red-500 text-white">
            {items.length}
          </span>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        {}
        <div className="space-x-2 flex items-center justify-center">
          <button className="bg-indigo-500 p-2 rounded-lg w-auto px-4 hover:bg-white hover:text-indigo-500 duration-300">
            <Link to="/login">Login</Link>
          </button>
          <button className="bg-white text-indigo-500 p-2 rounded-lg w-auto hover:bg-indigo-500 hover:text-white duration-300">
            <Link to="/register">Register</Link>
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
