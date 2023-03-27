import React,{useEffect} from 'react';
import { useSelector } from 'react-redux';
import Header from './Header/Header';
import Footer from '../HeaderPage/Footer/Footer';
import './ShoppingCart.css';
import remove_icon from '../../assets/images/remove-icon.svg';
import maestro_logo from '../../assets/images/maestro-logo.svg';
import visa_logo from '../../assets/images/visa-logo.svg';

const ShoppingCart = () => {
  const data = useSelector((state) => state.headerPage.products);
  return (
    data !== 'loading' &&
    data && (
      <div className="shoppingCard">
        <Header />
        <p>BAG {data.length}</p>
        <div>
          {data.map((item) => (
            <div key={item.id}>
              <div>
                <img src={item.images[0]} />
                <div>
                  <p>{item.name}</p>
                  <span>
                    {item.price.currency} {item.price.value}
                  </span>
                  <div>
                    <p>COLOR: WHITE</p>
                    <p>SIZE: {1}</p>
                    <p>QUANTITY: {2}</p>
                  </div>
                </div>
              </div>
              <span>
                <img src={remove_icon} /> <p>REMOVE</p>
              </span>
              <hr />
            </div>
          ))}
        </div>
        <span>
          <p>{data[0].price.currency}</p>
          <button>PROCED TO CHECKOUT</button>
          <div>
            <img src={maestro_logo} />
            <img src={visa_logo} />
          </div>
        </span>
        <Footer />
      </div>
    )
  );
};

export default ShoppingCart;
