import React from 'react'
import img from '../assets/tim.jpg'
import img1 from '../assets/nat-12.jpg'

const Social = () => {
  return (
    <section className='mt-[10em]'>
      <p className='text-center text-white text-2xl font-bold l'>Instagram</p>
        {/* <p className='w-full grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-2 p-6 px-20'> */}
        <p className='w-full grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-4 mt-2 p-6 px-20'>
            <img src={img} alt=""  className='comment-img'/>
            <img src={img} alt="" className='comment-img'/>
            <img src={img1} alt="" className='comment-img'/>
            <img src={img} alt="" className='comment-img' />
            <img src={img1} alt="" className='comment-img'/>
            <img src={img1} alt="" className='comment-img'/>
        </p>
    </section>
  )
}

export default Social