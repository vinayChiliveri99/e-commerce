import { combineReducers } from 'redux';
import productsReducer from './reducers/fetchProductsReducer';
import categoriesReducer from './reducers/fetchCategoriesReducer';
import searchReducer from './reducers/searchReducer';

const rootReducer = combineReducers({
  productsReducer: productsReducer,
  categoriesReducer: categoriesReducer,
  searchReducer: searchReducer,
});

export default rootReducer;
