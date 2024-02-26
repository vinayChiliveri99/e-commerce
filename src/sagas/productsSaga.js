import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_ALL_PRODUCTS_REQUEST,
  fetchAllProductsSuccess,
  fetchAllProductsFailure,
  fetchSelectedCategoryProductsSuccess,
  fetchSelectedCategoryProductsFailure,
  FETCH_SELECTED_CATEGORIES_DATA_REQUEST,
  FETCH_SINGLE_PRODUCT_REQUEST,
  fetchSingleProductFailure,
  fetchSingleProductSuccess,
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

export function* getASingleProductSaga() {
  yield takeLatest(
    FETCH_SINGLE_PRODUCT_REQUEST,
    getSingleProductDetails
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

function* getSingleProductDetails(action) {
  try {
    const productId = action.payload;
    const response = yield call(
      axios.get,
      `https://api.escuelajs.co/api/v1/products/${productId}`
    );

    yield put(fetchSingleProductSuccess(response.data));
  } catch (error) {
    yield put(fetchSingleProductFailure(error));
  }
}
