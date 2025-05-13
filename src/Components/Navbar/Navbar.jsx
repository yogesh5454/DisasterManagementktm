import React from "react";
import { MdArrowDropDown } from "react-icons/md";

const navItems = [
  { label: "Home", isActive: true },
  { label: "Relief Distributed" },
  { label: "Press Release" },
  { label: "PM Relief", hasDropdown: true },
  { label: "Earthquake", hasDropdown: true },
  { label: "Agalagi", hasDropdown: true },
  { label: "Landslide", hasDropdown: true },
];

const Navbar = () => {
  return (
    <div className="px-45 bg-[#0a2240]">
      <div className="flex border-[#c40079]">
        {navItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className={`flex items-center justify-center px-6 py-4 text-white border-l border-r border-[#c40079] 
            ${item.isActive ? "bg-[#c40079]" : "bg-[#0a2240]"} 
            `}
           
          >
            {item.label}
            {item.hasDropdown && <MdArrowDropDown className="ml-1 text-xl" />}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
