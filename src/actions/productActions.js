export const FETCH_ALL_PRODUCTS_REQUEST =
  'FETCH_ALL_PRODUCTS_REQUEST';
export const FETCH_ALL_PRODUCTS_SUCCESS =
  'FETCH_ALL_PRODUCTS_SUCCESS';
export const FETCH_ALL_PRODUCTS_FAILURE =
  'FETCH_ALL_PRODUCTS_FAILURE';
export const FETCH_SELECTED_CATEGORIES_DATA_REQUEST =
  'FETCH_SELECTED_CATEGORIES_DATA_REQUEST';
export const FETCH_SELECTED_CATEGORIES_DATA_SUCCESS =
  'FETCH_SELECTED_CATEGORIES_DATA_SUCCESS';
export const FETCH_SELECTED_CATEGORIES_DATA_FAILURE =
  'FETCH_SELECTED_CATEGORIES_DATA_FAILURE';
export const FETCH_SINGLE_PRODUCT_REQUEST =
  'FETCH_SINGLE_PRODUCT_REQUEST';
export const FETCH_SINGLE_PRODUCT_SUCCESS =
  'FETCH_SINGLE_PRODUCT_SUCCESS';
export const FETCH_SINGLE_PRODUCT_FAILURE =
  'FETCH_SINGLE_PRODUCT_FAILURE';

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

export const fetchSelectedCategoryProductsRequest = (categoryId) => ({
  type: FETCH_SELECTED_CATEGORIES_DATA_REQUEST,
  payload: categoryId,
});

export const fetchSelectedCategoryProductsSuccess = (data) => ({
  type: FETCH_SELECTED_CATEGORIES_DATA_SUCCESS,
  payload: data,
});

export const fetchSelectedCategoryProductsFailure = (error) => ({
  type: FETCH_SELECTED_CATEGORIES_DATA_FAILURE,
  payload: error,
});

export const fetchSingleProductRequest = (productId) => ({
  type: FETCH_SINGLE_PRODUCT_REQUEST,
  payload: productId,
});

export const fetchSingleProductSuccess = (data) => ({
  type: FETCH_SINGLE_PRODUCT_SUCCESS,
  payload: data,
});

export const fetchSingleProductFailure = (error) => ({
  type: FETCH_SINGLE_PRODUCT_FAILURE,
  payload: error,
});
