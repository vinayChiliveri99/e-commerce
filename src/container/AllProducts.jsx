import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllProductsRequest } from '../actions/productActions';
import ItemCard from '../components/ItemCard';
import './allProducts.css';
import { Skeleton } from '@mui/material';

function AllProducts() {
  const dispatch = useDispatch();
  const products = useSelector(
    (state) => state.productsReducer.products
  );

  const loading = useSelector(
    (state) => state.productsReducer.loading
  );

  useEffect(() => {
    dispatch(fetchAllProductsRequest());
  }, [dispatch]);

  const skeletons = [];

  for (let i = 0; i < 10; i++) {
    skeletons.push(
      <Skeleton
        key={i}
        variant="rectangular"
        width={250}
        height={370}
        animation="wave"
        style={{ borderRadius: '10px' }}
      />
    );
  }

  return (
    <div className="all-products-container">
      {loading ? (
        <div className="skeletons-container">{skeletons} </div>
      ) : (
        products?.map((ele) => (
          <div key={ele.id} className="item-card-container">
            <ItemCard ele={ele} />
          </div>
        ))
      )}
    </div>
  );
}

export default AllProducts;
