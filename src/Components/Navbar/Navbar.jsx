import React from "react";
import Pmrelief from "./Pmrelief";
import Earthquake from "./Earthquake";
import Agalagi from "./Agalagi";
import Landslide from "./Landslide";

const Navbar = () => {
  return (
    <div className="px-45 bg-[#0a2240]">
      <div className="flex border-[#c40079]">
        <a
          href="/"
          className="flex items-center justify-center px-6 py-4 text-white border-l border-r border-[#c40079] bg-[#c40079]"
        >
          Home
        </a>
        <a
          href="/relief-distributed"
          className="flex items-center justify-center px-6 py-4 text-white border-l border-r border-[#c40079] bg-[#0a2240]"
        >
          Relief Distributed
        </a>
        <a
          href="/press-release"
          className="flex items-center justify-center px-6 py-4 text-white border-l border-r border-[#c40079] bg-[#0a2240]"
        >
          Press Release
        </a>

        <Pmrelief />
        <Earthquake />
        <Agalagi />
        <Landslide />
      </div>
    </div>
  );
};

export default Navbar;
