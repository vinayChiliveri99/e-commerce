import { AppBar, InputBase, MenuItem, Select } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import './header.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCategoriesRequest } from '../actions/categoriesActions';
import {
  fetchSelectedCategoryProductsRequest,
  fetchAllProductsRequest,
} from '../actions/productActions';
import { searchByQuery } from '../actions/searchActions';

function Header() {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = useSelector(
    (state) => state.categoriesReducer.categories
  );

  const searchValue = useSelector(
    (state) => state.searchReducer.searchValue
  );

  const handleSearchChange = (e) => {
    dispatch(searchByQuery(e.target.value));
  };

  useEffect(() => {
    dispatch(fetchAllCategoriesRequest());
    dispatch(fetchAllProductsRequest());
  }, [dispatch]);

  const handleCategoryChange = (event) => {
    const categoryId = event.target.value;
    setSelectedCategory(categoryId);
    if (categoryId !== '') {
      dispatch(fetchSelectedCategoryProductsRequest(categoryId));
    } else {
      dispatch(fetchAllProductsRequest());
    }
  };

  return (
    <div>
      <AppBar
        position="fixed"
        style={{
          backgroundColor: 'white',
          height: '60px',
          padding: '0 80px',
        }}
      >
        <div className="header">
          <h3>store</h3>
          <div className="search-filter">
            <div>
              <SearchIcon />
              <InputBase
                placeholder="Search for some products"
                className="search-input"
                onChange={(e) => handleSearchChange(e)}
                value={searchValue}
              />
            </div>
            <Select
              value={selectedCategory}
              onChange={handleCategoryChange}
              displayEmpty
              inputProps={{ 'aria-label': 'category' }}
              style={{ border: 'none' }}
            >
              <MenuItem value="">Categories</MenuItem>
              {categories &&
                categories.map((ele) => (
                  <MenuItem key={ele.id} value={ele.id}>
                    {ele.name}
                  </MenuItem>
                ))}
            </Select>
          </div>
          <p>
            <ShoppingBagIcon />
          </p>
        </div>
      </AppBar>
    </div>
  );
}

export default Header;
