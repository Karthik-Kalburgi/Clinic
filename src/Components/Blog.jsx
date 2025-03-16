import React from 'react'
import blog from '../Images/blog.jpg'
const Blog = () => {
  return (
    <div>
      <div className='relative w-full h-[300px] overflow-hidden'>
      <img src={blog} alt='Blog' className='w-full h-[300px]' />
      <h1 className='absolute top-16 left-12 text-4xl font-bold  text-black' >Blog</h1>
      </div>
      <div>
        <div className='grid grid-cols-4'>
          <div>01</div>
          <div>02</div>
          <div>03</div>
          <div>04</div>
        </div>
      </div>
    </div>
  )
}

export default Blog