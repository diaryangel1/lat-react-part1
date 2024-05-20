//UP100 belajar USEreducer DENGAN CONTEXT untuk mengganti usestate dengan reducer

import { createContext, useContext, useReducer } from "react";
const TotalPriceContext = createContext(null);

const TotalPriceDispatchContext = createContext(null);

const totalPriceReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE": {
      return {
        total: action.payload.total,
      };
    }

    default:
      throw Error("unknown action: " + action.type);
  }
};

export function TotalPriceProvider({ children }) {
  const [totalPrice, dispatch] = useReducer(totalPriceReducer, { total: 0 });
  return (
    // untuk menyimpan statenya
    <TotalPriceContext.Provider value={totalPrice}>
      {/* menambahkan provider lain */}
      <TotalPriceDispatchContext.Provider value={dispatch}>{children}</TotalPriceDispatchContext.Provider>
    </TotalPriceContext.Provider>
  );
}

// export function untuk membuat hook useTotalPrice
export function useTotalPrice() {
  return useContext(TotalPriceContext);
}

export function useTotalPriceDispatch() {
  return useContext(TotalPriceDispatchContext);
}

// tujuanya untuk mempersingkat koding mengganti const totalprice dan lainnya di table cart
