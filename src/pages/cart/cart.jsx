import { Footer, Navbar } from "../../components/index";
import { useCart } from "../../context/cartContext";

export const Cart = () => {
  const { cartState } = useCart();
  const mela = cartState.cartItems;
  console.log(mela);

  return (
    <div>
      <Navbar />
      <h1 class="h1">This is cart page</h1>

      {/* <section>
        {mela.map((item, index) => {
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
                      <button className="btn" onClick={(e)=>cartDispatch({type:"ADD_TO_CART",payload:item})}>
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
      </section> */}

      <Footer />
    </div>
  );
};
