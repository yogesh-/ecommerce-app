import { Footer } from "../../components/footer/footer";
import { Navbar } from "../../components/navbar/navbar";
import { useWish } from "../../context/wishContext";
import { useCart } from "../../context/cartContext";
import { Link } from "react-router-dom";
import "./wishlist.css";

export const Wishlist = () => {
  const { wishState, wishDispatch } = useWish();
  const { cartDispatch } = useCart();
  const finalWish = wishState.wishProducts;

  if (finalWish.length === 0) {
    return (
      <div>
        <Navbar />
        <section className="empty_wish price-container flex-col">
          <p class="h1">YOUR Wish List IS EMPTY</p>
          <Link to="/products">
            <button class="btn h4">SHOP NOW</button>
          </Link>
        </section>
        <Footer />
      </div>
    );
  } else {
    return (
      <div>
        <Navbar />
        <div class="cart-heading text-center">
          <p class="h2">WISHLIST ({wishState.wishCount} Items)</p>
        </div>
        <div className="flex-row-wish">
          {finalWish.map((item, index) => {
            return (
              <div className="flex-row card">
                <li key={index}>
                  <div className="card-badge">
                    <img src={item.image} alt="sneakers" />

                    <div className="card-text">
                      <p className="h5">{item.brand}</p>
                      <p className="h2">{item.title}</p>
                      <p className="h3">
                        ₹{item.price} <span>₹{item.original_price}</span>
                      </p>
                      <div className="prod-buttons">
                        <button
                          className="btn"
                          onClick={(e) =>
                            cartDispatch({
                              type: "ADD_TO_CART",
                              payload: item,
                            })
                          }
                        >
                          <p className="h4">Add to Cart</p>
                        </button>

                        <button
                          className="btn btn-secondary"
                          onClick={(e) =>
                            wishDispatch({
                              type: "REMOVE_FROM_WISHLIST",
                              payload: item,
                            })
                          }
                        >
                          <p className="h4">Remove</p>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              </div>
            );
          })}
        </div>
        <Footer />
      </div>
    );
  }
};
