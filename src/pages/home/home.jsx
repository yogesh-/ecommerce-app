import "./home.css";

export const Home = () => {
  return (
    <div>
      <div class="home-page">
        {/* navigation bar */}

        <nav class="flex-row">
          <div class="logo">
            <a href="/index.html">
              <p class="h1">SNEAKERS</p>
            </a>
          </div>

          <div class="search-bar flex-row">
            <input type="text" placeholder="Search" />
            <span class="material-icons-outlined search-icon">search</span>
          </div>

          <div class="nav-items">
            <ul class="flex-row right-icons">
              <li>
                <a href="/html/login.html">
                  <button class="btn">
                    <p class="h4">Login</p>
                  </button>
                </a>
              </li>

              <li>
                <a href="/html/wishlist.html">
                  <div class="badge">
                    <span class="material-icons-outlined">favorite_border</span>

                    <div class="number-red">8</div>
                  </div>
                </a>
              </li>

              <li>
                <a href="/html/cart.html">
                  <div class="badge">
                    <span class="material-icons-outlined">shopping_cart</span>
                    <div class="number-red">12</div>
                  </div>
                </a>
              </li>

              <li>
                <a href="/html/logout.html">
                  <span class="material-icons-outlined">logout</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* <!-- Hero section --> */}

        <div class="hero-banner badge flex-col">
          <img src="/assets/latest1.jpg" alt="latest1" />

          <div class="hero-text">
            <p class="h1">Power Your Morning Runs</p>
            <p class="h3">
              Nike Airflow is the best shoe you can get to wake up every morning
              excitedly for your runs.
            </p>
            <div class="cta-buttons flex-row">
              <a href="/html/cart.html">
                <button class="btn btn-primary">
                  <span class="h4">BUY NOW</span>
                </button>
              </a>

              <a href="/html/product_listing.html">
                <button class="btn btn-primary">
                  <span class="h4">Check Collection</span>
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* <!-- shop for --> */}

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
                <img
                  class="square-img-shop"
                  src="/assets/women.jpg"
                  alt="women"
                />
                <a href="/html/product_listing.html">
                  <button class="btn">
                    <p class="h4">WOMEN's</p>
                  </button>
                </a>
              </div>
              <div class="img-container-three">
                <img
                  class="square-img-shop"
                  src="/assets/kids.jpg"
                  alt="kids"
                />
                <a href="/html/product_listing.html">
                  <button class="btn">
                    <p class="h4">KID's</p>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- trending items --> */}

        <div class="trending-items">
          <h1 class="h1">Trending Collection</h1>

          <div class="trending-items-list">
            <div class="card-badge">
              <img src="/assets/nike.png" alt="sneakers" />
              <div class="card-tag">
                <p class="h6">NEW ARRIVAL</p>
              </div>

              <div class="card-text">
                <p class="h5">Nike</p>
                <p class="h2">Nike Airforce</p>
                <p class="h3">
                  Rs.4900 <span>Rs.9999</span>
                </p>
                <a href="/html/cart.html">
                  <button class="btn temp-class">
                    <p class="h4">Add to Cart</p>
                  </button>
                </a>
              </div>
            </div>

            <div class="card-badge">
              <img src="/assets/nike.png" alt="sneakers" />
              <div class="card-tag">
                <p class="h6">NEW ARRIVAL</p>
              </div>

              <div class="card-text">
                <p class="h5">Nike</p>
                <p class="h2">Nike Airforce</p>
                <p class="h3">
                  Rs.4900 <span>Rs.9999</span>
                </p>
                <a href="/html/cart.html">
                  <button class="btn temp-class">
                    <p class="h4">Add to Cart</p>
                  </button>
                </a>
              </div>
            </div>

            <div class="card-badge">
              <img src="/assets/nike.png" alt="sneakers" />
              <div class="card-tag">
                <p class="h6">NEW ARRIVAL</p>
              </div>

              <div class="card-text">
                <p class="h5">Nike</p>
                <p class="h2">Nike Airforce</p>
                <p class="h3">
                  Rs.4900 <span>Rs.9999</span>
                </p>
                <a href="/html/cart.html">
                  <button class="btn temp-class">
                    <p class="h4">Add to Cart</p>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- footer --> */}

        <div class="footer-home flex-col">
          <h1 class="h3">Created by Yogesh Gupta</h1>
          <div class="social" id="social">
            <a href="https://github.com/yogesh-">
              <img class="icons" src="/assets/github.png" alt="github" />
            </a>
            <a href="https://twitter.com/yo_gupta">
              <img class="icons" src="/assets/twitter.png" alt="twitter" />
            </a>
            <a href="https://www.linkedin.com/in/yogupta/">
              <img class="icons" src="/assets/linkedin.png" alt="linkedin" />
            </a>
          </div>

          <p class="h5">&#169; 2022 SNEAKERS Pvt Ltd</p>
        </div>
      </div>
    </div>
  );
};
