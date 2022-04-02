import React, { useContext, createContext, useReducer } from "react";
import { cartReducer } from "../reducers/cartReducer";

const cartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    totalItems: 0,
    totalAmount: 0,
    cartProducts: [],
  });

  console.log(cartState, "from cart conte");

  return (
    <cartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </cartContext.Provider>
  );
};

const useCart = () => useContext(cartContext);

export { useCart, CartProvider };
