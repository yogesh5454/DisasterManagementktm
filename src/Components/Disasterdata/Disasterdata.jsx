import React from "react";

const Disasterdata = () => {
  const data = [
    {
      incident: "Earthquake",
      deathMale: 30,
      deathFemale: 20,
      totalDeath: 79,
      missingPeople: 10,
      affectedFamily: 30,
      injured: 0,
      displacedMale: 0,
      displacedFemale: 0,
      propertyLoss: 1,
      incidentPlace: 0,
      damagedHouses: 0,
      displacedFamily: 0,
    },
    {
      incident: "Fire",
      deathMale: 33,
      deathFemale: 24,
      totalDeath: 70,
      missingPeople: 100,
      affectedFamily: 90,
      injured: 0,
      displacedMale: 0,
      displacedFemale: 0,
      propertyLoss: 1,
      incidentPlace: 0,
      damagedHouses: 0,
      displacedFamily: 0,
    },
    {
      incident: "Landslide",
      deathMale: 60,
      deathFemale: 70,
      totalDeath: 59,
      missingPeople: 20,
      affectedFamily: 90,
      injured: 0,
      displacedMale: 0,
      displacedFemale: 0,
      propertyLoss: 1,
      incidentPlace: 0,
      damagedHouses: 0,
      displacedFamily: 0,
    },
    {
      incident: "Heavy Storm",
      deathMale: 90,
      deathFemale: 10,
      totalDeath: 49,
      missingPeople: 30,
      affectedFamily: 90,
      injured: 0,
      displacedMale: 0,
      displacedFemale: 0,
      propertyLoss: 1,
      incidentPlace: 0,
      damagedHouses: 0,
      displacedFamily: 0,
    },
  ];

  return (
    <div className="overflow-x-auto px-45 pb-5 bg-gray-50">
      <table className="min-w-full border-collapse border border-gray-300 text-center text-sm">
        <thead>
          <tr className="bg-pink-600 text-white">
            <th rowSpan="2" className="border border-gray-300 p-2">Incident</th>
            <th colSpan="2" className="border border-gray-300 p-2">Death</th>
            <th rowSpan="2" className="border border-gray-300 p-2">Total Death</th>
            <th rowSpan="2" className="border border-gray-300 p-2">Missing People</th>
            <th rowSpan="2" className="border border-gray-300 p-2">Affected Family</th>
            <th rowSpan="2" className="border border-gray-300 p-2">Injured</th>
            <th colSpan="2" className="border border-gray-300 p-2">Displaced (N/A)</th>
            <th rowSpan="2" className="border border-gray-300 p-2">Property Loss</th>
            <th rowSpan="2" className="border border-gray-300 p-2">Incident Place</th>
            <th rowSpan="2" className="border border-gray-300 p-2">Damaged Houses(%)</th>
            <th rowSpan="2" className="border border-gray-300 p-2">No. of Displaced Family</th>
          </tr>
          <tr className="bg-pink-600 text-white">
            <th className="border border-gray-300 p-2">Male</th>
            <th className="border border-gray-300 p-2">Female</th>
            <th className="border border-gray-300 p-2">Male</th>
            <th className="border border-gray-300 p-2">Female</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="odd:bg-white even:bg-gray-100">
              <td className="border border-gray-300 p-2">{row.incident}</td>
              <td className="border border-gray-300 p-2">{row.deathMale}</td>
              <td className="border border-gray-300 p-2">{row.deathFemale}</td>
              <td className="border border-gray-300 p-2">{row.totalDeath}</td>
              <td className="border border-gray-300 p-2">{row.missingPeople}</td>
              <td className="border border-gray-300 p-2">{row.affectedFamily}</td>
              <td className="border border-gray-300 p-2">{row.injured}</td>
              <td className="border border-gray-300 p-2">{row.displacedMale}</td>
              <td className="border border-gray-300 p-2">{row.displacedFemale}</td>
              <td className="border border-gray-300 p-2">{row.propertyLoss}</td>
              <td className="border border-gray-300 p-2">{row.incidentPlace}</td>
              <td className="border border-gray-300 p-2">{row.damagedHouses}</td>
              <td className="border border-gray-300 p-2">{row.displacedFamily}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Disasterdata;
