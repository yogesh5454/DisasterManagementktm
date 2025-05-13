import React from "react";

const Action = () => {
  return (
    <div className="relative px-45 py-5 bg-gray-50">
      <img
        src="https://disaster-home-page-fyak.vercel.app/assets/nepal-army-ZQSRhgub.jpg"
        alt="Nepal Army"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0  flex items-center">
        <div className="ml-70 p-5 text-white bg-[#26324bb3]">
          <h1 className="text-5xl font-bold mb-2">
            At Gorkha Nepal Army In Action 2015
          </h1>
          <h3 className="text-2xl font-semibold mb-6">
            Gorkha Lamidada, Nepal
          </h3>
          <button className="bg-pink-500 py-3 px-6 text-lg font-semibold rounded hover:bg-pink-600 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Action;
