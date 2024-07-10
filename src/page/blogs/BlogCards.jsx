import React from "react";
import { useNavigate } from 'react-router-dom';

function BlogCards({ image, text }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/blogDetails');
    };

    return (
        <div className="relative p-3 flex-shrink-0 rounded-lg min-h-[300px] w-full sm:w-56 md:w-auto">
            <img onClick={handleClick} src={image} alt='blog' className="cursor-pointer w-full h-full object-cover rounded-lg" />
            <div className="absolute left-0 bottom-3 w-full p-6 text-white">
                <p className="text-lg mt-2 tracking-wider">{text}</p>
            </div>
        </div>
    );
}

export default BlogCards;
