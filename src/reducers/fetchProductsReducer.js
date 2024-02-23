import {
  FETCH_ALL_PRODUCTS_REQUEST,
  FETCH_ALL_PRODUCTS_SUCCESS,
  FETCH_ALL_PRODUCTS_FAILURE,
} from '../actions/productActions';

const initialState = {
  products: null,
  loading: false,
  error: null,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_PRODUCTS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_ALL_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload, loading: false };
    case FETCH_ALL_PRODUCTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default productsReducer;
