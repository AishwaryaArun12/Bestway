import React from "react";
import { aimsvg, scalable, smartsvg } from "../../../public/svgfile/svgimg";
import Aboutcard from "./Aboutcard";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
function AboutSection() {
  return (
    <div className="mt-10  h-auto relative px-14 md:px-6">
      <div className="absolute top-[10vh]  -left-[240px] w-[50%] h-[80vh] -z-10 blurDiv bg-[#00FFFF]"></div>
      <h1 className="text-white  mb-3 hidden text-3xl md:block">
        About Best Way Exim
      </h1>
      <div className="flex md:flex-row flex-col gap-12 ">
        <div className="w-full flex  justify-center   md:hidden ">
          <img src="/image/aboutpng.png" className="w-full" alt="" />
        </div>
        <h1 className="text-white  mb-4 gap-10 block mt-7 md:hidden">
          About Best Way Exim
        </h1>
        <div className="w-full md:w-[50%]  md:mt-10  ">
          <div className="">
            <div>
              {" "}
              <Aboutcard
                img={aimsvg}
                title={"Aim"}
                text={` Aim Keeping customers at the centre of the service delivery is in
            our traits. Our quick turnaround time and proactive approach assist
            our clients to rehearse the future and outperform the competition.`}
              />
            </div>
            <div className="mt-10">
              <Aboutcard
                img={smartsvg}
                title={"Smart"}
                text={` Aim Keeping customers at the centre of the service delivery is in
            our traits. Our quick turnaround time and proactive approach assist
            our clients to rehearse the future and outperform the competition.`}
              />
            </div>
            <div className="mt-5">
              <Aboutcard
                img={scalable}
                title={"Scalable"}
                text={` Aim Keeping customers at the centre of the service delivery is in
            our traits. Our quick turnaround time and proactive approach assist
            our clients to rehearse the future and outperform the competition.`}
              />
            </div>
          </div>
        </div>
        <div className="w-[55%]    justify-center hidden md:block">
          <LazyLoadImage
            src="/image/aboutpng1.png"
            className="w-full object-cover h-full"
            effect="blur"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
