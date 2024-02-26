import Header from './components/Header';
import AllProducts from './container/AllProducts';
import { Route, Routes } from 'react-router-dom';
import ProductDetail from './container/ProductDetail';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<AllProducts />}></Route>
        <Route
          path="/product/:id"
          element={<ProductDetail />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
