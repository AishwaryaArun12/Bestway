import React from "react";

function ProjectBottomCard({ image, heading, text }) {
    return (
        <div className="p-4 rounded-lg hidden md:block relative">
            {/* <div className="absolute -z-10 top-1 -right-[50px] w-[15%] h-[70vh] blurDiv bg-[#00FFFF]"></div> */}
            <div className="absolute top-[1vh] left-[72px] w-[50%] h-[60vh] blurDiv -z-10  bg-[#00FFFF]"></div>

            <img src={image} alt={heading} className="w-full object-cover rounded-lg" />
            <h2 className="text-white tracking-wider text-3xl mt-4">{heading}</h2>
            <p className="text-gray-400 text-sm poppinsSB font-[200] mt-2">{text}</p>
        </div>
    );
}

export default ProjectBottomCard;
