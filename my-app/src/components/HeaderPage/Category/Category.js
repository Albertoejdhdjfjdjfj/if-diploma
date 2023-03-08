import React from 'react';
import { useSelector } from 'react-redux';
import { useState, useEffect, useCallback } from 'react';
import './Category.css';
import heart from '../../../assets/images/heart.svg';

const Category = () => {
  const after_breakpoint = 850;
  const before_breakpoint = 2880;
  const height_cell_before_breakpoint = (888 * 100) / before_breakpoint;
  const height_cell_after_breakpoint = (528 * 100) / after_breakpoint;
  const step_cell_before_breakpoint = (89 * 100) / before_breakpoint;
  const step_cell_after_breakpoint = (50 * 100) / after_breakpoint;

  const [heightSlider, setHeightSlider] = useState((2043 * 100) / before_breakpoint);
  const [heightSlider, setHeightSlider] = useState((2043 * 100) / before_breakpoint);
  const [topButton,setTopButton]=useState((2404 * 100) / before_breakpoint);
  const [data, setData] = useState(false);

  const category = useSelector((state) => state.category);

  const slide = () => {
    if (window.innerWidth >= after_breakpoint) {
      if (
        height <=
        Math.trunc(data.length / 8 + 3) *
          (step_cell_before_breakpoint + height_cell_before_breakpoint)
      ) {
        setHeightSlider(height + 2*(step_cell_before_breakpoint + height_cell_before_breakpoint));
        setTopButton(topButton + 2*(step_cell_before_breakpoint + height_cell_before_breakpoint));
      }
    }
   
  };

  useEffect(() => {
    fetch('https://if-modnikky-api.onrender.com/api/catalog')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    data && (
      <div className="category">
        <h3>{category}</h3>

        <div style={{ height: `${heightSlider}vw` }}>
          <div>
            {data.map((item) => (
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
        <p style={{marginTop:`${topButton}`}}onClick={slide}>Show more</p>
      </div>
    )
  );
};

export default Category;
