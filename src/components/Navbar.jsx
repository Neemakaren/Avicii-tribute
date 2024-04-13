import {useState, useRef} from 'react'
import { TbBrandSpotify } from "react-icons/tb";
import { CiYoutube } from "react-icons/ci";
import { RiAppleLine } from "react-icons/ri";
import img from '../assets/Avicii-Logo.png'
import { AiOutlineClose, AiOutlineLogout } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';
import NavForm from './NavForm';
import { ProductsArray } from '../ProductsStore';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleCloseNavbar = () => {
    setIsOpen((prev) => !prev);
  };

  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
  return (
    <nav className="container mx-auto px-2 z-10">
    
    <div className="flex-start flex items-center justify-between ">
      
      <div className="pt-2 lg:flex lg:items-center lg:justify-center">
        <img src={img} alt="" className='fill-current bg-black w-[5em]' />
      </div>
      
      <div className="hidden space-x-6 md:flex text-white">
        <li to='/' className="hover:text-darkGrayishBlue">TIM BERGLING FOUNDATION</li>
        <li to='/jobsec' className="hover:text-darkGrayishBlue">AVICII EXPERIENCE</li>
        <li to='/uploadjob' className="hover:text-darkGrayishBlue">JOIN THE COMMUNITY</li>
        <li to='/blogpage'className="hover:text-darkGrayishBlue" >SHOP</li>
      </div>

      <div className='flex text-2xl space-x-3'>
                <TbBrandSpotify className='fill-current text-white' />
                <CiYoutube className='fill-current text-white'/>
                <RiAppleLine className='fill-current text-white'/>
          </div>
      
      <button className='flex flex-row items-center justify-center text-2xl cursor-pointer transition-all duration-0.3 linear md:hidden  lg:hidden text-slate-900 text-white' onClick={() => setIsOpen((prev) => !prev)}>
            {isOpen ? <AiOutlineClose size={26} /> : <HiMenuAlt3 size={26} />}
          </button>
          
    </div>

    <div onClick={handleCloseNavbar}
          className={`${isOpen ? " flex bg-black " : "hidden"} cursor-pointer lg:hidden flex-col fixed min-h-full left-0 w-full h-full items-center justify-center transition duration-5 z-10 text-2xl space-y-6 mt-4 text-white`}
        >
          <li to='/' >TIM BERGLING FOUNDATION</li>
          <li>AVICII EXPERIENCE</li>
          <li to='/uploadjob' >JOIN THE COMMUNITY</li>
          <NavForm />
          
          <li to='/blogpage'>SHOP</li>
        
        </div>

  </nav>
  )
}

export default Navbar