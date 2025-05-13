import React from "react";
import DisasterIcon from "./DisasterIcon";

const Reportsdetails = ({disaster}) => {
  return (
       <div className="space-y-4">
      <div className="flex items-center mb-4">
        <div className=" mr-4 flex flex-col space-y-3">
          <DisasterIcon type={disaster.type} />
           <h2 className="text-2xl font-semibold">{disaster.type}</h2>
        </div>
       
      </div>

      <p className="text-gray-700 mb-6">{disaster.description}</p>

      <button
        className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded transition-colors"
      >
        Learn More
      </button>
    </div>
  );

  
};

export default Reportsdetails;
