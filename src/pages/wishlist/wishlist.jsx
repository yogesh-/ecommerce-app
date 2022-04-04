import { Footer } from "../../components/footer/footer";
import { Navbar } from "../../components/navbar/navbar";
import { useWish } from "../../context/wishContext";

export const Wishlist = () => {
  const { wishState } = useWish();
  const finalWish = wishState.wishProducts;
  console.log(finalWish);

  return (
    <div>
      <Navbar />
      {finalWish.map((item, index) => {
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
                {/* <div className="prod-buttons">
                  <button
                    className="btn"
                    onClick={(e) =>
                      wishDispatch({
                        type: "REMOVE_FROM_WISHLIST",
                        payload: item,
                      })
                    }
                  >
                    <p className="h4">Add to Cart</p>
                  </button>

                  <button className="btn btn-secondary">
                    <p className="h4">Add to Wishlist</p>
                  </button>
                </div> */}
              </div>
            </div>
          </li>
        );
      })}

      <Footer />
    </div>
  );
};
