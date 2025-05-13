import React from "react";

const Details = () => {
  return (
    <div className="relative bg-cover bg-center w-full h-[500px] text-white bg-[url(https://disaster-home-page-fyak.vercel.app/assets/people-VJ0RRwDq.jpg)]">
      <div className="absolute  bottom-10  px-45 ">
        <div className="bg-[#26324bb3] p-4">
          <h1 className="text-3xl font-bold mb-2">
            Earthquake 18th Baishakh 2072
          </h1>
          <h3 className="text-xl font-semibold mb-4">Government of Nepal</h3>
        </div>

        <button className="bg-[#ec068e] px-6 py-2 text-white font-semibold hover:bg-pink-600 transition mt-4">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Details;
