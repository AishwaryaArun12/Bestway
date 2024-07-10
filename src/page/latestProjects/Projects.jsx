import React from "react";
import ProjectTopCard from "./ProjectTopCards";
import ProjectBottomCard from "./ProjectBottomCards";


function Projects() {
    const projects = [
        {
            image: "image/zocoProject.png",
            video: "/zoco1.mp4",
            heading: "Zoco",
            text: "Explore our carefully curated courses that blend academic with practical skills, preparing you for success in your chosen field Keeping customers at the centre of the service delivery is our traits. Our quick turnaround time ."
        },
        {
            image: "image/sopheProject.png",
            heading: "Sophe",
            video: "/sohpwe.mp4",
            text: "Explore our carefully curated courses that blend academic with practical skills, preparing Aim Keeping customers at the centre of the service delivery is in our traits. Our quick turnaround time and proactive approach assist our clients to rehearse the future and outperform the competition."
        },
        {
            image: "image/pet.png",
            video: "/pet.mp4",
            heading: "Pet",
            text: "Explore our carefully curated courses that blend academic with practical skills, preparing you for success in your chosen field. Aim Keeping customers at the centre of the service delivery is in our traits. Our quick turnaround time and proactive approach assist our clients to rehearse the future and outperform the competition."
        },
        {
            image: "image/Olympic.png",
            video: "/olympic.mp4",
            heading: "Olympic",
            text: "Explore our carefully curated courses that blend academic with practical skills, preparing you for success in your chosen field. Aim Keeping customers at the centre of the service delivery is in our traits. Our quick turnaround time and proactive approach assis our clients to rehearse the future and outperform the competition."
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
        <div>
            <div className="font-bold mt-20 relative">
                {/* <div className="absolute top-[50vh] w-[60%] h-[30vh] blurDiv bg-[#31bbc8]"></div> */}

                <div className="flex flex-col md:items-center">
                    <h1 className="text-headText2 space-y-1 text-[30px] md:text-[58px] md:text-center px-6 mt-8">
                        <span className="grad6 relative">
                            Our{" "}
                        </span>
                        <span className="grad2">
                            Latest{" "}
                        </span>
                        Projects
                        <div className="w-12 h-0.5 md:hidden bg-slate-400 absolute rounded-r-lg grad3 left-8 sm:left-20">
                            <div className="relative flex items-center -top-0.5">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                        </div>
                    </h1>
                    <p className="tracking-wider text-white font-thin capitalize md:text-center p-4 text-sm mt-2 md:max-w-[60%] md:mb-10">
                        Explore our carefully curated courses that blend academic excellence
                        with practical skills, preparing you for success in your chosen
                        field.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 md:mt-16 w-full">
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
                    <div className="md:grid sm:hidden md:grid-cols-3 md:mb-20 lg:grid-cols-3 md:mt-20 w-full">
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
                {/* <div className="absolute bottom-[50vh] w-[50%] h-[50vh] -left-48 blurDiv bg-[#31bbc8]"></div> */}

                {/* <div className="absolute -z-10 top-64 right-[50px] md:-right-[50px] w-[15%] h-[70vh] blurDiv bg-[#00FFFF]"></div> */}
                {/* <div className="absolute top-[100vh] left-[40px] md:left-[640px] w-[50%] h-[80vh] blurDiv -z-10  bg-[#00FFFF]"></div> */}

                <div className="absolute -z-10 top-64 sm:right-[50px] md:-right-[50px] w-[15%] h-[70vh] blurDiv bg-[#00FFFF]"></div>
                <div className="absolute top-[100vh] sm:left-[640px] md:left-[640px] w-[50%] h-[80vh] blurDiv -z-10  bg-[#00FFFF]"></div> 
                <div className="absolute -bottom-[50vh] w-[50%] h-[50vh] right-48 blurDiv bg-[#31bbc8]"></div>
            </div>

        </div>
    );
}

export default Projects;
