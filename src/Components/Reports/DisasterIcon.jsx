// src/components/DisasterIcon.jsx
import React from 'react'

const DisasterIcon = ({type}) => {
  const icons = {
    Earthquake: "https://disaster-home-page-fyak.vercel.app/assets/earthquake-B0dj81De.png",
    Fire: "https://disaster-home-page-fyak.vercel.app/assets/danger-Dremv7jU.png",
    Landslide: "https://disaster-home-page-fyak.vercel.app/assets/landslide-DGYnR2b5.png",
    "Heavy Storm": "https://disaster-home-page-fyak.vercel.app/assets/storm-KspPW0fV.png"
  }
  
  const iconUrl = icons[type];
  
  if (iconUrl) {
    return <img src={iconUrl} alt={`${type} icon`} className="w-16 h-16 "   style={{
    filter:
      "brightness(0) saturate(100%) invert(21%) sepia(89%) saturate(6841%) hue-rotate(308deg) brightness(97%) contrast(101%)",
  }}/>;
  }
  
  return <div className="w-16 h-16 bg-pink-500 rounded-full"></div>;
}

export default DisasterIcon