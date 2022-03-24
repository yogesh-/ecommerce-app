export const Categories = () => {
  return (
    <div className="shop-for">
      <div className="shop-for-elements">
        <h1 className="h1">🛍️SHOP FOR🛍️</h1>
        <div className="shop-for-images flex-row">
          <div className="img-container-one">
            <img className="square-img-shop" src="/assets/men.jpg" alt="men" />
            <a href="/html/product_listing.html">
              <button className="btn">
                <p className="h4">MEN's</p>
              </button>
            </a>
          </div>
          <div className="img-container-two">
            <img
              className="square-img-shop"
              src="/assets/women.jpg"
              alt="women"
            />
            <a href="/html/product_listing.html">
              <button className="btn">
                <p className="h4">WOMEN's</p>
              </button>
            </a>
          </div>
          <div className="img-container-three">
            <img
              className="square-img-shop"
              src="/assets/kids.jpg"
              alt="kids"
            />
            <a href="/html/product_listing.html">
              <button className="btn">
                <p className="h4">KID's</p>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
