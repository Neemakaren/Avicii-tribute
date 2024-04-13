import React from 'react';
import img from '../assets/tim.jpg'

const Hero = () => {
  return (
    <>
    <header
        className="h-[90vh] bg-cover bg-center flex justify-center items-center  mt-3 hero-pattern here">
        {/* <div className="flex flex-row justify-center relative items-center backdrop-blur-sm bg-black/40 w-full h-full text-2xl text-white">
          <img src={img} alt="" className='mb-[-3em] w-[7em] lg:w-[8em] lg:mb-[-1.5em]' /> 
        </div> */}
    </header>
    {/* <section className=' mt-2 shadow-lg sm:flex sm:justify-center sm:items-center sm:bg-[#F5F6F8] sm:p-7 sm:rounded-1.5xl sm:max-w-90 sm:mt-5 s'>
      <section className='mx-auto flex flex-col px-2 bg-[#F5F6F8] sm:flex sm:flex-row '>
        <h2 className='text-2xl pl-2 text-[#55A747] font-bold lg:text-4xl'>We're here to help you find the perfect fit</h2>
      </section> 
    </section> */}
    </> 
  )
}

export default Hero