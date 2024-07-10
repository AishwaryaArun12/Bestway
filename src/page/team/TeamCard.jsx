import React from "react";

function ProjectTopCard({ image, heading, text }) {
    return (
        <div className="rounded-lg min-h-[350px] w-72 flex-shrink-0 relative">
        <div className="h-96 w-full relative rounded-lg overflow-hidden">
            <img src={image} alt={heading} className="w-full h-full object-cover" />
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-11/12 p-2 bg-opacity-70 backdrop-blur-xl rounded-lg">
                <h2 className="text-white text-xl font-semibold">{heading}</h2>
                <p className="text-white mt-2 font-normal">{text}</p>
            </div>
        </div>
    </div>
    );
}

export default ProjectTopCard;
