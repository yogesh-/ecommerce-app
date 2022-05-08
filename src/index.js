import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { FilterProvider } from "./context/filtercontext";
import { CartProvider } from "./context/cartContext";
import { WishListProvider } from "./context/wishContext";
import { AuthProvider } from "./context/authContext";

makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <WishListProvider>
        <CartProvider>
          <FilterProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </FilterProvider>
        </CartProvider>
      </WishListProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
