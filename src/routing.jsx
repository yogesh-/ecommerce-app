import { Home } from "./pages/home/home";
import { Route, Routes } from "react-router-dom";
import { Products } from "./pages/products/products";
import { Cart } from "./pages/cart/cart";
import { Wishlist } from "./pages/wishlist/wishlist";
import { Login } from "./pages/login/login";
import { SignUp } from "./pages/signup/signup";
import RequiresAuth from "./requiresAuth";
import { ProductDetails } from "./pages/productDetails/productDetails";

export const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/cart"
          element={
            <RequiresAuth>
              <Cart />
            </RequiresAuth>
          }
        />
        <Route
          path="/wishlist"
          element={
            <RequiresAuth>
              <Wishlist />
            </RequiresAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
};
