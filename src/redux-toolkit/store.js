import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./features/Cart/CartSlice";
import SearchReducer from "./features/Search/SearchSlice";

export const store = configureStore({
  reducer: { search: SearchReducer, cart: CartReducer },
});
