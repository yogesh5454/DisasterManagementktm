import React from "react";

const Eventsfun = ({ imageurl, date, title, details }) => {
  return (
    <div className="w-80 border-b-pink-500 border-5 bg-white border-white p-4 shadow-2xl mb-9">
      <img src={imageurl} alt={title} />
      <h2 className="pt-4 pb-3 text-lg font-medium">{date}</h2>
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="py-3 text-md">{details}</p>
      <button className="bg-pink-500 py-2 px-3 text-white cursor-pointer hover:bg-pink-600">Read more</button>
    </div>
  );
};

export default Eventsfun;
