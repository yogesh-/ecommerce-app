import { useFilter } from "../../context/filtercontext";

export const Filter = () => {
  const { state, dispatch } = useFilter();
  const { price, rating, sortBy, categories } = state;
  const { running, tennis, workout } = categories;

  return (
    <sidebar>
      <div className="sidebar">
        <div className="filter-header flex-row filter-styling">
          <p className="h3">Filters</p>
          <button onClick={() => dispatch({ type: "CLEAR" })}>
            <p className="h4">Clear All Filters</p>
          </button>
        </div>

        <div className="filter-price filter-styling margin-top-bottom">
          <p className="h3">Price</p>
          <div className="filter-price-break flex-row">
            <p className="h3">1k</p>
            <p className="h3">2k</p>
            <p className="h3">3k</p>
            <p className="h3">4k</p>
            <p className="h3">5k</p>
          </div>

          <div className="slidecontainer">
            <input
              type="range"
              min="1000"
              max="5000"
              defaultValue="30"
              step="1000"
              value={price}
              className="slider"
              id="myRange"
              onChange={(e) =>
                dispatch({ type: "PRICE", price_val: e.target.value })
              }
            />
          </div>
        </div>

        <div className="filter-category flex-col filter-styling">
          <p className="h3">Category</p>
          <div className="filter-checkboks checkbox">
            <div className="filter-flex">
              <label for="checkbox-1">
                <input
                  id="checkbox-1"
                  name="running"
                  type="checkbox"
                  value="running"
                  checked={running}
                  onChange={(e) => dispatch({ type: "RUNNING" })}
                />
              </label>
              <p className="h4">Running</p>
            </div>

            <div className="filter-flex">
              <label for="checkbox-1">
                <input
                  id="checkbox-1"
                  name="workout"
                  type="checkbox"
                  value="workout"
                  checked={workout}
                  onChange={(e) => dispatch({ type: "WORKOUT" })}
                />
              </label>
              <p className="h4">Workout</p>
            </div>

            <div className="filter-flex">
              <label for="checkbox-1">
                <input
                  id="checkbox-1"
                  name="tennis"
                  type="checkbox"
                  value="tennis"
                  checked={tennis}
                  onChange={(e) => dispatch({ type: "TENNIS" })}
                />
              </label>
              <p className="h4">Tennis</p>
            </div>
          </div>
        </div>

        {/* RATING */}

        <div className="filter-rating filter-styling">
          <p className="h3">Rating</p>
          <div className="radio">
            <div className="filter-flex">
              <label for="radio-1">
                <input
                  id="radio-1"
                  name="radio-rating"
                  type="radio"
                  checked={rating === 4}
                  value="4"
                  onChange={(e) =>
                    dispatch({ type: "RATING", value: e.target.value })
                  }
                />
              </label>
              <p className="h4">4 stars & above</p>
            </div>

            <div className="filter-flex">
              <label for="radio-2">
                <input
                  id="radio-2"
                  name="radio-rating"
                  type="radio"
                  checked={rating === 3}
                  value="3"
                  onChange={(e) =>
                    dispatch({ type: "RATING", value: e.target.value })
                  }
                />
              </label>
              <p className="h4">3 stars & above</p>
            </div>

            <div className="filter-flex">
              <label for="radio-3">
                <input
                  id="radio-3"
                  name="radio-rating"
                  type="radio"
                  checked={rating === 2}
                  value="2"
                  onChange={(e) =>
                    dispatch({ type: "RATING", value: e.target.value })
                  }
                />
              </label>
              <p className="h4">2 stars & above</p>
            </div>

            <div className="filter-flex">
              <label for="radio-4">
                <input
                  id="radio-4"
                  name="radio-rating"
                  type="radio"
                  checked={rating === 1}
                  value="1"
                  onChange={(e) =>
                    dispatch({ type: "RATING", value: e.target.value })
                  }
                />
              </label>
              <p className="h4">1 stars & above</p>
            </div>
          </div>
        </div>

        {/* SORT BY PRICE */}

        <div className="filter-sorting filter-styling">
          <p className="h3">Sort By</p>
          <div className="radio">
            <div className="filter-flex">
              <label for="radio-sort-1">
                <input
                  id="radio-sort-1"
                  name="radio-price"
                  type="radio"
                  checked={sortBy === "LOW_TO_HIGH"}
                  value="lowToHigh"
                  onChange={() => dispatch({ type: "LOW_TO_HIGH" })}
                />
              </label>
              <p className="h4">Low to High</p>
            </div>

            <div className="filter-flex">
              <label for="radio-sort-2">
                <input
                  id="radio-sort-2"
                  name="radio-price"
                  type="radio"
                  checked={sortBy === "HIGH_TO_LOW"}
                  value="highToLow"
                  onChange={() => dispatch({ type: "HIGH_TO_LOW" })}
                />
              </label>
              <p className="h4">Hight to Low</p>
            </div>
          </div>
        </div>
      </div>
    </sidebar>
  );
};
