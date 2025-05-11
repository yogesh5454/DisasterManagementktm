import React from 'react';
import './Marquee.css';

const Marquee = () => {
  return (
    <div className="bg-[#ec068e] py-3 text-white">
      <div className="marquee-container">
        <div className="marquee">
          <span className="text-lg inline-block pr-10">
            European Civil Protection and Humanitarian Aid Operations
          </span>
          <span className="text-lg inline-block pr-10">
            European Civil Protection and Humanitarian Aid Operations
          </span>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
