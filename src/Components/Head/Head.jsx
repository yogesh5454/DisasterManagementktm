import React from "react";
const Head = () => {
  return (
    <div className="flex justify-between px-45 items-center py-4">
      <div className="flex items-center gap-2">
      
        <img
          src="https://kathmandu.gov.np/wp-content/uploads/2021/02/cropped-logo.png"
          alt="logo"
        />
        <div>
          <h1 className="text-3xl font-semibold text-gray-700">
            Disaster Management System
          </h1>
          <h3 className="font-semibold text-md">
            Kathmandu Metropolitan City , Bagmati Province
          </h3>
        </div>
        
      </div>
      <div>
        <img className="w-16" src="https://kathmandu.gov.np/wp-content/themes/kmc-theme/images/flag-nepal.gif" alt="Nepali flag" />
      </div>
    </div>
  );
};

export default Head;
