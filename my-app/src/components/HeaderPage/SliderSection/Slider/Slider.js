import React, { useState, useEffect } from 'react';
import './Slider.css';
import arrowRight from '../../../../assets/images/arrowRight.svg';
import heart from '../../../../assets/images/heart.svg';

function Slider() {
  const [data, setData] = useState(null);
  const [left, setLeft] = useState(0);
  const after_breakpoint = 850;
  const before_breakpoint = 2880;
  const width_cell_before_breakpoint = (599 * 100) / before_breakpoint;
  const width_cell_after_breakpoint = (359 * 100) / after_breakpoint;
  const left_cell_before_breakpoint = (24 * 100) / before_breakpoint;
  const left_cell_after_breakpoint = (27 * 100) / after_breakpoint;

  useEffect(() => {
    fetch('https://if-modnikky-api.onrender.com/api/catalog')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  const slide = () => {
    if (window.innerWidth >= after_breakpoint) {
      if (
        left <=
        -1 * (data.length - 4) * (left_cell_before_breakpoint + width_cell_before_breakpoint)
      ) {
        setLeft(0);
      } else {
        setLeft(left - (left_cell_before_breakpoint + width_cell_before_breakpoint));
      }
    } else {
      if (left <= -(data.length - 3) * (left_cell_after_breakpoint + width_cell_after_breakpoint)) {
        setLeft(0);
      } else {
        setLeft(left - (left_cell_after_breakpoint + width_cell_after_breakpoint));
      }
    }
  };

  if (data) {
    return (
      <div className="slider">
        <div>
          <div style={{ marginLeft: `${left}vw` }}>
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
        <img src={arrowRight} onClick={slide} />
      </div>
    );
  }
}

export default Slider;
