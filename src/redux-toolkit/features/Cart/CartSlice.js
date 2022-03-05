import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    cartIndex: null,
  },
  reducers: {
    addToCart: (state, action) => {
      //handle when click many times in addtoCart button
      const indexItem = state.cartItems.findIndex(
        (item) =>
          item.productId === action.payload.productId &&
          item.productColor === action.payload.productColor &&
          item.productCapacity === action.payload.productCapacity
      );
      if (indexItem >= 0) {
        state.cartItems[indexItem].productQuantity +=
          action.payload.productQuantity;
        toast.info(
          `Tăng số lượng ${action.payload.productName} trong giỏ hàng`,
          {
            position: "bottom-left",
          }
        );
      } else {
        state.cartItems.push(action.payload);
        toast.success(`${action.payload.productName} được thêm vào giỏ hàng`, {
          position: "bottom-left",
        });
      }

      //store in localStorage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    removeFromCart: (state, action) => {
      toast.error(
        `${state.cartItems[action.payload].productName} được xóa khỏi giỏ hàng`,
        {
          position: "bottom-left",
        }
      );
      state.cartItems.splice(action.payload, 1);

      //store in localStorage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    updateQuantityInCart: (state, action) => {
      state.cartIndex = action.payload;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantityInCart } =
  cartSlice.actions;

export default cartSlice.reducer;
