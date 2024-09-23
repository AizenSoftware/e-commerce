import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import cartReducer from "./cart/cartSlice";

import { productApi } from "./product/productSlice";
import { userApi } from "./userSlice/userSlice";

export const store = configureStore({
  reducer: {
    cartItems: cartReducer,
    [productApi.reducerPath]: productApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware, productApi.middleware),
});

setupListeners(store.dispatch);
