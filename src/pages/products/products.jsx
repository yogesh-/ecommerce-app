import React, { useEffect, useState } from "react";
import axios from "axios";
import { Footer } from "../../components/footer/footer";
import { Navbar } from "../../components/navbar/navbar";
import "./products.css";
import { Filter } from "../../components/Filter/filter";
import { useFilter } from "../../context/filtercontext";

import {
  ratingItems,
  categoryItems,
  priceItems,
  sortItems,
} from "../../utils/index";

export const Products = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  console.log(load);

  useEffect(() => {
    loader();
  }, []);

  const loader = async () => {
    try {
      setLoad(true);
      const response = await axios.get("/api/products/");
      setData(response.data.products);
      setLoad(false);
    } catch (error) {}
  };

  const { state } = useFilter();

  const getPriceItems = priceItems(data, state.price);
  const getRatedItems = ratingItems(getPriceItems, state.rating);
  const getCategoryItems = categoryItems(
    getRatedItems,
    state.categories.workout,
    state.categories.tennis,
    state.categories.running
  );
  const getFinalItems = sortItems(getCategoryItems, state.sortBy);
  console.log(getFinalItems);

  return (
    <div id="page">
      <Navbar />
      <Filter />
      <main>
        h<p className="h2 prod-headline">Showing All Products...</p>
        <div className="product-listing-products flex-row-prod">
          {/* {getFinalItems.length > 0 && */}
          {data.map((item, index) => {
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
                      <button className="btn">
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
