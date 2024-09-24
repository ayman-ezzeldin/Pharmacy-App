import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: true,
  productList: [],
};



export const fetchAllFilteredProducts = createAsyncThunk(
  "/products/fetchAllProducts",

  async ({filterParams, sortParams}) => {

    const query = new URLSearchParams({
      ...filterParams,
      sortBy : sortParams
    })
    const response = await axios.get(
      `http://localhost:5000/api/shop/products/get?${query}`
    );

    return response?.data;
  }
);


const shoppingProudctSlice = createSlice({
  name: "shoppingProducts",
  initialState,
  reducers: {},
  extraReducers : (builder) => {
    builder
    .addCase(fetchAllFilteredProducts.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchAllFilteredProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.productList = action.payload?.data;
    })
    .addCase(fetchAllFilteredProducts.rejected, (state) => {
      state.isLoading = false;
      state.productList = [];
    })
  }
});

export default shoppingProudctSlice.reducer