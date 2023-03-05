import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth";
import { productsSlice } from "./products/productsSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    products: productsSlice.reducer,
  },
});
