import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import getAllProductsSaga from './sagas/productsSaga';
import getAllCategoriesSaga from './sagas/categoriesSaga';

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleWare)
);

sagaMiddleWare.run(getAllProductsSaga);
sagaMiddleWare.run(getAllCategoriesSaga);

export default store;
