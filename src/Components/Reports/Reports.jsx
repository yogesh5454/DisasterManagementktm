import React, { useState } from 'react'
import Reportstype from './Reportstype'
import Reportsdetails from './Reportsdetails';
import { disastersData } from './Disasterdata';
const Reports = () => {
     const [activeReport, setActiveReport] = useState(1);

  const activeDisaster = disastersData.find(
    (disaster) => disaster.id === activeReport
  );

   
  return (
    <div className="px-45 mx-auto py-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Disaster Report</h1>

      <div className="flex flex-col md:flex-row shadow-2xl bg-white">
        <Reportstype
          disasters={disastersData}
          activeReport={activeReport}
          setActiveReport={setActiveReport}
        />

        <div className="w-full md:w-3/4 p-6">
          {activeDisaster && <Reportsdetails disaster={activeDisaster} />}
        </div>
      </div>
    </div>
  );
};
  


export default Reports
