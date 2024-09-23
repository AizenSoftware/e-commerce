import { createSlice } from "@reduxjs/toolkit";

const getCartFromLocalStorage = () => {
  const cart = localStorage.getItem("product");
  return cart ? JSON.parse(cart) : [];
};

export const cartSlice = createSlice({
  name: "product",
  initialState: {
    items: getCartFromLocalStorage(),
    modalIsOpen: false,
  },
  reducers: {
    addToCart: (state, action) => {
      const stateItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (stateItem) {
        stateItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      console.log(JSON.parse(localStorage.getItem("product")));
      localStorage.setItem("product", JSON.stringify(state.items));
    },

    removeCart: (state, action) => {
      const stateItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (stateItem && stateItem.quantity > 1) {
        // item varsa ve quantity si 1den büyükse azalt
        stateItem.quantity -= 1;
      } else {
        // yoksa else gir itemi tamamen kaldır
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      }
      localStorage.setItem("product", JSON.stringify(state.items)); // en son güncel stateti localstorage'a kaydet
    },
    toggleModal: (state) => {
      state.modalIsOpen = !state.modalIsOpen;
    },
  },
});

export const { addToCart, removeCart, toggleModal } = cartSlice.actions;
export default cartSlice.reducer;
