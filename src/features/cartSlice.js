import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cartItems: [],
  amount: 1,
  total: 0,
  isLoading: true,
};

export const getItems = createAsyncThunk("cart/getItems", async () => {
  try {
    const response = await axios.get(
      "https://course-api.com/react-useReducer-cart-project"
    );
    return response.data;
  } catch (error) {
    console.log("error=", error);
  }
});

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (store) => {
      store.cartItems = [];
    },
    removeItem: (store, action) => {
      store.cartItems = store.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    increase: (store, action) => {
      const target_item = store.cartItems.find(
        (item) => item.id === action.payload.id
      );
      target_item.amount++;
    },
    decrease: (store, { payload }) => {
      const target_item = store.cartItems.find(
        (item) => item.id === payload.id
      );
      target_item.amount--;
    },
    calculate: (store) => {
      let amount = 0;
      let total = 0;
      store.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      store.amount = amount;
      store.total = total;
    },
  },
  extraReducers: {
    [getItems.pending]: (store) => {
      store.isLoading = true;
    },
    [getItems.fulfilled]: (store, action) => {
      console.log("fulfilled store=", store);
      store.isLoading = false;
      store.cartItems = action.payload;
      console.log("fufulled ran - action.payload=", action.payload);
    },
    [getItems.rejected]: (store) => {
      store.isLoading = false;
    },
  },
});

export const { clearCart, removeItem, increase, decrease, calculate } =
  cartSlice.actions;
export default cartSlice.reducer;
