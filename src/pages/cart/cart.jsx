import { Footer, Navbar } from "../../components/index";
import { useCart } from "../../context/cartContext";
import "./cart.css";

export const Cart = () => {
  const { cartState } = useCart();
  console.log(cartState, "hello");
  console.log("string");
  const cartData = cartState.cartProducts;
  console.log(cartState.cartProducts, "cartstate+cartproducts");
  console.log(cartData, "from cart data");

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
                        <img src="/assets/nike.png" alt="sneakers" />

                        <div class="card-text">
                          <p class="h4">Nike</p>
                          <p class="h2" h1>
                            Nike Airforce
                          </p>
                          <p class="h3">
                            Rs.4900 <span>Rs.9999</span>
                          </p>
                          <p class="h3">50% OFF</p>
                          <div class="incrementor flex-row">
                            <p class="h4">Quantity: </p>
                            <input
                              id="number"
                              class="h4"
                              type="number"
                              value="2"
                            />
                          </div>
                          <button class="btn">
                            <p class="h4">Remove from Cart</p>
                          </button>
                          <button class="btn btn-secondary">
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
                <p class="h3">Item Total</p>
                <p class="h3">Price Total</p>
                <p class="h3">Discount</p>
                <p class="h3">Delivery Charges</p>
                <hr />
                <p class="h2">TOTAL AMOUNT</p>
              </div>

              <div class="right-col">
                <p class="h3">{cartState.totalItems}</p>
                <p class="h3">4999 </p>
                <p class="h3">0</p>
                <p class="h3">49</p>
                <hr />
                <p class="h2">{cartState.totalAmount}</p>
              </div>
            </div>
            <hr />

            <p id="last-line" class="h3 last-line">
              You would save 1999 on this order
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
};
