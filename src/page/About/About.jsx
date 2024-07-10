import React from 'react'
import { Statics } from '../LastSection/Statics'
import { Card } from './Card'

export const About = () => {
  return (
    <div>
    
    <div className="mt-48 md:mx-28">
    <div className='blurDiv4 absolute h-40 w-80  top-28 -left-60 '></div>
    <h1 className=' text-[2.5rem] text-center mb-16 grad8  raleBold'>About Us</h1>
    <div className='bg-black border border-gray-200/20 shadow-lg md:mx-0 mx-5 px-2 md:px-0 rounded-xl pt-10'>
        <div className='text-5xl head flex justify-evenly my-12 text-white'>
            <p className='gradient-blue'>Design</p>
            <p className='gradient-green'>Build</p>
            <p className='gradient-orange'>Launch</p>
        </div>
        <div className='text-center text-white/65 font-extralight md:mx-56 text-lg tracking-wide mb-10'>
            <p>"At Bestway Exim, transforming your brand into its best digital self is in our DNA.  Our customer-centric approach guarantees engaging, interactive, and immersive experiences that consistently deliver exceptional results</p>
        </div>
    </div>
    <div className='md:grid grid-cols-1 md:grid-cols-2 mt-28 hidden'>
        <div className='h-36 w-full'>
            <img src="/image/about1.png" className='h-80 w-full rounded-3xl px-5 ' alt="" />
            </div>
            <div>
                <Card head={"Our Purpose"} text={"Adipiscing at in tellus integer. Pellentesque massa placerat duis ultricies. Venenatis cras fgbfg g ghmhhhghg g mtjsrtawqb wbrhtjrty erhyeey55ehAdipiscing at in tellus integer. Pellentesque massa placerat duis ultricies. Venenatis cras fgbfg g ghmhhhghg g mtjsrtawqb wbrhtjrty erhyeey55eh"}/>
            </div>
            <div>
                <Card head={"Our Vision"} text={"Adipiscing at in tellus integer. Pellentesque massa placerat duis ultricies. Venenatis cras fgbfg g ghmhhhghg g mtjsrtawqb wbrhtjrty erhyeey55ehAdipiscing at in tellus integer. Pellentesque massa placerat duis ultricies. Venenatis cras fgbfg g ghmhhhghg g mtjsrtawqb wbrhtjrty erhyeey55eh"}/>
            </div>
            <img src="/image/about2.png" className='h-80 w-full rounded-3xl px-5 ' alt="" />
            <img src="/image/about3.png" className='h-80 w-full rounded-3xl px-5' alt="" />
            <div>
                <Card head={"Our Team"} text={"Adipiscing at in tellus integer. Pellentesque massa placerat duis ultricies. Venenatis cras fgbfg g ghmhhhghg g mtjsrtawqb wbrhtjrty erhyeey55ehAdipiscing at in tellus integer. Pellentesque massa placerat duis ultricies. Venenatis cras fgbfg g ghmhhhghg g mtjsrtawqb wbrhtjrty erhyeey55eh"}/>
            </div>
            <div>
                <Card head={"Our Mission"} text={"Adipiscing at in tellus integer. Pellentesque massa placerat duis ultricies. Venenatis cras fgbfg g ghmhhhghg g mtjsrtawqb wbrhtjrty erhyeey55ehAdipiscing at in tellus integer. Pellentesque massa placerat duis ultricies. Venenatis cras fgbfg g ghmhhhghg g mtjsrtawqb wbrhtjrty erhyeey55eh"}/>
            </div>
            <img src="/image/about4.png" className='h-80 w-full rounded-3xl px-5' alt="" />

    </div>
    <div className='md:hidden  mt-28 block'>
        <div className=' w-full'>
            <img src="/image/about1.png" className='h-80 px-9 w-full rounded-3xl ' alt="" />
            </div>
            <div>
                <Card head={"Our Purpose"} text={"Adipiscing at in tellus integer. Pellentesque massa placerat duis ultricies. Venenatis cras fgbfg g ghmhhhghg g mtjsrtawqb wbrhtjrty erhyeey55ehAdipiscing at in tellus integer. Pellentesque massa placerat duis ultricies. Venenatis cras fgbfg g ghmhhhghg g mtjsrtawqb wbrhtjrty erhyeey55eh"}/>
                <div className="absolute -bottom-[50vh] w-[50%] -left-40 h-[80vh] blurDiv bg-[#1c7272]"></div>

            </div>
            <img src="/image/about2.png" className='h-80 px-9 mt-20 w-full rounded-3xl ' alt="" />
            <div>
                <Card head={"Our Vision"} text={"Adipiscing at in tellus integer. Pellentesque massa placerat duis ultricies. Venenatis cras fgbfg g ghmhhhghg g mtjsrtawqb wbrhtjrty erhyeey55ehAdipiscing at in tellus integer. Pellentesque massa placerat duis ultricies. Venenatis cras fgbfg g ghmhhhghg g mtjsrtawqb wbrhtjrty erhyeey55eh"}/>
            </div>
            
            <img src="/image/about3.png" className='h-80 px-9 w-full mt-20 rounded-3xl ' alt="" />
            <div>
                <Card head={"Our Team"} text={"Adipiscing at in tellus integer. Pellentesque massa placerat duis ultricies. Venenatis cras fgbfg g ghmhhhghg g mtjsrtawqb wbrhtjrty erhyeey55ehAdipiscing at in tellus integer. Pellentesque massa placerat duis ultricies. Venenatis cras fgbfg g ghmhhhghg g mtjsrtawqb wbrhtjrty erhyeey55eh"}/>
            </div>
            <img src="/image/about4.png" className='h-80 px-9  mt-20  w-full rounded-3xl ' alt="" />
            <div>
                <Card head={"Our Mission"} text={"Adipiscing at in tellus integer. Pellentesque massa placerat duis ultricies. Venenatis cras fgbfg g ghmhhhghg g mtjsrtawqb wbrhtjrty erhyeey55ehAdipiscing at in tellus integer. Pellentesque massa placerat duis ultricies. Venenatis cras fgbfg g ghmhhhghg g mtjsrtawqb wbrhtjrty erhyeey55eh"}/>
            </div>
           

    </div>
    <div className="border-y-2 text-center items-center  border-white md:mx-16 space-y-6 px-16 md:space-y-0 md:px-8 my-28 mb-12 md:py-16 py-8 md:flex md:justify-between">
        <Statics num={8} topText={"JOB ORIENTED"} underText={"COURSES"} />
        <Statics num={1001} topText={"SUCCESSFULL"} underText={"  PROJECTS"} />
        <Statics num={120} topText={"NUMBER OF"} underText={"CLIENTS"} />
      </div>
        <div className='text-white m-10 md:hidden block my-16 relative'>
        <div className='blurDiv4 absolute h-full w-56  top-2 -left-56 '></div>
        <div className="absolute -bottom-[50vh] w-[60%] -left-40 h-[80vh] blurDiv bg-[#48f3f3]"></div>
        <h1 className=' text-4xl'>Let's Connect</h1>
    <div className='p-4  rounded-lg' >
                        <div className='flex flex-col m-4'>
                            <label htmlFor="" className='text-white' >Name</label>
                            <input type="text" className='text-white bg-[#333733]   mt-2   p-2' />
                        </div>
                        <div className='flex flex-col m-4'>
                            <label htmlFor="" className='text-white' >Email</label>
                            <input type="text" className='text-white bg-[#333733] mt-2   p-2' />
                        </div>
                        
                        <div className='flex flex-col m-4'>
                            <label htmlFor="" className='text-white' >Message</label>
                            <textarea type="text" className='text-white bg-[#333733]   mt-2   p-2'></textarea>
                        </div>
                        <div className='text-end m-6'>
                            <button className='p-2 rounded-lg px-5 text-white' style={{ backgroundColor: 'rgba(61, 153, 112, 1)' }}>Submit</button>
                        </div>
                    </div>
    </div>
        
    </div>
    <div className='relative h-10'>
        <div className="absolute -bottom-[50vh] w-[50%] -left-40 h-[80vh] blurDiv bg-[#1c7272]"></div>
        </div>
</div>
  )
}
