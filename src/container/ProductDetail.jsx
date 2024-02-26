import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleProductRequest } from '../actions/productActions';
import { useLocation } from 'react-router-dom';

function ProductDetail() {
  const dispatch = useDispatch();
  const location = useLocation();
  const id = location.pathname.split('/')[2];

  const loading = useSelector(
    (state) => state.productsReducer.loading
  );

  const singleProductData = useSelector(
    (state) => state.productsReducer.singleProduct
  );

  console.log('product data', singleProductData);

  useEffect(() => {
    dispatch(fetchSingleProductRequest(id));
  }, [dispatch, id]);

  return (
    <div style={{ marginTop: '200px' }}>
      {loading && <p>loading</p>}
    </div>
  );
}

export default ProductDetail;
