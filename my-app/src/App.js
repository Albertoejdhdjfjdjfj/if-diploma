import React, { useEffect } from 'react';
import { fetchProducts } from './redux/actions/actions';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import HeaderPage from './components/HeaderPage/HeaderPage';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Product from './components/ProductDesktop/Product';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import Favorites from './components/Favorites/Favorites';

function App() {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.user.id);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [id]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<HeaderPage />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
