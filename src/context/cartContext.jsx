import React, { useContext, createContext, useReducer } from "react";
import { cartReducer } from "../reducers/cartReducer";

const cartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    totalItems: 0,
    totalAmount: 0,
    totalDiscount: 0,
    cartProducts: [],
  });

  return (
    <cartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </cartContext.Provider>
  );
};

const useCart = () => useContext(cartContext);

export { useCart, CartProvider };
