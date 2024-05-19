// up74 BELAJAR TOOLKIT REDUX DENGAN KONSEP SLICE
import { configureStore, createSlice } from "@reduxjs/toolkit";

// membuat const cartslice untuk create slice berisi nama cart dan inisial state array kosong dan juga reducer

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
  },
});

// membuat store tanpa login

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

//membuat pengetesan subscribe kembali
console.log("oncreate store : ", store.getState());
store.subscribe(() => {
  console.log(" STORE CHANGE SUBSCRIBE slice : ", store.getState());
});

// kembali dispatch untuk memanggil cartslice action addtocart
store.dispatch(cartSlice.actions.addToCart({ id: 1, qty: 20 }));
store.dispatch(cartSlice.actions.addToCart({ id: 2, qty: 5 }));
