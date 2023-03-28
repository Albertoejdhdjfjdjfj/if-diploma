import React from 'react';
import { useNavigate } from 'react-router-dom';
import heart from '../../../../assets/images/heart.svg';

const Products = ({ products }) => {
  const navigate = useNavigate();

  const addToFavorites = async (id) => {
    await fetch('http://localhost:3001/favorites', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        userId: localStorage.getItem('id'),
        id: id
      })
    });
  };

  return (
    <div>
      {products.map((item) => (
        <div key={item.id}>
          <span onClick={() => addToFavorites(item.id)}>
            <img src={heart} />
          </span>
          <img src={item.images[0]} onClick={() => navigate(`/product/${item.id}`)} />
          <p>${item.price.value}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
