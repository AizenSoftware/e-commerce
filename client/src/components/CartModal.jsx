import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "../rtk-query/cart/cartSlice";
import { AiOutlineCloseSquare } from "react-icons/ai";

const CartModal = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cartItems.items);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const { modalIsOpen } = useSelector((state) => state.cartItems);

  if (!modalIsOpen) return null;

  const closeModalHandler = (e) => {
    if (e.target.id === "overlay") {
      dispatch(toggleModal());
    }
  };
  return (
    <>
      <div
        id="overlay"
        onClick={closeModalHandler}
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50"
      >
        <div className="w-1/4 bg-white p-4 shadow-lg">
          <button
            className="text-right mb-4 text-red-500"
            onClick={() => dispatch(toggleModal())}
          >
            <AiOutlineCloseSquare size={25} />
          </button>
          <h2 className="text-2xl font-bold mb-4">Sepetim</h2>
          <ul>
            {cart?.map((item) => (
              <li key={item.id} className="mb-2">
                <div className="flex justify-between">
                  <span>{item.name}</span>
                  <span>
                    {item.quantity} x ${item.price}
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <div className="text-right mt-4">
            <span className="font-bold">Toplam: ${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartModal;
