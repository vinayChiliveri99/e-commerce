import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import {
  getAllProductsSaga,
  getSelectedCategoryProductsSaga,
} from './sagas/productsSaga';
import getAllCategoriesSaga from './sagas/categoriesSaga';

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleWare)
);

sagaMiddleWare.run(getAllProductsSaga);
sagaMiddleWare.run(getAllCategoriesSaga);
sagaMiddleWare.run(getSelectedCategoryProductsSaga);

export default store;
