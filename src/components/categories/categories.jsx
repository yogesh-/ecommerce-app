export const Categories = () => {
  return (
    <div class="shop-for">
      <div class="shop-for-elements">
        <h1 class="h1">🛍️SHOP FOR🛍️</h1>
        <div class="shop-for-images flex-row">
          <div class="img-container-one">
            <img class="square-img-shop" src="/assets/men.jpg" alt="men" />
            <a href="/html/product_listing.html">
              <button class="btn">
                <p class="h4">MEN's</p>
              </button>
            </a>
          </div>
          <div class="img-container-two">
            <img class="square-img-shop" src="/assets/women.jpg" alt="women" />
            <a href="/html/product_listing.html">
              <button class="btn">
                <p class="h4">WOMEN's</p>
              </button>
            </a>
          </div>
          <div class="img-container-three">
            <img class="square-img-shop" src="/assets/kids.jpg" alt="kids" />
            <a href="/html/product_listing.html">
              <button class="btn">
                <p class="h4">KID's</p>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
