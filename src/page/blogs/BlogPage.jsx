import React from 'react'
import BlogCard from "./BlogCards.jsx";

const BlogPage = () => {
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
        },
        {
            image: "image/blog3.png",
            text: "Project Manager uploaded new blog, very informative"
        },
        {
            image: "image/blog1.png",
            text: "Node js Developer uploaded new blog, very informative"
        },
        {
            image: "image/blog4.png",
            text: "React Developer uploaded new blog, very informative"
        },
        {
            image: "image/blog1.png",
            text: "Project Manager uploaded new blog, very informative"
        },
        {
            image: "image/blog4.png",
            text: "Node js Developer uploaded new blog, very informative"
        },
        {
            image: "image/blog3.png",
            text: "React Developer uploaded new blog, very informative"
        }
    ];


    return (
        <div>
            <div className="mt-20 font-bold p-2 sm:px-10 mb-5 md:mx-20">
            <div className='blurDiv4 absolute h-40 w-96  top-28 -left-56 '></div>

                <div className="w-full sm:w-[90%] sm:h-20 text-headText2 text-xl sm:text-4xl font-semibold text-center"></div>
                <div className="flex flex-col items-center">
                    <h1 className="text-center text-4xl tracking-wider mb-5">
                        <span className="text-white relative">
                            Blogs
                        </span>
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 mt-6 mb-40 w-full">
                        {projects.map((project, index) => (
                            <BlogCard
                                key={index}
                                image={project.image}
                                text={project.text}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className='relative'>
            <div className="absolute -bottom-[10vh] w-[100%] h-[50vh] blurDiv -left-10 bg-[#258790]"></div>
            <div className="absolute -bottom-[10vh] w-[100%] h-[50vh] right-20 blurDiv bg-[#20737a]"></div>
            </div>
            </div>
        
    );
}

export default BlogPage