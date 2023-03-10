export const cartReducer = (state, action) => {
  switch (action.type) {
    case "[Cart] - Load Cart from cookies | storage":
      return {
        ...state,
        cart: action.payload,
      };
    case "[Cart] - Update products in cart":
      return {
        ...state,
        cart: [...action.payload],
      };
    case "[Cart] - Change cart quantity":
      return {
        ...state,
        cart: state.cart.map((product) => {
          if (product.slug !== action.payload.slug) return product;
          if (product.size !== action.payload.size) return product;
          return action.payload;
        }),
      };
    case "[Cart] - Remove product in cart":
      return {
        ...state,
        cart: state.cart.filter(
          (product) => !(product.slug === action.payload.slug)
        ),
      };
    case "[Cart] - Update order summary":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
