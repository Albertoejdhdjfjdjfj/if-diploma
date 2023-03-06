import React from 'react';
import './Header.css';
import glass from '../../../assets/images/glass.svg';
import heart from '../../../assets/images/heart.svg';
import burger from '../../../assets/images/hamburger-menu-icon.svg';
import pack from '../../../assets/images/shopping-cart-icon.svg';

const Header = () => {
  return (
    <header>
      <div>
        <img src={burger} className="menu_burger" />
        <p>NEW ARRIVALS</p>
        <p>SHOP</p>
        <p>COLLECTIONS</p>
      </div>

      <h1>MODNIKKY</h1>

      <div>
        <p>
          <img src={glass} /> SEARCH
        </p>
        <p>SIGN IN</p>
        <p>BAG (2)</p>
        <img src={glass} className="glass" />
        <img src={pack} className="package" />
        <img src={heart} />
      </div>
    </header>
  );
};

export default Header;
