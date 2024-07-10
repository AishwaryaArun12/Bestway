import React from 'react'
import { Card } from './Card'
import { useNavigate } from 'react-router-dom'

export const Services = () => {
  const navigate = useNavigate();
  return (
    <div className='mt-40 relative'>
      <div className='blurDiv5 absolute h-96 w-2/5  -bottom-20 -left-40 '></div>
      <h1 className=' text-4xl grad6 text-center mb-16 font-semibold text-headText'>Services</h1>
      <div className='blurDiv4 absolute h-40 w-80  top-5 -left-60 '></div>

      <div className=' grid sm:grid-cols-2 px-3 sm:px-20 gap-12'>
        <Card img={'/image/brand.png'} head={'Branding'} text={'Lorem ipsum dolor s tempor incididunt ut labore et Aliquam erat volutpat. Integer malesuada turpis id fringilla .Aliquam erat volutpat. Integer malesuada turpis id fringilla .fjhbhbdshknjdshbjughdsbjhjhbhjg  jjjehbew'} />
        <Card img={'/image/design2.png'} head={'UI/UX Designing'} text={'Lorem ipsum dolor s tempor incididunt ut labore et Aliquam erat volutpat. Integer malesuada turpis id fringilla .Aliquam erat volutpat. Integer malesuada turpis id fringilla .fjhbhbdshknjdshbjughdsbjhjhbhjg  jjjehbew'} />
        <Card img={'/image/ecomm.png'} head={'E-commerce'} text={'Lorem ipsum dolor s tempor incididunt ut labore et Aliquam erat volutpat. Integer malesuada turpis id fringilla .Aliquam erat volutpat. Integer malesuada turpis id fringilla .fjhbhbdshknjdshbjughdsbjhjhbhjg  jjjehbew'} />
        <Card img={'/image/appdev.png'} head={'App Development'} text={'Lorem ipsum dolor s tempor incididunt ut labore et Aliquam erat volutpat. Integer malesuada turpis id fringilla .Aliquam erat volutpat. Integer malesuada turpis id fringilla .fjhbhbdshknjdshbjughdsbjhjhbhjg  jjjehbew'} />
        <Card img={'/image/webdev.png'} head={'Web Development'} text={'Lorem ipsum dolor s tempor incididunt ut labore et Aliquam erat volutpat. Integer malesuada turpis id fringilla .Aliquam erat volutpat. Integer malesuada turpis id fringilla .fjhbhbdshknjdshbjughdsbjhjhbhjg  jjjehbew'} />
        <Card img={'/image/market.png'} head={'Digital Marketing'} text={'Lorem ipsum dolor s tempor incididunt ut labore et Aliquam erat volutpat. Integer malesuada turpis id fringilla .Aliquam erat volutpat. Integer malesuada turpis id fringilla .fjhbhbdshknjdshbjughdsbjhjhbhjg  jjjehbew'} />
        <div className='sm:col-span-2 py-12 px-5 sm:flex text-white my-20 border rounded-3xl overflow-hidden'
          style={{
            background: 'linear-gradient(230.89deg, rgba(218, 218, 218, 0.12) -94.34%, rgba(153, 151, 149, 0.12) 351%)',
            backgroundBlendMode: 'lighten',
            borderWidth: '2px',
            borderStyle: 'solid',
            borderImageSource: 'linear-gradient(90deg, #FFFFFF 0%, #3D9970 100%)',
            borderImageSlice: 1,
            borderRadius: '1.5rem'
          }}>
          <p className='text-xl md:text-3xl px-2 sm:px-8 font-light leading-normal tracking-wider '
            style={{ fontFamily: 'unset', fontWeight: 'lighter' }}>
            Our innovative technology solutions unlock efficiency, growth,
            and a competitive edge.
          </p>
          <button onClick={()=>{window.location.href='/contact'}} className='px-8 w-40 lg:w-44 h-16 rounded-xl my-3 sm:my-auto text-xl'
            style={{ background: "rgba(61, 153, 112, 1)" }}>
            Lets Talk
          </button>
        </div>

      </div>

    </div>
  )
}
