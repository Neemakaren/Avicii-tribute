import React from 'react'
import {ProductsArray} from '../ProductsStore'


const NavForm = () => {
  return (
    <select className='text-white'>
        <option >SELECT COUNTRY</option>
            {ProductsArray.map((option, index) => {
                return (
                <>
                <option>{option.title}</option>
                </>
                )
            })}
        </select>
  )
}

export default NavForm