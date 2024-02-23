export const FETCH_ALL_CATEGORIES_REQUEST =
  'FETCH_ALL_CATEGORIES_REQUEST';
export const FETCH_ALL_CATEGORIES_SUCCESS =
  'FETCH_ALL_CATEGORIES_SUCCESS';
export const FETCH_ALL_CATEGORIESS_FAILURE =
  'FETCH_ALL_CATEGORIESS_FAILURE';

export const fetchAllCategoriesRequest = () => ({
  type: FETCH_ALL_CATEGORIES_REQUEST,
});

export const fetchAllCategoriesSuccess = (data) => ({
  type: FETCH_ALL_CATEGORIES_SUCCESS,
  payload: data,
});

export const fetchAllCategoriessFailure = (error) => ({
  type: FETCH_ALL_CATEGORIESS_FAILURE,
  payload: error,
});
