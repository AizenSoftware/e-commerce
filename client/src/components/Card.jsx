import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../rtk-query/cart/cartSlice";
import { useNavigate } from "react-router-dom";

const Card = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <li
      onClick={() => navigate(`/detail/${product.id}`)}
      className="list-none space-y-4 bg-white w-full h-80 p-2 flex flex-col justify-center items-center rounded-md shadow-md cursor-pointer"
    >
      <div className="flex flex-col justify-center items-center flex-1">
        <img src={product?.image} alt="" className="w-20 mb-8" />
        <h2 className="text-center">{product?.name} </h2>
        <span>{product.price} $</span>
        <p>{product.description}</p>
      </div>
      <button
        onClick={() => dispatch(addToCart(product))}
        className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-700 duration-100"
      >
        Sepete Ekle
      </button>
    </li>
  );
};

export default Card;
