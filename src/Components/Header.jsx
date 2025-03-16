import React from 'react'

import { BiSolidPhoneCall } from "react-icons/bi";

const Header = () => {
  return (
    <div className='bg-white h-[200px] flex justify-center items-center'>
        <div className='relative'>
            <img src={logos} alt='Image Logo' className='w-[9%] h[3%] rounded-sm  ml-8   ' />
        </div>
        <div className=''>
            <ul className='flex gap-[150px] text-xl hover:text-blue-900 cursor-pointer font-semibold text-blue-600  mr-8 mb-24  '>   
                <li>Blog</li>
                <li>News</li>
                <li className='text-2xl'> <BiSolidPhoneCall /> </li>
                <li>News</li>
              
            </ul>
            <div>
            <ul className='flex  gap-16 mt-[-2px] text-xl hover:text-blue-900 cursor-pointer font-semibold text-blue-600  mr-8 mb-24  '>
                <li>Home</li>
                <li>About Doctor</li>
                <li>Our Services</li>
                <li>Gallery</li>
                <li>Contact Us</li>

            </ul>
            </div>
        </div>

    </div>
  )
}

export default Header