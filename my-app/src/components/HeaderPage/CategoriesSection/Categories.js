import React from 'react';
import './Categories.css';
import { useDispatch } from 'react-redux';
import dress from '../../../assets/images/dress.svg';
import tees from '../../../assets/images/tees.svg';
import swimwear from '../../../assets/images/swimwear.svg';
import denim from '../../../assets/images/denim.svg';
import tops from '../../../assets/images/tops.svg';
import beauty from '../../../assets/images/beauty.svg';

const Categories = () => {
  const dispatch = useDispatch();
  const slide = () => {};

  return (
    <div className="categories">
      <h2>
        Shop by the <p>Category</p>
      </h2>
      <div>
        <div>
          <img src={dress} />
          <p>Dresses</p>
        </div>
        <div>
          <img src={tees} />
          <p>Tees</p>
        </div>
        <div>
          <img src={swimwear} />
          <p>Swimwear</p>
        </div>
        <div>
          <img src={denim} />
          <p>Denim</p>
        </div>
        <div>
          <img src={tops} />
          <p>Tops</p>
        </div>
        <div>
          <img src={beauty} />
          <p>Beauty</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
