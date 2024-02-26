import { ADD_TO_CART } from '../actions/addToCartActions';

const initialState = {
  cart: [],
};

const addToCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

export default addToCartReducer;
