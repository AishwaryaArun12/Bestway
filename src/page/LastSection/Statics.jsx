import React from 'react'

export const Statics = ({num, topText, underText}) => {
  return (
    <div className='flex heading'>
        <p className='text-7xl md:text-5xl lg:text-7xl raleBold' style={{color: 'rgba(61, 153, 112, 1)'}}>{num}</p>
        <span className='text-5xl headBold text-white ml-2.5'> + </span>
        <div className=' text-white sm:mt-2.5 '>
        <p className='text-xl'>{topText}</p>
            <p className='ml-2 -mt-1 text-3xl'>{underText}</p>
        </div>
    </div>
  )
}
