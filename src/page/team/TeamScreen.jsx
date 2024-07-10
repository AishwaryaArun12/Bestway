import React from 'react'
import TeamCard from "./TeamCard";
import { Statics } from '../LastSection/Statics';

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
            <div className="">
                <div className='h-3/4'>
                    <img src="/image/team.png" className='h-3/4' alt="" />
                </div>
                <div className='border-y-2 text-center items-center border-gray-500 space-y-5 md:space-y-0 md:mx-16 px-5 md:px-8 my-16 py-8 md:flex sm:justify-between'>
                    <Statics num={8} topText={'JOB ORIENTED'} underText={'COURSES'} />
                    <Statics num={1001} topText={'SUCCESSFULL'} underText={'PROJECTS'} />
                    <Statics num={120} topText={'NUMBER OF'} underText={'CLIENTS'} />
                </div>
                <div className='mx-auto w-3/4 lg:w-1/4 text-center text-white space-y-2'>
                    <h1 className='text-4xl'>Life @ Bestway</h1>
                    <p className='font-light text-xs tracking-wider'>Adipiscing at in tellus integer. Pellentesque massa placerat duis ultricies. Venenatis cras</p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 m-3 lg:m-28 gap-2 lg:gap-8 relative'>
                    <div className=' col-span-1'>
                        <img src="/image/team5.png" className='h-full' alt="" />
                    </div>
                    <div className='col-span-2'>
                        <div className=''>
                            <img src="/image/team6.png" className='w' alt="" />
                        </div>
                        <div className=' grid gap-3 md:gap-8 grid-cols-1 md:grid-cols-2'>
                            <div className='mt-3 '>
                                <img src="/image/team7.png" className='lg-h-auto  h-full mb-8' alt="" />
                            </div>
                            <div className='mt-3 p-4 align-middle' style={{ background: 'rgba(217, 217, 217, 1)' }}>
                                <h1 className='font-semibold text-lg my-4 text-center'>Our Vision</h1>
                                <p className='p-1'>Navigating the admissions process at our institution is a straightforward and transparent experience. Our process is more than a curriculum; it's a transformative experience crafted to elevate your skills, mindset, and career prospects. Join us at Futura Labs and embrace the journey to excellence.</p>
                            </div>

                        </div>
                    </div>
                    <div className="absolute -top-[50vh] w-[50%] h-[80vh] blurDiv bg-[#4dcceb]"></div>
                </div>
                {/* <div className="w-full sm:w-[90%] sm:h-20 text-headText2 text-xl sm:text-4xl font-semibold text-center"></div> */}
                <div className="flex flex-col items-center ">

                    <div className=" lg:p-16 py-12 w-full" style={{ background: 'rgba(237, 28, 36, .03)' }}>
                        <div className='flex text-white justify-end px-16'>
                            <p className='font-semibold'>#Founders</p>
                            <p className='font-thin mx-5'>#Designers</p>
                            <p className='font-thin'>#Developers</p>
                        </div>
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
                        <div className='custom-scroll overflow-x-auto flex gap-4 mt-5 w-full'>
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
                <div className='relative h-40'>
                    <div className="absolute -bottom-[50vh] w-[50%] -left-40 h-[80vh] blurDiv bg-[#1c7272]"></div>
                </div>
            </div>
        </div>
    )
}

export default TeamPage