import React from 'react';
import { useSelector } from 'react-redux';
import { useState, useEffect, useMemo } from 'react';
import './Category.css';
import heart from '../../../assets/images/heart.svg';
import {
  step_after_breakpoint,
  step_before_breakpoint,
  window_before_breakpoint,
  window_after_breakpoint,
  start_hight_of_page_after,
  start_hight_of_page_before,
  margin_top_button_after,
  margin_top_button_before,
  margin_cell_before_breakpoint,
  margin_cell_after_breakpoint
} from './variables';

const Category = () => {
  const [numSlider, setNumSlider] = useState(0);
  const [filterData, setFilterData] = useState(false);

  const category = useSelector((state) => state.category);
  const data = useSelector((state) => state.products);

  // const handleFilterData = useMemo(() => {
  //   if (!Array.isArray(data)) {
  //     setFilterData(false);
  //   } else {
  //     let result = data.filter((item) => item.type === category);
  //     if (result.length !== 0) {
  //       setFilterData(result);
  //     } else {
  //       setFilterData(['No beauty products found']);
  //     }
  //   }
  // }, [category]);

  // const handleHeight = (height_before, height_after) => {
  //   if (window.innerWidth >= window_after_breakpoint) {
  //     return height_before + step_before_breakpoint * numOfClick;
  //   }

  //   return height_after + step_after_breakpoint * numOfClick;
  // };

  // const handleNumOfClickChange = () => {
  //   if (data.length / 8 > 1) {
  //     if (Math.trunc(data.length / 8 - 1) > numOfClick) {
  //       setNumOfClick(numOfClick + 1);
  //     }
  //   }
  // };

  return (
    filterData && (
      <div
        style={{
          height: `${handleHeight(start_hight_of_page_before, start_hight_of_page_after)}vw`
        }}
        className="category"
      >
        <h3>{category}</h3>

        <div style={{ height: `${handleHeight(0, 0)}vw` }}>
          <div>
            { filterData.map((item) => (
              <div key={item.id}>
                <span>
                  <img src={heart} />
                </span>
                <img src={item.images[0]} />
                <p>${item.price.value}</p>
              </div>
            ))}
          </div>
        </div>

        <p
          onClick={handleNumOfClickChange}
          style={{
            marginTop: `${handleHeight(margin_top_button_before, margin_top_button_after)}vw`
          }}
        >
          Show more
        </p>
      </div>
    )
  );
};

export default Category;
