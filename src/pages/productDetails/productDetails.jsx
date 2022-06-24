import { useParams } from "react-router-dom";
import { Navbar } from "../../components";
import { Footer } from "../../components";
import "./productDetails.css";
import { useCart } from "../../context/cartContext";
import { useWish } from "../../context/wishContext";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export const ProductDetails = () => {
  const { productId } = useParams();
  const { cartDispatch } = useCart();
  const { wishDispatch } = useWish();
  const [data, setData] = useState({});

  const productCall = async () => {
    try {
      var url = `/api/products/${productId}`;

      const productCall = await axios.get(url);
      var finalSingleProduct = productCall.data.product;
      setData(finalSingleProduct);
    } catch (error) {}
  };
  useEffect(() => {
    productCall();
  });

  return (
    <>
      <Navbar />
      <div className="item-display flex-row">
        <div>
          <img className="img-style" src={data.image} alt="product_image"></img>
        </div>
        <div className="flex-col">
          <p className="h1">{data.title}</p>
          <p className="h3">{data.brand}</p>
          <p className="h4">Rating: {data.rating} ⭐</p>
          <p className="h3">Rs. {data.price}</p>
          <p className="h3 product-desc">{data.description}</p>
          <div className="buttons-row">
            <button
              className="btn"
              onClick={(e) =>
                cartDispatch({
                  type: "ADD_TO_CART",
                  payload: data,
                })
              }
            >
              <p className="h4">Add to Cart</p>
            </button>

            <button
              className="btn btn-secondary"
              onClick={(e) =>
                wishDispatch({
                  type: "ADD_TO_WISHLIST",
                  payload: data,
                })
              }
            >
              <p className="h4">Add to Wishlist</p>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
