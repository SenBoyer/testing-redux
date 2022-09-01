import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fillCheckout = createAsyncThunk(
  "checkout/fillCheckout",
  async (pass, thunkAPI) => {
    try {
      console.log(
        "checkout/ thunkAPI.getState.cart=",
        thunkAPI.getState().cart
      );
    } catch (error) {
      console.log("error=", error);
    }
  }
);

const initialState = {
  purchasedItems: [],
  checkoutIsOpen: false,
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    addToCheckout: (state) => {
      console.log(state);
    },
    openCheckout: (state) => {
      state.checkoutIsOpen = true;
    },
  },
});

export const { addToCheckout, openCheckout } = checkoutSlice.actions;
export default checkoutSlice.reducer;
