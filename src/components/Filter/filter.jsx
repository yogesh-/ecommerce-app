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

        <div className="filter-price filter-styling">
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
              defaultValue="50"
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
            <label for="checkbox-1">
              <input
                id="checkbox-1"
                name="running"
                type="checkbox"
                checked={running}
                onChange={(e) => dispatch({ type: "RUNNING" })}
              />
              Running
            </label>
            <label for="checkbox-1">
              <input
                id="checkbox-1"
                name="workout"
                type="checkbox"
                checked={workout}
                onChange={(e) => dispatch({ type: "WORKOUT" })}
              />
              Workout
            </label>
            <label for="checkbox-1">
              <input
                id="checkbox-1"
                name="tennis"
                type="checkbox"
                checked={tennis}
                onChange={(e) => dispatch({ type: "TENNIS" })}
              />
              Tennis
            </label>
          </div>
        </div>

        <div className="filter-rating filter-styling">
          <p className="h3">Rating</p>
          <div className="radio">
            <label for="radio-1">
              <input
                id="radio-1"
                name="radio"
                type="radio"
                checked={rating === 4}
                value="4"
              />
              4 stars & above
            </label>

            <label for="radio-1">
              <input
                id="radio-1"
                name="radio"
                type="radio"
                checked={rating === 3}
                value="3"
              />
              3 stars & above
            </label>

            <label for="radio-1">
              <input
                id="radio-1"
                name="radio"
                type="radio"
                checked={rating === 2}
                value="2"
              />
              2 stars & above
            </label>

            <label for="radio-1">
              <input
                id="radio-1"
                name="radio"
                type="radio"
                checked={rating === 1}
                value="1"
              />
              1 stars & above
            </label>
          </div>
        </div>

        <div className="filter-sorting filter-styling">
          <p className="h3">Sort By</p>
          <div className="radio">
            <label for="radio-2">
              <input
                id="radio-2"
                name="radio2"
                type="radio"
                checked={sortBy === "LOW_TO_HIGH"}
                value="lowToHigh"
                onChange={() => dispatch({ type: "LOW_TO_HIGH" })}
              />
              Low to High
            </label>

            <label for="radio-2">
              <input
                id="radio-2"
                name="radio2"
                type="radio"
                checked={sortBy === "HIGH_TO_LOW"}
                value="highToLow"
                onChange={() => dispatch({ type: "HIGH_TO_LOW" })}
              />
              Hight to Low
            </label>
          </div>
        </div>
      </div>
    </sidebar>
  );
};
