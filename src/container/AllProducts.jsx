import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchAllProductsRequest,
  fetchSelectedCategoryProductsRequest,
} from '../actions/productActions';
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
  const selectedCategory = useSelector(
    (state) => state.categoriesReducer.selectedCategory
  );

  const searchValue = useSelector(
    (state) => state.searchReducer.searchValue
  );

  console.log(searchValue);

  const filteredProducts = products?.filter((product) => {
    if (!searchValue) return true;
    return product.title
      .toLowerCase()
      .includes(searchValue.toLowerCase());
  });

  useEffect(() => {
    dispatch(fetchAllProductsRequest());
  }, [dispatch]);

  useEffect(() => {
    if (selectedCategory) {
      dispatch(
        fetchSelectedCategoryProductsRequest(selectedCategory)
      );
    }
  }, [selectedCategory, dispatch]);

  const skeletons = Array.from({ length: 10 }, (_, i) => (
    <Skeleton
      key={i}
      variant="rectangular"
      width={250}
      height={370}
      animation="wave"
      style={{ borderRadius: '10px' }}
    />
  ));

  return (
    <div className="all-products-container">
      {loading ? (
        <div className="skeletons-container">{skeletons}</div>
      ) : (
        filteredProducts?.map((ele) => (
          <div key={ele.id} className="item-card-container">
            <ItemCard ele={ele} />
          </div>
        ))
      )}
    </div>
  );
}

export default AllProducts;
