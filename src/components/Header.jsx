import {
  AppBar,
  InputBase,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import './header.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCategoriesRequest } from '../actions/categoriesActions';
import { Search } from '@mui/icons-material';

function Header() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const categories = useSelector(
    (state) => state.categoriesReducer.categories
  );

  console.log('categories', categories);

  useEffect(() => {
    dispatch(fetchAllCategoriesRequest());
  }, [dispatch]);

  console;

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
          <p>
            <ShoppingBagIcon />
          </p>
        </div>
      </AppBar>
    </div>
  );
}

export default Header;
