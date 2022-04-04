import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useCart } from "../../context/cartContext";
import { useWish } from "../../context/wishContext";

export const Navbar = () => {
  const { cartState } = useCart();
  const { wishState } = useWish();

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
            <a href="/html/login.html">
              <button class="btn">
                <p class="h4">Login</p>
              </button>
            </a>
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
