import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div class="hero-banner badge flex-col">
      <img src="/assets/latest1.jpg" alt="latest1" />

      <div class="hero-text">
        <p class="h1">Power Your Morning Runs</p>
        <p class="h3">
          SNEAKERS brings the best shoe collection you can get to wake up every
          morning excitedly for your runs.
        </p>
        <div class="cta-buttons flex-row">
          {/* <Link to="/products">
            <button class="btn btn-primary">
              <span class="h4">BUY NOW</span>
            </button>
          </Link> */}

          <Link to="/products">
            <button class="btn btn-primary">
              <span class="h4">Check Collection</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
