// x

import React, { useContext, createContext, useReducer } from "react";
import { reducerFunc } from "../reducers/filterReducer";

const FilterContext = createContext();
const useFilter = () => useContext(FilterContext);

const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunc, {
    price: 3000,
    categories: { running: false, workout: false, tennis: false },
    rating: "",
    sortBy: "",
  });
  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export { useFilter, FilterProvider };
