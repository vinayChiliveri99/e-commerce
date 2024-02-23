import {
  FETCH_ALL_CATEGORIES_REQUEST,
  FETCH_ALL_CATEGORIES_SUCCESS,
  FETCH_ALL_CATEGORIESS_FAILURE,
} from '../actions/categoriesActions';

const initialState = {
  categories: null,
  loading: false,
  error: null,
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_CATEGORIES_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_ALL_CATEGORIES_SUCCESS:
      return { ...state, categories: action.payload, loading: false };
    case FETCH_ALL_CATEGORIESS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default categoriesReducer;
