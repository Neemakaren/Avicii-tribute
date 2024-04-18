import {useState} from 'react'
import img from '../assets/worldmap.jpeg'

const World = () => {
  const [showModal, setShowModal] = useState(false);
 
  return (
    <>
    {/* <img decoding="async" width="1941" height="1125" class="js-block-bg absolute inset-0 w-full h-full object-cover object-top-left object-center z-0 transition-opacity pointer-none" alt="Worldmap" loading="lazy" srcset="https://usercontent.one/wp/avicii.com/wp-content/uploads/2023/09/worldmap.jpeg?media=1705065556 1941w, https://usercontent.one/wp/avicii.com/wp-content/uploads/2023/09/worldmap-334x194.jpeg?media=1705065556 334w, https://usercontent.one/wp/avicii.com/wp-content/uploads/2023/09/worldmap-668x387.jpeg?media=1705065556 668w" sizes="(max-width: 1941px) 100vw, 1941px" src={img}></img> */}
    <section className="w-[90vw] mx-auto  bg-cover bg-center relative flex justify-center items-center rounded-2xl l">
        <img src={img} alt="" className=''/>
        <div className="flex flex-row justify-center absolute items-center w-full h-full text-2xl text-white">
          <p className=' text-[.8em] border-2 border-white py-4 px-6 bg-black cursor-pointer' onClick={() => setShowModal(true)}>SHARE YOUR MEMORIES OF AVICII</p>
        </div>

        {/*  */}

        {showModal ? (
        <>
        <section className=" flex flex-col items-center w-[100%] fixed inset-0 z-50 outline-none focus:outline-none text-white bg-black absolute">
            <button className='text-2xl p-4 border-2 mb-10 mt-[8em]' onClick={() => setShowModal(false)}>close</button>
          <div className='flex flex-col w-[30%]'>
            <h3 className='text-center mb-6 font-bold'>Write your story of love here:</h3>
          <div>
          <form className=" ">
            <div className=' mb-4 '>
                <textarea
                    // id="postContent"
                    // name="postContent"
                    // value={content}
                    // onChange={onContentChanged}
                    className="resize-none w-full h-[10em] text-black pl-4 pt-2 outline-none"
                />
                <span className='text-[.75em] mt-[-10px]'>500 of 500 Character(s) left</span>
            </div>
                

                <input type="text" className='w-full text-black h-[3em] pl-4 outline-none'placeholder='Your Name' />

               
            </form>
                <span className='text-[.75em] flex items-center justify-center s'>Your images must be .jpg, .gif, or .png and max 3MB</span>
          </div>
          <span className='text-[20px]  underline flex items-center justify-center s'>Select File</span>
          </div>
          <button className='text-[14PX] mt-4 p-4 border-2 mb-10'>SUBMIT</button>
          
        </section>
         
        </>
      ) : null}
  
    </section>
    
    </>
  )
}

export default World