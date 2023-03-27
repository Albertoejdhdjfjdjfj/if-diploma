import React, { useEffect } from 'react';
import { fetchProducts } from './redux/actions/actions';
import { Route, Routes } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import HeaderPage from './components/HeaderPage/HeaderPage';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Product from './components/ProductDesktop/Product';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<HeaderPage />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
    </div>
  );
}

export default App;
