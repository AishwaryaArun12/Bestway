import React from "react";

function Aboutcard({ img, title, text }) {
  return (
    <div>
      <div className="flex gap-4 items-start justify-start">
        <img src={img} alt="" />
        <div className="text-white">
          <p className="text-[#AEFFDB] text-md">{title}</p>
          <p className="text-sm poppinsSB font-[200] mt-4">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default Aboutcard;
