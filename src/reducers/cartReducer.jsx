const cartReducer = (cartState, cartAction) => {
  switch (cartAction.type) {
    case "ADD_TO_CART":
      const checkItem = cartState.cartProducts.find((item) => {
        console.log("cart action", item.id, item.title);
        return item.id === cartAction.payload.id;
      });
      if (checkItem) {
        return {
          ...cartState,
          totalItems: cartState.totalItems + 1,
          totalAmount: cartState.totalAmount + cartAction.payload.price,
          cartProducts: cartState.cartProducts.map((item) =>
            item.id === cartAction.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      return {
        ...cartState,
        TotalItems: cartState.totalItems + 1,
        TotalAmount: cartState.TotalAmount + cartAction.payload.price,
        cartProducts: [
          ...cartState.cartProducts,
          { ...cartAction.payload, quantity: 1 },
        ],
      };

    case "REMOVE_FROM_CART":
      const removeItem = cartState.cartProducts.find((item) => {
        return item.id === cartAction.payload.id;
      });
      if (removeItem) {
        return {
          ...cartState,
          totalItems: cartState.totalItems - 1,
          totalAmount: cartState.totalAmount - cartAction.payload.price,
          cartProducts: cartState.cartProducts.map((item) =>
            item.id === cartAction.payload.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        };
      }
      return {
        ...cartState,
        totalItems: cartState.totalItems,
        totalAmount: cartState.totalAmount,
        cartProducts: [...cartState.cartProducts],
      };

    default:
      return cartState;
  }
};

export { cartReducer };
