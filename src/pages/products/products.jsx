import React, { useEffect, useState } from "react";
import axios from "axios";
import { Footer } from "../../components/footer/footer";
import { Navbar } from "../../components/navbar/navbar";
import "./products.css";

export const Products = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    loader();
  }, []);

  const loader = async () => {
    try {
      setLoad(true);
      const response = await axios.get("/api/products/");
      console.log(response.data.products);
      console.log("hello");
      setData(response.data.products);
      setLoad(false);
    } catch (error) {}
  };

  return (
    <div id="page">
      <Navbar />
      <sidebar>
        <div className="sidebar">
          <div className="filter-header flex-row filter-styling">
            <p className="h3">Filter</p>
            <p className="h4">Cancel</p>
          </div>

          <div className="filter-price filter-styling">
            <p className="h3">Price</p>
            <div className="filter-price-break flex-row">
              <p className="h3">2000</p>
              <p className="h3">4000</p>
              <p className="h3">6000</p>
            </div>

            <div className="slidecontainer">
              <input
                type="range"
                min="1"
                max="100"
                value="50"
                className="slider"
                id="myRange"
              />
            </div>
          </div>

          <div className="filter-category flex-col filter-styling">
            <p className="h3">Category</p>
            <div className="filter-checkboks checkbox">
              <label for="checkbox-1">
                <input id="checkbox-1" name="radio" type="checkbox" checked />
                Running
              </label>
              <label for="checkbox-1">
                <input id="checkbox-1" name="radio" type="checkbox" />
                Workout
              </label>
              <label for="checkbox-1">
                <input id="checkbox-1" name="radio" type="checkbox" />
                Tennis
              </label>
            </div>
          </div>

          <div className="filter-rating filter-styling">
            <p className="h3">Rating</p>
            <div className="radio">
              <label for="radio-1">
                <input id="radio-1" name="radio" type="radio" checked />4 stars
                & above
              </label>

              <label for="radio-1">
                <input id="radio-1" name="radio" type="radio" />3 stars & above
              </label>

              <label for="radio-1">
                <input id="radio-1" name="radio" type="radio" />2 stars & above
              </label>

              <label for="radio-1">
                <input id="radio-1" name="radio" type="radio" />1 stars & above
              </label>
            </div>
          </div>

          <div className="filter-sorting filter-styling">
            <p className="h3">Sort By</p>
            <div className="radio">
              <label for="radio-2">
                <input id="radio-2" name="radio2" type="radio" checked />
                Low to High
              </label>

              <label for="radio-2">
                <input id="radio-2" name="radio2" type="radio" />
                Hight to Low
              </label>
            </div>
          </div>
        </div>
      </sidebar>

      <main>
        <p className="h2 prod-headline">Showing All Products...</p>
        <div className="product-listing-products flex-row-prod">
          {data.length > 0 &&
            data.map((item, index) => {
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
