import { AppBar, InputBase, MenuItem, Select } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import './header.css';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function Header() {
  const [category, setCategory] = useState('');
  const [allCategories, setAllCategories] = useState([]);

  const products = useSelector(
    (state) => state.productsReducer.products
  );

  useEffect(() => {
    if (products) {
      const categories = products.map((ele) => ele.category.name);
      setAllCategories([...new Set(categories)]);
    }
  }, [products]);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
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
          <div>
            <SearchOutlinedIcon color="primary" />
            <InputBase
              placeholder="Search..."
              inputProps={{ 'aria-label': 'search' }}
            />
            <Select
              value={category}
              onChange={handleCategoryChange}
              displayEmpty
              inputProps={{ 'aria-label': 'category' }}
            >
              <MenuItem value="">Category</MenuItem>
              {allCategories.map((ele) => (
                <MenuItem key={ele} value={ele}>
                  {ele}
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
