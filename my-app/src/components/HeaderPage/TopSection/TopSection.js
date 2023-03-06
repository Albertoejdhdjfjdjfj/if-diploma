import React from 'react';
import './TopSection.css';
import Header from '../Header/Header';

const TopSection = () => {
  return (
    <div className="topSection">
      <Header />
      <div>
        <h2>NEW COLLECTION</h2>
        <p>
          Our easiest chuck-on-and-go staples come with a serious style heritage <br />
          that’s liberating,sexy, comfy and supremely cool.{' '}
        </p>
        <div>SHOP NEW ARRIVALS</div>
      </div>
    </div>
  );
};

export default TopSection;
