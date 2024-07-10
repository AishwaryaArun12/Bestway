import React from "react";

function Mobailcrd({ img, title, headimg, text, hoverimg, index }) {
  const handleMouseEnter = () => {
    const cover = document.getElementById(`cover${index}`);
    if (cover) {
      cover.style.display = "block";
    }
  };

  const handleMouseLeave = () => {
    const cover = document.getElementById(`cover${index}`);
    if (cover) {
      cover.style.display = "none";
    }
  };

  const handleTouchStart = () => {
    const cover = document.getElementById(`cover${index}`);
    if (cover) {
      cover.style.display = "block";
    }
  };

  const handleTouchEnd = () => {
    const cover = document.getElementById(`cover${index}`);
    if (cover) {
      cover.style.display = "none";
    }
  };

  return (
    <div className="inline-block">
      <div
        className="card w-[300px] break-words bg-black rounded-3xl text-white relative transition-transform duration-700 ease-in-out hover:scale-110"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          id={`cover${index}`}
          className="w-full h-full hidden rounded-xl absolute overflow-hidden"
        >
          <img src={hoverimg} alt="" className="w-full object-cover h-full" />
        </div>
        <img src={headimg} className="w-full max-h-[200px]" alt="" />
        <div className="p-6 break-words">
          <div className="flex gap-4 items-center">
            <img src={img} alt="" />
            <p className="gap-2 text-xl font-thin">{title}</p>
          </div>
          <p className="text-md font-thin mt-5">{text}</p>
          
        </div>
      </div>
    </div>
  );
}

export default Mobailcrd;
