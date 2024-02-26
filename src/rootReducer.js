import { combineReducers } from 'redux';
import productsReducer from './reducers/fetchProductsReducer';
import categoriesReducer from './reducers/fetchCategoriesReducer';
import searchReducer from './reducers/searchReducer';
import addToCartReducer from './reducers/addToCartReducer';

const rootReducer = combineReducers({
  productsReducer: productsReducer,
  categoriesReducer: categoriesReducer,
  searchReducer: searchReducer,
  addToCartReducer: addToCartReducer,
});

export default rootReducer;
