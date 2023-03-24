import React from 'react';
import { useSelector } from 'react-redux';
import { useState, useEffect, useMemo } from 'react';
import './Category.css';
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
} from './helpers/variables';

import Products from './helpers/Products';

const Category = () => {
  const [numSlides, setNumSlides] = useState(0);
  const [filterData, setFilterData] = useState(false);
  const [buttonDisplay, setButtonDisplay] = useState(true);

  const category = useSelector((state) => state.category);
  const data = useSelector((state) => state.products);

  const handleNumOfSlidesChange = () => {
    if (numSlides < filterData.length) {
      if (filterData.length - numSlides <= 4) {
        setNumSlides(numSlides + 4);
      } else {
        setNumSlides(numSlides + 8);
      }
    }
  };

  const handleHeightPage = (start_hight_of_page_before = 0, start_hight_of_page_after = 0) => {
    if (window.innerWidth >= window_after_breakpoint) {
      if (filterData.length - numSlides <= 4) {
        setButtonDisplay(false);
        return (
          start_hight_of_page_before +
          Math.trunc(numSlides / 8) * 2 * step_before_breakpoint +
          step_before_breakpoint
        );
      } else {
        return start_hight_of_page_before + 2 * step_before_breakpoint;
      }
    } else {
      if (filterData.length - numSlides <= 4) {
        return start_hight_of_page_after + step_after_breakpoint;
      } else {
        return start_hight_of_page_after + 2 * step_after_breakpoint;
      }
    }
  };

  const handleHeightSlider = (start_hight_of_page_before = 0, start_hight_of_page_after = 0) => {
    if (window.innerWidth >= window_after_breakpoint) {
      if (filterData.length - numSlides <= 4) {
        setButtonDisplay(false);
        return (
          start_hight_of_page_before +
          Math.trunc(numSlides / 8) * 2 * step_before_breakpoint +
          step_before_breakpoint
        );
      } else {
        return start_hight_of_page_before + 2 * step_before_breakpoint;
      }
    } else {
      if (filterData.length - numSlides <= 4) {
        return start_hight_of_page_after + step_after_breakpoint;
      } else {
        return start_hight_of_page_after + 2 * step_after_breakpoint;
      }
    }
  };

  useEffect(() => {
    setNumSlides(0);
    handleNumOfSlidesChange();
  }, [category]);

  useEffect(() => {
    if (!Array.isArray(data)) {
      setFilterData(false);
    } else {
      let result = data.filter((item) => item.type === category);
      if (result.length !== 0) {
        setFilterData(data.filter((item) => item.type === category));
      } else {
        setFilterData('No beauty products found');
        setNumSlides(0);
      }
    }
  }, [category]);

  return (
    filterData && (
      <div
        style={{
          height: `${handleHeight(start_hight_of_page_before, start_hight_of_page_after)}vw`
        }}
        className="category"
      >
        <h3>{category}</h3>

        <div
          style={{
            height: `${handleHeight(0, 0)}vw`
          }}
        >
          {filterData !== 'No beauty products found' ? (
            <Products products={filterData} />
          ) : (
            <p>No beauty products found</p>
          )}
        </div>

        {buttonDisplay && (
          <p
            onClick={handleNumOfSlidesChange}
            style={{
              marginTop: `${handleHeight(margin_top_button_before, margin_top_button_after)}vw`
            }}
          >
            Show more
          </p>
        )}
      </div>
    )
  );
};

export default Category;
