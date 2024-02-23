import { combineReducers } from 'redux';
import productsReducer from './reducers/fetchProductsReducer';

const rootReducer = combineReducers({
  productsReducer: productsReducer,
});

export default rootReducer;
