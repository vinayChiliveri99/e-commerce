import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_ALL_PRODUCTS_REQUEST,
  fetchAllProductsSuccess,
  fetchAllProductsFailure,
  fetchSelectedCategoryProductsSuccess,
  fetchSelectedCategoryProductsFailure,
  FETCH_SELECTED_CATEGORIES_DATA_REQUEST,
} from '../actions/productActions';

export function* getAllProductsSaga() {
  yield takeLatest(FETCH_ALL_PRODUCTS_REQUEST, getAllProducts);
}

export function* getSelectedCategoryProductsSaga() {
  yield takeLatest(
    FETCH_SELECTED_CATEGORIES_DATA_REQUEST,
    getSelectedCategoryProducts
  );
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

function* getSelectedCategoryProducts(action) {
  try {
    console.log('action', action);
    const categoryId = action.payload;
    const response = yield call(
      axios.get,
      `https://api.escuelajs.co/api/v1/products/?categoryId=${categoryId}`
    );

    yield put(fetchSelectedCategoryProductsSuccess(response.data));
  } catch (error) {
    yield put(fetchSelectedCategoryProductsFailure(error));
  }
}
