import React, { useState } from 'react';
import Header from './Header/Header';
import Footer from '../HeaderPage/Footer/Footer';
import './Product.css';
import heart from '../../assets/images/heart.svg';
import plus from '../../assets/images/plus.svg';
import minus from '../../assets/images/minus.svg';

const Product = ({ product }) => {
  const [descActive, setDescActive] = useState(false);
  const [shippAndReturnActive, setShippAndReturnActive] = useState(false);
  const [fabricComposActive, setFabricComposActive] = useState(false);

  return (
    <div className="product">
      <Header />
      <div className="about_product">
        <span>
          <img src={product.images[0]} />
          <img src={product.images[1]} />
        </span>
        <div>
          <h3>{product.name}</h3>
          <span>
            {product.price.currency + ' '}${product.price.value}
          </span>
          <p>PRE-ORDER</p>

          <div>
            <div className="color">
              <p>COLOR</p>
              <div style={{ backgroundColor: product.color.hex }}></div>
            </div>

            <div className="size">
              <p>SIZE</p>
              <div>
                {product.availableSizes.map((element) => (
                  <p>{element}</p>
                ))}
              </div>
            </div>

            <button>
              <p>ADD TO BAG</p>
              <div>
                <img src={heart} />
              </div>
            </button>
          </div>

          <div className="descrition">
            <div>
              <div onClick={() => setDescActive(!descActive)}>
                <img src={descActive ? minus : plus} /> <p>PRODUCT DESCRIPTION</p>
              </div>
              {descActive && <p>{product.description}</p>}
            </div>

            <div>
              <div onClick={() => setShippAndReturnActive(!shippAndReturnActive)}>
                <img src={shippAndReturnActive ? minus : plus} /> <p>SHIPPING & RETURNS</p>
              </div>
              <p></p>
            </div>

            <div>
              <div onClick={() => setFabricComposActive(!fabricComposActive)}>
                <img src={fabricComposActive ? minus : plus} /> <p>FABRIC COMPOSITION</p>
              </div>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
