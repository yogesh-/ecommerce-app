const wishReducer = (wishState, wishAction) => {
  switch (wishAction.type) {
    case "ADD_TO_WISHLIST":
      const checkWishItem = wishState.wishProducts.find((item) => {
        return item.id === wishAction.payload.id;
      });
      if (checkWishItem)
        return {
          ...wishState,
          wishCount: wishState.wishCount,
          wishProducts: [...wishState.wishProducts],
        };
      return {
        ...wishState,
        wishCount: wishState.wishCount + 1,
        wishProducts: [...wishState.wishProducts, { ...wishAction.payload }],
      };

    case "REMOVE_FROM_WISHLIST":
      const removeWish = wishState.wishProducts.find((item) => {
        return item.id === wishAction.payload.id;
      });
      if (removeWish) {
        return {
          ...wishState,
          wishCount: wishState.wishCount - 1,
          wishProducts: wishState.wishProducts.filter(
            (item) => item.id !== wishAction.payload.id
          ),
        };
      }
      return {
        ...wishState,
        wishCount: wishState.wishCount,
        wishProducts: [...wishState.wishProducts],
      };

    default:
      return wishState;
  }
};

export { wishReducer };
