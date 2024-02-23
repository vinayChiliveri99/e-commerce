import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_ALL_PRODUCTS_REQUEST,
  fetchAllProductsSuccess,
  fetchAllProductsFailure,
} from '../actions/productActions';

export default function* getAllProductsSaga() {
  yield takeEvery(FETCH_ALL_PRODUCTS_REQUEST, getAllProducts);
}

function* getAllProducts() {
  try {
    const response = yield call(
      axios.get,
      'https://api.escuelajs.co/api/v1/products'
    );
    yield put(fetchAllProductsSuccess(response.data));
  } catch (error) {
    yield put(fetchAllProductsFailure(error));
  }
}
