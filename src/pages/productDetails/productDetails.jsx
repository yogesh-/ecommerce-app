import { useParams } from "react-router-dom";
import { products } from "../../backend/db/products";
import { Navbar } from "../../components";
import { Footer } from "../../components";
import "./productDetails.css";
import { useCart } from "../../context/cartContext";
import { useWish } from "../../context/wishContext";

export const ProductDetails = () => {
  const { productId } = useParams();
  const { cartDispatch } = useCart();
  const { wishDispatch } = useWish();

  const singleProduct = (productsDb, id) =>
    productsDb.find((product) => product._id === id);

  var finalSingleProduct = singleProduct(products, productId);

  return (
    <>
      <Navbar />
      <div className="item-display flex-row">
        <div>
          <img
            className="img-style"
            src={finalSingleProduct.image}
            alt="product_image"
          ></img>
        </div>
        <div className="flex-col">
          <p className="h1">{finalSingleProduct.title}</p>
          <p className="h3">{finalSingleProduct.brand}</p>
          <p className="h4">Rating: {finalSingleProduct.rating}/5</p>
          <p className="h3">Rs. {finalSingleProduct.price}</p>
          <p className="h3 product-desc">{finalSingleProduct.description}</p>
          <div className="buttons-row">
            <button
              className="btn"
              onClick={(e) =>
                cartDispatch({
                  type: "ADD_TO_CART",
                  payload: finalSingleProduct,
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
                  payload: finalSingleProduct,
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
