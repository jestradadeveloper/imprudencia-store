import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    isLoading: true,
    products: [],
    categories: [],
    activeProduct: null,
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setProductBySlug: (state, action) => {
      state.activeProduct = action.payload;
    },
    cleanActiveProduct: (state, action) => {
      state.activeProduct = null;
    },
  },
});
// Action creators are generated for each case reducer function
export const {
  cleanActiveProduct,
  setProductBySlug,
  setProducts,
  setCategories,
} = productsSlice.actions;
