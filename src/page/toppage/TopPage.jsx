import React from "react";
import VideoBg from "../../components/videobackground/VideoBg";

function TopPage() {
  const handleMouseEnter = () => {
    const small = document.getElementById("smallTex");
    if (small) {
      small.style.display = "block";
    }
  };
  return (
   
      <div className=" w-full h-screen heading">
      <VideoBg />
      
      <div className="text-center mt-[15%] text-headText font-bold">
        <h1 className="text-headText heading font-bold" onMouseEnter={handleMouseEnter}>
          <span className="text-white">We </span>
          <span className="grad relative headBold">Design</span>,{" "}
          <span className="grad headBold">Build</span>,
          <span className="text-white ">and </span>
          <span className="grad headBold">Connect</span>
        </h1>
        <div className="flex justify-center  min-h-[200px]">
          <p
            id="smallTex"
            className="text-smallText text-[18px] md:text-[20px] tracking-wide leading-7 capitalize text-sm mt-10 max-w-[80%] hidden"
          >
            We are a team of talented designers making websites with React and
            Next.js and we are here to help you. We are a team of talented
            designers making websites with React and Next.js and we are here to
            help you. We are a team of talented designers making websites with
            React and Next.js and we are here to help you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TopPage;
