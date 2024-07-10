import React from "react";
import BlogCard from "./BlogCards.jsx";
import { useNavigate } from "react-router-dom";

function Blogs() {
    const navigate = useNavigate();

    const projects = [
        {
            image: "image/blog1.png",
            text: "Project Manager uploaded new blog, very informative"
        },
        {
            image: "image/blog2.png",
            text: "Node js Developer uploaded new blog, very informative"
        },
        {
            image: "image/blog3.png",
            text: "React Developer uploaded new blog, very informative"
        }
    ];


    return (
        <div>
            <div className="absolute top-[850vh] w-[60%] h-[30vh] blurDiv bg-[#00FFFF]"></div>
            <div className="font-bold">
                <div className="w-full sm:w-[90%] sm:h-20 text-headText2 text-xl sm:text-4xl font-semibold text-center"></div>
                <div className="flex flex-col md:items-center">
                    <h1 className="text-headText md:text-center font-thin text-[34px] md:text-[68px] mt-10">
                        <span className="grad6 relative">
                            Blogs{" "}
                            <div className="w-20 h-0.5 bg-slate-400 absolute rounded-r-lg grad3 left-2">
                                <div className="relative flex items-center -top-0.5">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                            </div>
                        </span>
                    </h1>

                    <p className="tracking-wider font-thin leading-7 text-smallText capitalize md:text-center p-4 text-sm mt-4 lg:max-w-[50%] md:max-w-[60%] md:mb-10">
                        Explore our carefully curated courses that blend academic excellence
                        with practical skills,
                        field.
                    </p>
                    <div className="custom-scroll flex overflow-x-auto lg:grid md:grid-cols-3 mt-10 w-full">
                        {projects.map((project, index) => (
                            <BlogCard
                                key={index}
                                image={project.image}
                                text={project.text}
                            />
                        ))}
                    </div>
                    <div className="flex justify-center sm:justify-start">
                        <button
                            style={{ background: '#3D9970' }}
                            className="tracking-wider mt-14 mb-24 text-white heading text-lg rounded-xl w-60 h-16"
                            onClick={() => navigate('/blogs')}
                        >
                            View More
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Blogs;
