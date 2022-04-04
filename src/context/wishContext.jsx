import React, { useContext, createContext, useReducer } from "react";
import { wishReducer } from "../reducers/wishReducer";

const wishListContext = createContext();

const WishListProvider = ({ children }) => {
  const [wishState, wishDispatch] = useReducer(wishReducer, {
    wishProducts: [],
  });

  return (
    <wishListContext.Provider value={(wishState, wishDispatch)}>
      {children}
    </wishListContext.Provider>
  );
};

const useWish = () => useContext(wishListContext);

export { useWish, WishListProvider };
