import { Footer, Navbar } from "../../components/index";
import { useCart } from "../../context/cartContext";
import { useWish } from "../../context/wishContext";
import { useAuth } from "../../context/authContext";
import "./cart.css";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { isLoggedIn } = useAuth();
  console.log(isLoggedIn);
  const { wishDispatch } = useWish();
  const { cartState, cartDispatch } = useCart();
  const cartData = cartState.cartProducts;
  console.log(cartData);

  if (cartData.length === 0) {
    return (
      <div>
        <Navbar />
        <div class="cart-heading text-center">
          <p class="h2">MY CART ({cartState.totalItems} Items)</p>
        </div>

        <section className="empty price-container flex-col">
          {/* cartData render */}

          <p class="h1">YOUR CART IS EMPTY</p>
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
          <p class="h2">MY CART ({cartState.totalItems} Items)</p>
        </div>

        <section className="row">
          {/* cartData render */}

          <div className="column scroll-cart">
            {cartData &&
              cartData.map((item, index) => {
                return (
                  <div class="card flex-row">
                    <li key={index}>
                      <div>
                        <div class="card-horizontal">
                          <img src={item.image} alt="sneakers" />

                          <div class="card-text">
                            <p class="h4">{item.brand}</p>
                            <p class="h2" h1>
                              {item.title}
                            </p>
                            <p class="h3">
                              {item.price} <span>{item.original_price}</span>
                            </p>
                            <p class="h3">50% OFF</p>
                            <div class="incrementor flex-row">
                              <button
                                class="material-icons-outlined"
                                onClick={(e) =>
                                  cartDispatch({
                                    type: "INCREMENT",
                                    payload: item,
                                  })
                                }
                              >
                                add
                              </button>
                              <p class="h4">Quantity:{item.quantity}</p>
                              <button
                                class="material-icons-outlined"
                                onClick={(e) =>
                                  cartDispatch({
                                    type: "DECREMENT",
                                    payload: item,
                                  })
                                }
                              >
                                remove
                              </button>
                            </div>
                            <button
                              class="btn"
                              onClick={(e) =>
                                cartDispatch({
                                  type: "REMOVE_FROM_CART",
                                  payload: item,
                                })
                              }
                            >
                              <p class="h4">Remove from Cart</p>
                            </button>

                            <button
                              class="btn btn-secondary"
                              onClick={(e) =>
                                wishDispatch({
                                  type: "ADD_TO_WISHLIST",
                                  payload: item,
                                })
                              }
                            >
                              <p class="h4">Add to Wishlist</p>
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  </div>
                );
              })}
          </div>
          {/* Cart Total Section */}
          <div class="price flex-row column price-container">
            <div class="flex-col">
              <p class="h2">PRICE DETAILS</p>
              <hr />

              <div class="price-two-col flex-row">
                <div class="left-col">
                  <p class="h3">Total Items</p>
                  <p class="h3">Total Price</p>
                  <p class="h3">Discount</p>
                  <p class="h3">Delivery Charges</p>
                  <hr />
                  <p class="h2">TOTAL AMOUNT</p>
                </div>

                <div class="right-col">
                  <p class="h3">{cartState.totalItems}</p>
                  <p class="h3">{cartState.totalAmount} </p>
                  <p class="h3">{cartState.totalDiscount}</p>
                  <p class="h3">49</p>
                  <hr />
                  <p class="h2">
                    {cartState.totalAmount - cartState.totalDiscount + 49}
                  </p>
                </div>
              </div>
              <hr />

              <p id="last-line" class="h3 last-line">
                You would save {cartState.totalDiscount} on this order
              </p>

              <button class="btn">
                <p class="h3">Place Order</p>
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
};
