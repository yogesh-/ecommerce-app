import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useCart } from "../../context/cartContext";
import { useWish } from "../../context/wishContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

export const Navbar = () => {
  const { setIsLoggedIn } = useAuth();
  const { cartState } = useCart();
  const { wishState } = useWish();
  let navigate = useNavigate();

  let navtoken = localStorage.getItem("token");
  // console.log("navtoken", navtoken);

  const logoutLoginHandler = () => {
    if (navtoken) {
      // delete-token,log out the user,go to home
      setIsLoggedIn(false);
      localStorage.removeItem("token");
      navigate("/");
      // setIsLoggedIn(false);
    } else {
      navigate("/login");
    }
  };

  return (
    <nav class="flex-row">
      <div class="logo">
        <Link to="/">
          <p class="h1">SNEAKERS</p>
        </Link>
      </div>

      <div class="search-bar flex-row">
        <input type="text" placeholder="Search" />
        <span class="material-icons-outlined search-icon">search</span>
      </div>

      <div class="nav-items">
        <ul class="flex-row right-icons">
          <li>
            <Link to="/login">
              <button class="btn">
                <p class="h4" onClick={logoutLoginHandler}>
                  {navtoken ? "Logout" : "Login"}
                </p>
              </button>
            </Link>
          </li>

          <li>
            <Link to="/wishlist">
              <div class="badge">
                <span class="material-icons-outlined">favorite_border</span>

                <div class="number-red">{wishState.wishCount}</div>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/cart">
              <div class="badge">
                <span class="material-icons-outlined">shopping_cart</span>
                <div class="number-red">{cartState.totalItems}</div>
              </div>
            </Link>
          </li>

          <li>
            <a href="/html/logout.html">
              <span class="material-icons-outlined">logout</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
