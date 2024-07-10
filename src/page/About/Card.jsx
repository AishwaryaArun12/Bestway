import React from "react";
import { useNavigate } from "react-router-dom";

export const Card = ({ head, text }) => {
  const navigate = useNavigate();
  return (
    <div
      className="md:m-9 md:mx-20 md:mb-16 m-8 pb-8 p-1 md:p-2 bg-white  align-middle"
      
    >
      <h1 className="font-semibold text-lg my-4 text-center">{head}</h1>
      <p className="p-4 ">{text}</p>
      {head == "Our Team" && (
        <div
          className="flex  px-4 cursor-pointer"
          onClick={() => {
            navigate("/team");
          }}
        >
          <p className=" text-green-700 mr-3">Know More</p>
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="13" cy="13" r="13" fill="#099D5B" />
            <path
              d="M10 18L16 13L10 8"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      )}
    </div>
  );
};
