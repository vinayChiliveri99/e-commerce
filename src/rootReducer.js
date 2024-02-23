import { combineReducers } from 'redux';
import productsReducer from './reducers/fetchProductsReducer';
import categoriesReducer from './reducers/fetchCategoriesReducer';

const rootReducer = combineReducers({
  productsReducer: productsReducer,
  categoriesReducer: categoriesReducer,
});

export default rootReducer;
