import React, { useEffect, useState } from "react";
import axios from "axios";
import { Footer, Navbar, Filter } from "../../components/index";
import "./products.css";
import { Link } from "react-router-dom";
import { useFilter } from "../../context/filtercontext";
import { useCart } from "../../context/cartContext";
import { useWish } from "../../context/wishContext";

import {
  ratingItems,
  categoryItems,
  priceItems,
  sortItems,
} from "../../utils/index";

export const Products = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    dataFetch();
  }, []);

  const dataFetch = async () => {
    try {
      setLoad(true);
      const response = await axios.get("/api/products/");
      setData(response.data.products);
      setLoad(false);
    } catch (error) {}
  };

  const { state } = useFilter();
  const { cartState, cartDispatch } = useCart();
  const { wishState, wishDispatch } = useWish();

  const getPriceItems = priceItems(data, state.price);
  const getCategoryItems = categoryItems(
    getPriceItems,
    state.categories.workout,
    state.categories.tennis,
    state.categories.running
  );

  const getRatedItems = ratingItems(getCategoryItems, state.rating);

  const getFinalItems = sortItems(getRatedItems, state.sortBy);

  console.log(load);

  return (
    <div id="page">
      <Navbar />
      <Filter />
      <main>
        <div className="product-listing-products flex-row-prod">
          {getFinalItems.map((item, index) => {
            return (
              <li key={index}>
                <div className="card-badge">
                  <Link to={`/product/${item._id}`}>
                    <img
                      className="img-style"
                      src={item.image}
                      alt="sneakers"
                    />
                  </Link>

                  <div className="card-tag flex-row">
                    <p className="h4" style={{ color: "white" }}>
                      {" "}
                      {item.rating}⭐
                    </p>
                  </div>

                  <div className="card-text">
                    <p className="h5">{item.brand}</p>
                    <p className="h2">{item.title}</p>
                    <p className="h3">
                      ₹{item.price} <span>₹{item.original_price}</span>
                    </p>
                    <div className="prod-buttons">
                      {cartState.cartProducts.some(
                        (i) => i._id === item._id
                      ) ? (
                        <Link to="/cart">
                          <button class="btn btn-secondary">
                            <p class="h4">Go to Cart</p>
                          </button>
                        </Link>
                      ) : (
                        <button
                          className="btn"
                          onClick={(e) =>
                            cartDispatch({ type: "ADD_TO_CART", payload: item })
                          }
                        >
                          <p className="h4">Add to Cart</p>
                        </button>
                      )}

                      {wishState.wishProducts.some(
                        (i) => i._id === item._id
                      ) ? (
                        <Link to="/wishlist">
                          <button className="btn">
                            <p className="h4">Go to Wishlist</p>
                          </button>
                        </Link>
                      ) : (
                        <button
                          className="btn btn-secondary"
                          onClick={(e) =>
                            wishDispatch({
                              type: "ADD_TO_WISHLIST",
                              payload: item,
                            })
                          }
                        >
                          <p className="h4">Add to Wishlist</p>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
};
