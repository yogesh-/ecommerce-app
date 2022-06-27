import { useParams } from "react-router-dom";
import { Navbar } from "../../components";
import { Footer } from "../../components";
import "./productDetails.css";
import { useCart } from "../../context/cartContext";
import { useWish } from "../../context/wishContext";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const ProductDetails = () => {
  const { productId } = useParams();
  const { cartState, cartDispatch } = useCart();
  const { wishState, wishDispatch } = useWish();
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

  const addToCart = () => {
    cartDispatch({
      type: "ADD_TO_CART",
      payload: data,
    });
  };

  const addToWishList = () => {
    wishDispatch({
      type: "ADD_TO_WISHLIST",
      payload: data,
    });
  };

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
          <p className="h3">₹ {data.price}</p>
          <p className="h3 product-desc">{data.description}</p>
          <div className="buttons-row">
            {cartState.cartProducts.some((item) => item._id === data._id) ? (
              <Link to="/cart">
                {" "}
                <button className="btn">
                  <p className="h4">Go to Cart</p>
                </button>
              </Link>
            ) : (
              <button className="btn btn-secondary" onClick={addToCart}>
                <p className="h4">Add to Cart</p>
              </button>
            )}

            {wishState.wishProducts.some((item) => item._id === data._id) ? (
              <Link to="/wishlist">
                {" "}
                <button className="btn btn-secondary">
                  <p className="h4">Go to WishList</p>
                </button>
              </Link>
            ) : (
              <button className="btn" onClick={addToWishList}>
                <p className="h4">Add to WishList</p>
              </button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
