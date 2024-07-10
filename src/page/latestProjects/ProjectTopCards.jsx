import React, { useState } from "react";

function ProjectTopCard({ image, heading, text, video }) {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <div
            className="p-4 rounded-lg"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            style={{ height: 'auto' }}
        >
            <div className="relative min-h-[450px] max-h-[450px]">
                <img
                    src={image}
                    alt={heading}
                    className={`w-full h-full object-cover rounded-lg absolute top-0 left-0 transition-opacity duration-300 ${isHovering ? 'opacity-0' : 'opacity-100'}`}
                />
                <video
                    src={video}
                    muted
                    loop
                    className={`w-full h-full object-cover rounded-lg absolute top-0 left-0 transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`}
                    autoPlay
                />
            </div>
            <div className="mt-5 md:mt-10">
                <h2 className="tracking-wider text-3xl text-white">{heading}</h2>
                <p className="text-gray-300 mt-2 mb-8 md:mb-0 text-sm poppinsSB font-[200]">{text}</p>
            </div>
        </div>
    );
}

export default ProjectTopCard;
