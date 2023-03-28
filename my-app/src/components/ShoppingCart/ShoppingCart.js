import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import remove_icon from '../../assets/images/remove-icon.svg';
import maestro_logo from '../../assets/images/maestro-logo.svg';
import visa_logo from '../../assets/images/visa-logo.svg';
import './ShoppingCart.css';

const ShoppingCart = () => {
  const [data, setData] = useState(false);
  const userId = useSelector((state) => state.user.id);

  const sendProducts = async () => {
    await fetch('https://if-modnikky-api.onrender.com/api/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        products: data.map((item) => item.product.id)
      })
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  };

  const fetchProduct = () => {
    fetch(`http://localhost:3001/bag?userId=${userId}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  };

  const deleteProduct = async (id) => {
    await fetch(`http://localhost:3001/bag/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    fetchProduct();
  };

  useEffect(() => {
    fetch(`http://localhost:3001/bag?userId=${userId}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

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
                <img src={item.product.images[0]} />
                <div>
                  <p>{item.product.name}</p>
                  <span>USD {item.product.price.value}</span>
                  <div>
                    <p>COLOR: {item.product.color.name}</p>
                    <p>SIZE: {item.product.availableSizes[0]}</p>
                    <p>QUANTITY: {1}</p>
                  </div>
                </div>
              </div>
              <span onClick={() => deleteProduct(item.id)}>
                <img src={remove_icon} /> <p>REMOVE</p>
              </span>
              <hr />
            </div>
          ))}
        </div>
        <span>
          <p>
            USD{' '}
            {data.reduce(function (sum, elem) {
              return sum + Number(elem.product.price.value);
            }, 0)}
          </p>
          <button onClick={sendProducts}>PROCED TO CHECKOUT</button>
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
