export const FETCH_ALL_PRODUCTS_REQUEST =
  'FETCH_ALL_PRODUCTS_REQUEST';
export const FETCH_ALL_PRODUCTS_SUCCESS =
  'FETCH_ALL_PRODUCTS_SUCCESS';
export const FETCH_ALL_PRODUCTS_FAILURE =
  'FETCH_ALL_PRODUCTS_FAILURE';

export const fetchAllProductsRequest = () => ({
  type: FETCH_ALL_PRODUCTS_REQUEST,
});

export const fetchAllProductsSuccess = (data) => ({
  type: FETCH_ALL_PRODUCTS_SUCCESS,
  payload: data,
});

export const fetchAllProductsFailure = (error) => ({
  type: FETCH_ALL_PRODUCTS_FAILURE,
  payload: error,
});
