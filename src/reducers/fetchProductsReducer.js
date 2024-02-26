import {
  FETCH_ALL_PRODUCTS_REQUEST,
  FETCH_ALL_PRODUCTS_SUCCESS,
  FETCH_ALL_PRODUCTS_FAILURE,
  FETCH_SELECTED_CATEGORIES_DATA_REQUEST,
  FETCH_SELECTED_CATEGORIES_DATA_SUCCESS,
  FETCH_SELECTED_CATEGORIES_DATA_FAILURE,
  FETCH_SINGLE_PRODUCT_FAILURE,
  FETCH_SINGLE_PRODUCT_REQUEST,
  FETCH_SINGLE_PRODUCT_SUCCESS,
} from '../actions/productActions';

const initialState = {
  products: null,
  loading: false,
  error: null,
  singleProduct: null,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_PRODUCTS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_ALL_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload, loading: false };
    case FETCH_ALL_PRODUCTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case FETCH_SELECTED_CATEGORIES_DATA_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_SELECTED_CATEGORIES_DATA_SUCCESS:
      return { ...state, loading: false, products: action.payload };
    case FETCH_SELECTED_CATEGORIES_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case FETCH_SINGLE_PRODUCT_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        singleProduct: action.payload,
      };
    case FETCH_SINGLE_PRODUCT_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default productsReducer;
