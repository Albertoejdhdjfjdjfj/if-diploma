import React, { useState,useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import fetchBag from '../../redux/actions/actions';
import Header from './Header/Header';
import Footer from '../HeaderPage/Footer/Footer';
import './ShoppingCart.css';
import remove_icon from '../../assets/images/remove-icon.svg';
import maestro_logo from '../../assets/images/maestro-logo.svg';
import visa_logo from '../../assets/images/visa-logo.svg';

const ShoppingCart = () => {
const[data,setData]=useState(false);
const userId = useSelector((state) => state.user.id);

const fetchProduct=()=>{
  fetch(`http://localhost:3001/bag?userId=${userId}`)
  .then(res=>res.json())
  .then(json=>setData(json))
}

const deleteProduct=async(id)=>{
  await fetch(`http://localhost:3001/bag/${id}`, { 
    method: 'DELETE',
    headers: {
      'Content-Type':'application/json'
    }
  })

  fetchProduct();
}

useEffect(()=>{
  fetch(`http://localhost:3001/bag?userId=${userId}`)
  .then(res=>res.json())
  .then(json=>setData(json))
},[])

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
                  <span>
                    USD {item.product.price.value}
                  </span>
                  <div>
                    <p>COLOR: WHITE</p>
                    <p>SIZE: {1}</p>
                    <p>QUANTITY: {2}</p>
                  </div>
                </div>
              </div>
              <span onClick={()=>deleteProduct(item.id)}>
                <img src={remove_icon} /> <p>REMOVE</p>
              </span>
              <hr />
            </div>
          ))}
        </div>
        <span>
          <p>USD</p>
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
