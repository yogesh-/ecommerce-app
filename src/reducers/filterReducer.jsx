const reducerFunc = (state, action) => {
  switch (action.type) {
    case "PRICE":
      return { ...state, price: action.price_val };
    case "RUNNING":
      return {
        ...state,
        ...state["categories"],
        running: !state.categories.running,
      };
    case "WORKOUT":
      return {
        ...state,
        ...state["categories"],
        workout: !state.categories.workout,
      };
    case "TENNIS":
      return {
        ...state,
        ...state["categories"],
        tennis: !state.categories.workout,
      };

    case "RATING":
      return {
        ...state,
        rating: parseInt(action.value, 1),
      };

    case "LOW_TO_HIGH":
      return {
        ...state,
        sortBy: action.type,
      };

    case "HIGHT_TO_LOW":
      return {
        ...state,
        sortBy: action.type,
      };

    case "CLEAR":
      return {
        price: 5000,
        categories: { Running: false, Workout: false, Tennis: false },
        rating: "",
        sortby: "",
      };

    default:
      return state;
  }
};

export { reducerFunc };
