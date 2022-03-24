import { Home } from "./pages/home/home";
import { Route, Routes } from "react-router-dom";
import { Products } from "./pages/products/products";
import { Cart } from "./pages/cart/cart";
import { Wishlist } from "./pages/wishlist/wishlist";

export const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        {/* <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} /> */}
      </Routes>
    </div>
  );
};
