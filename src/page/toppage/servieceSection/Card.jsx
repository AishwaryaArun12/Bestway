import React from "react";
import { bulb } from "../../../../public/svgfile/svgimg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
function Card({ img, title, headimg, text, hoverimg, index }) {
  const handleMouseEnter = () => {
    const cover = document.getElementById(`cover${index}`);
    if (cover) {
      // cover.style.backgroundImage = `url(${hoverimg})`;
      // cover.style.backgroundSize = "cover";
      // cover.style.backgroundPosition = "center";
      // cover.style.backgroundRepeat = "no-repeat";
      cover.style.display = "block";
    }
  };

  const handleMouseLeave = () => {
    const cover = document.getElementById(`cover${index}`);

    if (cover) {
      cover.style.display = "none";
    }
  };
  return (
    <div
      className="card overflow-hidden bg-black rounded-3xl text-white relative transition-transform duration-700 ease-in-out hover:scale-110 "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        id={`cover${index}`}
        className="w-full h-full hidden  rounded-xl absolute overflow-hidden"
      >
        <img
          effect="blur"
          src={hoverimg}
          alt=""
          className="w-full object-cover h-full"
        />
      </div>
      <img
        effect="blur"
        src={headimg}
        className="w-full object-cover max-h-[200px]"
        alt=""
      />
      <div className="p-10 break-words">
        <div className="flex gap-4 items-center">
          <img src={img} alt="" />
          <p className="gap-2 text-xl font-thin">{title}</p>
        </div>
        <p className="text-md font-thin mt-5">{text}</p>
        <p className="mt-2 text-md text-[#54FF84]">Know More</p>
      </div>
    </div>
  );
}

export default Card;
