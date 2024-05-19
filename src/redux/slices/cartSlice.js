//up75 IMPLEMENTASI SLICE REDUX KE PROJECT LOGIN DAN PRODUCT
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data:
      // up87 menggunakan json.parse ke local storage
      JSON.parse(localStorage.getItem("cart")) || [],
    // [
    //   //   {
    //   //     // tes data
    //   //     // id: 1,
    //   //     // qty: 1,
    //   //   },
    // ],
  },
  reducers: {
    addToCart: (state, action) => {
      // mencari data data.find dengan membuat const itemInCart agar bisa menambahkan quantiti pada data
      const itemInCart = state.data.find((item) => item.id === action.payload.id);
      //membuat data bertambah 1 bila memang ada dengan if
      if (itemInCart) {
        itemInCart.qty++;
      } else {
        state.data.push(action.payload);
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
