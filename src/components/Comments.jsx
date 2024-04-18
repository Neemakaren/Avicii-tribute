import React from 'react'
import { blog } from '../utils/constants'

const Comments = ({message}) => {



  return (
    <>
    <section>
        <ul class="js-animate-fadein flex uppercase flex-wrap gap-x-3 justify-center text-white mb-16 text-[16px]">
            <li>
                <a href="#comments">Comments</a>
            </li>
              <li aria-hidden="true" class="text-center tracking-tight last-of-type:hidden">•</li>
              <li><a href="/images#images">Images</a>
              </li>
                    <li aria-hidden="true" class="text-center tracking-tight last-of-type:hidden">•</li>
                            </ul>
        <div>
        <h2 className="text-white text-[20px] flex items-center justify-center text-center l u mx-auto mb-2">
            TAKE A FEW MINUTES AND READ THE <br /> AVICII STORIES AND MEMORIES <br /> PEOPLE HAVE SHARED FROM ALL <br /> OVER THE WORLD.</h2>
        </div>
    </section>
    <section>
    <div className='w-full grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-2 p-6 px-20'>
        {
            message.map((m, idx) => (
              <div key={idx}className='p-4 '>
            <div className='text-white p-4  text-center'>
              <p className='mb-4 text-[14px] font-bold'>{m.name}</p>
              <p className='mb-4 text-[12px]'>{m.testimonial}</p>  
              <p className='text-[#a2a3a4] text-[12px] '>2024-04-15</p> 
            </div>
            </div>
            ))
          }
      </div>
    </section>
    </>
  )
}

export default Comments