import React from 'react';
import heart from '../../../../assets/images/heart.svg';
const Products = ({ products }) => {
  return (
    <div>
      {products.map((item) => (
        <div key={item.id}>
          <span>
            <img src={heart} />
          </span>
          <img src={item.images[0]} />
          <p>${item.price.value}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
