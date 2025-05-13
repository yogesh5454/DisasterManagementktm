import React from "react";

const Newsfun = ({ imageurl, date, title, details }) => {
  return (
    <div className="w-107 border-b-pink-500 border-5 bg-white border-white p-4 shadow-2xl mb-9">
      <img src={imageurl} alt={title} />
      <h2>{date}</h2>
      <h1>{title}</h1>
      <p>{details}</p>
      <button>Read more</button>
    </div>
  );
};

export default Newsfun;
