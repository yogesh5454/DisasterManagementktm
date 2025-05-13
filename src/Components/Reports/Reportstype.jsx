import React from "react";

const Reportstype = ({ disasters, activeReport, setActiveReport }) => {
  return (
     <div className="w-full md:w-1/6 border-r border-gray-200">
      <div className="flex flex-col">
        {disasters.map((disaster) => (
          <button
            key={disaster.id}
            onClick={() => setActiveReport(disaster.id)}
            className={`flex flex-col py-4 px-2 border-l-4 cursor-pointer transition-all hover:bg-gray-100 ${
              activeReport === disaster.id
                ? "border-l-pink-500 bg-gray-100"
                : "border-l-transparent"
            }`}
          >
            <span className={`font-medium text-lg ${activeReport === disaster.id ? "text-pink-500" : ""}`}>
              {disaster.title}
            </span>
            <span className={`font-medium text-lg ${activeReport === disaster.id ? "text-pink-500" : ""}`}>{disaster.type}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Reportstype;
