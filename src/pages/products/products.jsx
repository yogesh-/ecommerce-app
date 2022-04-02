import React, { useEffect, useState } from "react";
import axios from "axios";
import { Footer, Navbar, Filter } from "../../components/index";
import "./products.css";
import { useFilter } from "../../context/filtercontext";
import { useCart } from "../../context/cartContext";

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
      console.log("api call data", data);
      setLoad(false);
    } catch (error) {}
  };

  const { state } = useFilter();
  const { cartState, cartDispatch } = useCart();

  const getPriceItems = priceItems(data, state.price);
  const getCategoryItems = categoryItems(
    getPriceItems,
    state.categories.workout,
    state.categories.tennis,
    state.categories.running
  );

  const getRatedItems = ratingItems(getCategoryItems, state.rating);

  const getFinalItems = sortItems(getRatedItems, state.sortBy);

  console.log("Final filter items", getFinalItems, load);

  return (
    <div id="page">
      <Navbar />
      <Filter />
      <main>
        <p className="h2 prod-headline">Showing All Products...</p>
        <div className="product-listing-products flex-row-prod">
          {/* {getFinalItems.length > 0 && */}
          {getFinalItems.map((item, index) => {
            return (
              <li key={index}>
                <div className="card-badge">
                  <img src={item.image} alt="sneakers" />
                  <div className="card-tag flex-row">
                    <span className="material-icons-outlined">
                      <img src="/assets/heart.png" alt="fav_icon" />
                    </span>
                  </div>

                  <div className="card-text">
                    <p className="h5">{item.brand}</p>
                    <p className="h2">{item.title}</p>
                    <p className="h3">
                      {item.price} <span>{item.original_price}</span>
                    </p>
                    <div className="prod-buttons">
                      <button
                        className="btn"
                        onClick={(e) =>
                          cartDispatch({ type: "ADD_TO_CART", payload: item })
                        }
                      >
                        <p className="h4">Add to Cart</p>
                      </button>

                      <button className="btn btn-secondary">
                        <p className="h4">Add to Wishlist</p>
                      </button>
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
