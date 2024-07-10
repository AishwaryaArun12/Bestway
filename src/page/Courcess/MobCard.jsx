import React from "react";

function MobCard({ img, heading, type, duration, svg }) {
  return (
    <div className="bg-black text-white rounded-lg cursor-pointer cource p-4 border border-[#3C3C3C] w-[300px] sm:h-[450px] sm:w-auto">
      <div className="flex sm:mt-10 justify-center w-52  overflow-hidden h-[200px] items-center p-4 py-8 mb-3 sm:p-12">
        {!svg && img}
        <img
          src={svg && img}
          alt=" no showing"
          className={`w-[300px] ${!svg && "hidden"}`}
        />
      </div>
      <div className="text-center mt-10">
        <h1 className="text-white">{heading}</h1>
        <p className="text-gray-400 text-sm mt-3">{type}</p>
        <p className="text-gray-400 text-sm mt-3">{duration}</p>
      </div>
    </div>
  );
}

export default MobCard;
