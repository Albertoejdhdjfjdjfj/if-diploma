import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../../redux/actions/actions';
import TopSection from './TopSection/TopSection';
import Categories from './CategoriesSection/Categories';
import Category from './Category/Category';
import SliderSection from './SliderSection/SliderSection';
import InstagramShop from './InstagramShop/InstagramShop';
import Footer from './Footer/Footer';
import Product from '../ProductDesktop/Product';
import Search from './Search/Search';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import SignUp from '../SignUp/SignUp';

const HeaderPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
      <SignUp/>
  );
};

export default HeaderPage;
