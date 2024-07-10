import React from "react";
import { Statics } from "./Statics";

export const LastSection = () => {
  return (
    <div className="mb-40 bg-black/10">
      <div className="border-y-2 text-center items-center  border-white md:mx-16 space-y-6 px-16 md:space-y-0 md:px-8 my-28 mb-12 md:py-16 py-8 md:flex md:justify-between">
        <Statics num={8} topText={"JOB ORIENTED"} underText={"COURSES"} />
        <Statics num={1001} topText={"SUCCESSFULL"} underText={"  PROJECTS"} />
        <Statics num={120} topText={"NUMBER OF"} underText={"CLIENTS"} />
      </div>
      <div className="my-40 mb-72 border items-center justify-center border-gray-500 shadow-md h-60 mx-16 overflow-hidden hidden md:flex  relative">
        <h1 className="text-white text-7xl lg:text-8xl obt text-center xl:text-9xl">
          EXIM INFOTECH
        </h1>
        <div
          className="absolute top-0 left-0 right-0 bottom-0 -z-20"
          style={{
            backgroundImage: 'url("/image/lastbg.png")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          className="absolute top-0 left-0 right-0 bottom-0 -z-10 blur-sm"
          style={{ backgroundColor: "rgba(61, 153, 112, 0.3)" }}
        />
      </div>

      <div className="relative mb-8 sm:mt-40 mt-10 w-11/12 mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Get in Touch With Us
        </h1>
       

        <div className="block lg:grid grid-cols-2 items-center mt-10 mr-20 justify-between">
          <div className="my-10 lg:my-0">
            <div className="flex text-white">
              <div className="bg-green-500/30 sm:bg-white p-4 w-20 mr-4 ">
                <img
                  src="/image/location.png"
                  className="w-8 h-10 mx-auto"
                  alt=""
                />
              </div>
              <div className="my- space-y-2">
                <h2 className=" text-xl">Our Location</h2>
                <p className="text-xs text-gray-300">
                  17/49T Bismi Tower Rajivgandhi Bypass
                </p>
                <p className="text-xs text-gray-300">
                  Manjeri, Malappuram, Kerala 676121
                </p>
              </div>
            </div>

            <div className="flex text-white my-16">
              <div className="bg-green-500/30 sm:bg-white p-4 w-20 mr-4 ">
                <img
                  src="/image/hone.png"
                  className="w-10 h-10 mx-auto"
                  alt=""
                />
              </div>
              <div className="my-auto space-y-2">
                <h2 className=" text-xl">Phone Number</h2>
                <p className="text-xs text-gray-300">8592884671</p>
              </div>
            </div>

            <div className="flex text-white">
              <div className="bg-green-500/30 sm:bg-white p-4 w-20 mr-4">
                <img
                  src="/image/email.png"
                  className="w-10 h-10 mx-auto"
                  alt=""
                />
              </div>
              <div className="my-auto space-y-2">
                <h2 className=" text-xl">Email</h2>
                <p className="text-xs text-gray-300">
                  Bestwayinfotech@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div
            className="p-7 rounded-2xl"
            style={{ backgroundColor: "rgba(61, 153, 112, 0.35)" }}
          >
            <div className="flex flex-col m-4">
              <label htmlFor="" className="text-white text-xs">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="text-white bg-transparent border h-12 border-gray-300 rounded-md placeholder:text-gray-400 placeholder:text-xs mt-2 placeholder:font-thin  p-2"
              />
            </div>
            <div className="flex flex-col m-4">
              <label htmlFor="" className="text-white text-xs">
                Email
              </label>
              <input
                type="text"
                placeholder="Enter Your Email"
                className="text-white h-12 bg-transparent border border-gray-300 rounded-md placeholder:text-gray-400 placeholder:text-xs mt-2 placeholder:font-thin  p-2"
              />
            </div>
            <div className="flex flex-col m-4">
              <label htmlFor="" className="text-white text-xs">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="Enter Your Phone Number"
                className="text-white h-12 bg-transparent border border-gray-300 rounded-md placeholder:text-gray-400 placeholder:text-xs mt-2 placeholder:font-thin  p-2"
              />
            </div>
            <div className="flex flex-col m-4">
              <label htmlFor="" className="text-white text-xs">
                Message
              </label>
              <textarea
                type="text"
                placeholder="Enter Your Message"
                className="text-white h-20 bg-transparent border border-gray-300 rounded-md placeholder:text-gray-400 placeholder:text-xs mt-2 placeholder:font-thin  p-2"
              ></textarea>
            </div>
            <div className="text-end m-6">
              <button
                className="p-2 rounded-lg px-5 text-white"
                style={{ backgroundColor: "rgba(61, 153, 112, 1)" }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
