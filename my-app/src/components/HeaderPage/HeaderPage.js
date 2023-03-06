import React from 'react';
import TopSection from './TopSection/TopSection';
import Categories from './CategoriesSection/Categories';
import SliderSection from './SliderSection/SliderSection';
import InstagramShop from './InstagramShop/InstagramShop';
import Footer from './Footer/Footer';

const HeaderPage = () => {
  return (
    <div>
      <TopSection />
      <Categories />
      <SliderSection />
      <InstagramShop />
      <Footer />
    </div>
  );
};

export default HeaderPage;
