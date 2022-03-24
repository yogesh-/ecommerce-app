export const Hero = () => {
  return (
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
  );
};
