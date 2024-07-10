import React from "react";
import "./Card.css";
function CourceCard({ img, heading, type, duration, svg }) {
  return (
    <div className="bg-black text-white rounded-lg cource p-4 border cursor-pointer border-[#3C3C3C] w-[300px] sm:h-[450px] sm:w-auto">
      <div className="flex sm:mt-10 justify-center items-center p-12">
        {!svg && img}
        <img
          src={svg && img}
          alt=" no showing"
          className={`w-20 ${!svg && "hidden"}`}
        />
      </div>
      <div className="text-center">
        <h1 className="text-white">{heading}</h1>
        <p className="text-gray-400 text-sm mt-3">{type}</p>
        <p className="text-gray-400 text-sm mt-3">{duration}</p>
      </div>
    </div>
  );
}

export default CourceCard;
