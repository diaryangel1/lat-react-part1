//UP68 LATIHAN REDUX instalasi dengan npm i redux

import { legacy_createStore } from "redux";
//REDUCER
//fungsi ini sama dengan yang ada di pagesproduct yang dibikin dengan useState
// dalam hal ini contohnya action kita akan bikin switch case dengan tipenya nama fungsi seperti add to cart
const cartReducer = (
  state = {
    cart: [
      {
        id: 1,
        qty: 20,
      },
    ],
  },
  action
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // memanipulasi yang ada dalam state nya (...state adalah kita akan memasukan apapun yang ada dalam state)
      return { ...state, cart: [...state.cart, action.payload] };

    default:
      return state;
  }
};

//STORE yang merupakan wadah dari state yang fungsinya untuk menyimpan state dengan bikin const store  = createStore
const store = legacy_createStore(cartReducer);
// kita buat simulasi simpan data dan tarik dari local storage untuk menampilkan id dan qty saat node redux
console.log("oncreate store : ", store.getState());

//SUBSCRIBE untuk melihat perubahan yang terjadi didalam store
store.subscribe(() => {
  console.log(" STORE CHANGE SUBSCRIBE : ", store.getState());
});

//DISPATCH
//up69 membuat action1 memiliki object dengan fungsi add to cart, payloadnya id dan qty lat redux untuk melihat perubahan maka beralih ke subscribe
const action1 = {
  type: "ADD_TO_CART",
  payload: {
    id: 1,
    qty: 20,
  },
};
store.dispatch(action1);

const action2 = {
  type: "ADD_TO_CART",
  payload: {
    id: 10,
    qty: 5,
  },
};
store.dispatch(action2);
