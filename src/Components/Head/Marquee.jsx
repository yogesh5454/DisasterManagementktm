import React from 'react';
import './Marquee.css';

const Marquee = () => {
  return (
    <div className="marquee-wrapper text-white text-sm">
      <div className="marquee-container">
        <div className="marquee-content text-lg px-45">
          <span className="inline-block pr-200 text-md">
            European Civil Protection and Humanitarian Aid Operations
          </span>
          <span className="inline-block  text-md">
            European Civil Protection and Humanitarian Aid Operations
          </span>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
