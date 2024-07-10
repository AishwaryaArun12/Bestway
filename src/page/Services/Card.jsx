import React from "react";

export const Card = ({ img, head, text }) => {
  return (
    <div>
      <div>
        <img src={img} alt="" />
      </div>
      <div className="bg-white rounded-3xl my-2 p-2">
        <h1
          className="text-center font-semibold text-2xl"
          style={{ color: "rgba(35, 140, 93, 1)" }}
        >
          {head}
        </h1>
        <p className=" text-sm p-4 tracking-wide">{text}</p>
      </div>
    </div>
  );
};
