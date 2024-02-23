import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import {
  FETCH_ALL_CATEGORIES_REQUEST,
  fetchAllCategoriesSuccess,
  fetchAllCategoriessFailure,
} from '../actions/categoriesActions';

export default function* getAllCategoriesSaga() {
  yield takeEvery(FETCH_ALL_CATEGORIES_REQUEST, getAllCategories);
}

function* getAllCategories() {
  try {
    const response = yield call(
      axios.get,
      'https://api.escuelajs.co/api/v1/categories'
    );

    yield put(fetchAllCategoriesSuccess(response.data));
  } catch (error) {
    yield put(fetchAllCategoriessFailure(error));
  }
}
