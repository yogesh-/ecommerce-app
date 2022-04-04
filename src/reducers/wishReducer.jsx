const wishReducer = (wishState, wishAction) => {
  switch (wishAction.type) {
    case "ADD_TO_WISHLIST":
      const checkWishItem = wishState.wishProducts.map((item) => {
        return item.id === wishAction.payload.id;
      });
      if (checkWishItem)
        return {
          ...wishState,
          wishProducts: [wishState.wishProducts],
        };
      return {
        ...wishState.wishProducts,
        wishProducts: [wishAction.payload],
      };

    case "REMOVE_FROM_WISHLIST":
      return {};

    default:
      return wishState;
  }
};

export { wishReducer };
