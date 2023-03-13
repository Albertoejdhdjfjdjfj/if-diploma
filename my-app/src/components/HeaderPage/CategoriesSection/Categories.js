import React from 'react';
import './Categories.css';
import { setShopCategory } from '../../../redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import dress from '../../../assets/images/dress.svg';
import tees from '../../../assets/images/tees.svg';
import swimwear from '../../../assets/images/swimwear.svg';
import denim from '../../../assets/images/denim.svg';
import tops from '../../../assets/images/tops.svg';
import beauty from '../../../assets/images/beauty.svg';

const Categories = () => {
  const defaultStateBtns = {
    Dresses: 'inactive',
    Tees: 'inactive',
    Swimwear: 'inactive',
    Denim: 'inactive',
    Tops: 'inactive',
    Beauty: 'inactive'
  };
  const dispatch = useDispatch();
  const handleChangeStateBtns = (category) => {
    dispatch(setShopCategory(category));
  };

  const category = useSelector((state) => state.category);

  return (
    <div className="categories">
      <h2>
        Shop by the <p>Category</p>
      </h2>
      <div>
        <div onClick={() => handleChangeStateBtns('Dresses')}>
          <img src={dress} />
          <p>Dresses</p>
        </div>
        <div onClick={() => handleChangeStateBtns('Tees')}>
          <img src={tees} />
          <p>Tees</p>
        </div>
        <div onClick={() => handleChangeStateBtns('Swimwear')}>
          <img src={swimwear} />
          <p>Swimwear</p>
        </div>
        <div onClick={() => handleChangeStateBtns('Denim')}>
          <img src={denim} />
          <p>Denim</p>
        </div>
        <div onClick={() => handleChangeStateBtns('Tops')}>
          <img src={tops} />
          <p>Tops</p>
        </div>
        <div onClick={() => handleChangeStateBtns('Beauty')}>
          <img src={beauty} />
          <p>Beauty</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
