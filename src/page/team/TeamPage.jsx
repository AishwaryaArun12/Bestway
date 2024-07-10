import React from 'react'
import TeamCard from "./TeamCard";

const TeamPage = () => {
  const projects = [
    {
        image: "image/mushthak.jpeg",
        heading: "Mushthak",
        text: "Project Manager"
    },
    {
        image: "image/abdurabb.jpeg",
        heading: "Abdurabb",
        text: "Node js Developer"
    },
    {
        image: "image/farhan.jpg",
        heading: "Farhan",
        text: "React Developer"
    },
    {
        image: "image/DENIL.png",
        heading: "Denil",
        text: "Designer"
    }
];
  return (
    <div>
    <div className="absolute top-[50vh] w-[60%] h-[30vh] blurDiv bg-[#00FFFF]"></div>
    <div className="font-bold">
        {/* <div className='h-3/4'>
            <img src="/image/team.png" alt="" />
        </div> */}
        {/* <div className="w-full sm:w-[90%] sm:h-20 text-headText2 text-xl sm:text-4xl font-semibold text-center"></div> */}
        <div className="flex flex-col items-center">
          
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10 w-full">
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
</div>
  )
}

export default TeamPage