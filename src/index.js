import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { FilterProvider } from "./context/filtercontext";
import { CartProvider } from "./context/cartContext";

makeServer();

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <FilterProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FilterProvider>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
