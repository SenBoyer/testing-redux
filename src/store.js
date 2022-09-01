import { configureStore } from "@reduxjs/toolkit";
import cartSliceDefault from "./features/cartSlice";
import modalSliceDefault from "./features/modalSlice";
import checkoutSliceDefault from "./features/checkoutSlice";

export const store = configureStore({
  reducer: {
    cart: cartSliceDefault,
    modal: modalSliceDefault,
    checkout: checkoutSliceDefault,
  },
});
