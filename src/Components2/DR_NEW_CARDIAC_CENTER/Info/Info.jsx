import React from 'react'
import drHeart from '../../../Images/DR_NEW_CARDIAC_CENTER_IMAGES/doctor_holding_heart.png'
import Logo from '../../../Images/DR_NEW_CARDIAC_CENTER_IMAGES/Website_Logo.png'

const Info = () => {
  return (
    <div>
      <div className=''>
        <img src={drHeart} alt='Doctor Holding Heart' className='h-[45%]  object-cover' />
        <img src={Logo} alt='Logo  ' className='absolute  ' ></img>
      </div>
    </div>
  )
}

export default Info