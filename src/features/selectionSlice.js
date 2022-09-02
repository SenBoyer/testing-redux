import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getSelectItems = createAsyncThunk(
  "selection/getSelectItems",
  async () => {
    try {
      let items = await axios.get(
        "https://course-api.com/react-useReducer-cart-project"
      );
      return items.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const selectionSlice = createSlice({
  name: "selection",
  initialState: {
    items: [],
  },
  reducers: {},
  extraReducers: {
    [getSelectItems.pending]: (store) => {
      console.log("pending");
    },
    [getSelectItems.fulfilled]: (store, action) => {
      console.log("fulfilled");
      store.items = action.payload;
    },
    [getSelectItems.rejected]: (store, action) => {
      console.log("rejected");
    },
  },
});

export default selectionSlice.reducer;
