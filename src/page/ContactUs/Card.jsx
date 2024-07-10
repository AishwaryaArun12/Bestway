import React from 'react'

export const Card = ({svg,text,num}) => {
  return (
    <div className='text-white p-5 px-7 text-center rounded-2xl' style={{background: 'rgba(32, 70, 53, 1)'}}>
        <div>{svg}</div>
        <div className=' text-lg text-gray-50/70 my-1 tracking-wide'>{text}</div>
        <div className=' text-sm'>{num}</div>
    </div>
  )
}
