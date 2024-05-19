//UP70 BELAJAR REDUX TOOLKIT DENGAN INSTALASI npm i @reduxjs/toolkit

// import * as toolkit from "@reduxjs/toolkit";

// const { configureStore, createAction, createReducer } = toolkit;
import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

// membuat create action add to cart

const addToCart = createAction("ADD_TO_CART");

// buat reducer creatReducer membuat initial state

// const initialState = {
//   cart: [],
// };
// const initialState = [];
//membuat bulder.addCase dengan fungsi arrow yang menangkap parameter action dan state dengan state.cart.push action.payload
const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload);
  });
});

// up71 membuat reducer login nilai awal false dan bikin const login lattoolredux

const login = createAction("CREATE_SEASON");

const loginReducer = createReducer({ status: false }, (builder) => {
  builder.addCase(login, (state, action) => {
    state.status = true;
  });
});

// membuat store
const store = configureStore({
  reducer: {
    cart: cartReducer,
    // up72 membuat reducer login lat toolredux
    login: loginReducer,
  },
});

//ngetest cart kosong
console.log("oncreate store : ", store.getState());

// bikin store dispatch bikin action1 untuk addtocart

//  bikin subscribe

store.subscribe(() => {
  console.log(" STORE CHANGE redux tool : ", store.getState());
});

store.dispatch(addToCart({ id: 1, qty: 20 }));
store.dispatch(addToCart({ id: 2, qty: 5 }));
//up73 bikin dispatch login
store.dispatch(login());

//  lalu finish biar lihat di terminal dengan node toolkit
