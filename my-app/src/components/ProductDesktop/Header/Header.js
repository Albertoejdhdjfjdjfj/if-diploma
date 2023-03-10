import React from 'react';
import './Header.css';
import glass_black from '../../../assets/images/glass-black.svg';
import heart_black from '../../../assets/images/heart-black.svg';
import burger_black from '../../../assets/images/hamburger-menu-black.svg';
import pack_black from '../../../assets/images/shopping-cart-black.svg';

const Header = () => {
  return (
    <header>
      <div>
        <img src={burger_black} className="menu_burger" />
        <p>NEW ARRIVALS</p>
        <p>SHOP</p>
        <p>COLLECTIONS</p>
      </div>

      <h1>MODNIKKY</h1>

      <div>
        <p>
          <img src={glass_black} /> SEARCH
        </p>
        <p>SIGN IN</p>
        <p>BAG (2)</p>
        <img src={glass_black} className="glass" />
        <img src={pack_black} className="package" />
        <img src={heart_black} />
      </div>
    </header>
  );
};

export default Header;
