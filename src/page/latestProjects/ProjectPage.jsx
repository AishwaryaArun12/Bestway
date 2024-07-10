import React from 'react'
import ProjectTopCard from "./ProjectTopCards";
import ProjectBottomCard from "./ProjectBottomCards";


const ProjectPage = () => {

    const projects = [
        {
            image: "image/zocoProject.png",
            video: "/zoco1.mp4",
            heading: "Zoco",
            text: "Explore our carefully curated courses that blend academic with practical skills, preparing you for success in your chosen field."
        },
        {
            image: "image/sopheProject.png",
            heading: "Sophe",
            video: "/sohpwe.mp4",
            text: "Explore our carefully curated courses that blend academic with practical skills, preparing you for success in your chosen field."
        },
        {
            image: "image/pet.png",
            video: "/pet.mp4",
            heading: "Pet",
            text: "Explore our carefully curated courses that blend academic with practical skills, preparing you for success in your chosen field."
        },
        {
            image: "image/Olympic.png",
            video: "/olympic.mp4",
            heading: "Olympic",
            text: "Explore our carefully curated courses that blend academic with practical skills, preparing you for success in your chosen field."
        }
    ];

    const projectsBottom = [
        {
            image: "image/projectBottom.png",
            heading: "Event Management",
            text: "Explore our carefully curated courses that blend academic with practical skills, preparing you for success in your chosen field."
        },
        {
            image: "image/projectBottom.png",
            heading: "Event Management",
            text: "Explore our carefully curated courses that blend academic with practical skills, preparing you for success in your chosen field."
        },
        {
            image: "image/projectBottom.png",
            heading: "Event Management",
            text: "Explore our carefully curated courses that blend academic with practical skills, preparing you for success in your chosen field."
        }
    ];


    return (
        <div className='mt-24 p-2 sm:px-10 mb-5 md:mx-20'>
             <div className='blurDiv4 absolute h-40 w-96  top-28 -left-56 '></div>
            <div className="font-semibold">
                <div className="w-full sm:w-[90%] sm:h-20 text-headText2 text-xl sm:text-4xl font-semibold text-center"></div>
                <div className="flex flex-col items-center">
                    <h1 className="text-4xl text-center">
                        <span className="grad2 relative">
                            Projects
                        </span>
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 mt-6 w-full">
                        {projects.map((project, index) => (
                            <ProjectTopCard
                                key={index}
                                image={project.image}
                                heading={project.heading}
                                text={project.text}
                                video={project.video}
                            />
                        ))}
                    </div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-20 w-full">
                        {projectsBottom.map((project, index) => (
                            <ProjectBottomCard
                                key={index}
                                image={project.image}
                                heading={project.heading}
                                text={project.text}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="relative h-48">
                
            <div className="absolute -bottom-[50vh] w-[100%] h-[100vh] blurDiv bg-[#31bbc8]"></div>

            </div>
        </div>
    )
}

export default ProjectPage