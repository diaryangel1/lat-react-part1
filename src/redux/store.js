//up 76 implementasi redux
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
console.log("oncreate store : ", store.getState());

store.subscribe(() => {
  console.log(" STORE CHANGE SUBSCRIBE : ", store.getState());
});

export default store;
