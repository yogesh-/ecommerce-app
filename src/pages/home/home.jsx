import { Categories } from "../../components/categories/categories";
import { Footer } from "../../components/footer/footer";
import { Hero } from "../../components/hero/hero";
import { Navbar } from "../../components/navbar/navbar";
import { Trending } from "../../components/trending/trending";
import "./home.css";

export const Home = () => {
  return (
    <div>
      <div class="home-page">
        {/* navigation bar */}

        <Navbar />

        {/* <!-- Hero section --> */}

        <Hero />

        {/* <!-- shop for --> */}

        <Categories />

        {/* <!-- trending items --> */}

        <Trending />

        {/* <!-- footer --> */}

        <Footer />
      </div>
    </div>
  );
};
