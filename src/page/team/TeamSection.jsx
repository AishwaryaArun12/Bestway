import React from "react";
import TeamCard from "./TeamCard";

function Teams() {
  const projects = [
    {
      image: "image/mushthak.jpeg",
      heading: "Mushthak",
      text: "Project Manager",
    },
    {
      image: "image/abdurabb.jpeg",
      heading: "Abdurabb",
      text: "Node js Developer",
    },
    {
      image: "image/farhan.jpg",
      heading: "Farhan",
      text: "React Developer",
    },
    {
      image: "image/DENIL.png",
      heading: "Denil",
      text: "Designer",
    },
  ];


    return (
        <div>
            <div className="absolute top-[750vh] w-[60%] h-[30vh] blurDiv bg-[#00FFFF]"></div>
            <div className="font-bold">
                <div className="w-full sm:w-[90%] sm:h-20 text-headText2 text-xl absolute sm:text-4xl font-semibold text-center"></div>
                <div className="flex flex-col md:items-center">
                    <h1 className="text-headText font-thin md:text-center text-[34px] md:text-[68px]">
                        <span className="grad6 relative">
                            Our{" "}
                            <div className="w-20 h-0.5 bg-slate-400 absolute rounded-r-lg grad3 left-2">
                                <div className="relative flex items-center -top-0.5">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                            </div>
                        </span>
                        <span className="grad2">

                        Team
                        </span>
                    </h1>

                    <p className="tracking-wider font-thin  leading-7 text-smallText capitalize md:text-center p-4 text-sm mt-4 lg:max-w-[50%] md:max-w-[60%]">
                        Explore our carefully curated courses that blend academic excellence
                        with practical skills.
                    </p>
                    {/* <div className='overflow-x-auto flex gap-4 mt-5 w-full'>
                        {projects.map((project, index) => (
                            <TeamCard
                                key={index}
                                image={project.image}
                                heading={project.heading}
                                text={project.text}
                            />
                        ))}
                    </div> */}
                    <div className='custom-scroll overflow-x-auto lg:mt-16 flex gap-4 mt-6 w-full'>
                        {projects.map((project, index) => (
                            <TeamCard
                                key={index}
                                image={project.image}
                                heading={project.heading}
                                text={project.text}
                            />
                        ))}
                    </div>
                </div>
              </div>
           

         
          <div className="absolute -bottom-[50vh] w-[50%] h-[50vh] -left-48 blurDiv bg-[#31bbc8]"></div>
        </div>
    
  );
}

export default Teams;
