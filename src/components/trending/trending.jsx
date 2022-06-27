import { useCart } from "../../context/cartContext";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./trending.css";

export const Trending = () => {
  const [fetch, setFetch] = useState([]);
  const { cartState, cartDispatch } = useCart();

  useEffect(() => {
    const trendFetch = async () => {
      try {
        const trendResponse = await axios.get("/api/products/");
        setFetch(trendResponse.data.products);
      } catch (error) {}
    };
    trendFetch();
  }, []);

  return (
    <div class="trending-items">
      <h1 class="h1">Trending Collection</h1>

      <div class="trending-items-list">
        {fetch.slice(0, 3).map((item, index) => {
          return (
            <li key={index}>
              <div class="card-badge">
                <Link to={`/product/${item._id}`}>
                  <img className="img-style" src={item.image} alt="sneakers" />
                </Link>
                <div class="card-tag">
                  <p class="h6">NEW ARRIVAL</p>
                </div>

                <div class="card-text">
                  <p class="h5">{item.brand}</p>
                  <p class="h2">{item.title}</p>
                  <p class="h3">
                    ₹{item.price} <span>₹{item.original_price}</span>
                  </p>
                  {cartState.cartProducts.some((i) => i._id === item._id) ? (
                    <Link to="/cart">
                      <button class="btn btn-secondary temp-class">
                        <p class="h4">Go to Cart</p>
                      </button>
                    </Link>
                  ) : (
                    <button
                      class="btn temp-class"
                      onClick={(e) =>
                        cartDispatch({ type: "ADD_TO_CART", payload: item })
                      }
                    >
                      <p class="h4">Add to Cart</p>
                    </button>
                  )}
                  {/* <button
                    class="btn temp-class"
                    onClick={(e) =>
                      cartDispatch({ type: "ADD_TO_CART", payload: item })
                    }
                  >
                    <p class="h4">Add to Cart</p>
                  </button> */}
                </div>
              </div>
            </li>
          );
        })}
      </div>
    </div>
  );
};
