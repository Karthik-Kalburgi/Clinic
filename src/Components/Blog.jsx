import React from 'react';

import blogwalle from '../Images/blg.png';

const Blog = () => {
  return (
    <div>
      {/* Image Section with Centering */}
      <div className='relative w-full h-[300px] sm:h-[400px] md:h-[500px]'>
        <img 
          src={blogwalle} 
          alt='Blog' 
          className='w-full h-full object-cover' 
        />
        <h1 className='absolute top-16 left-32 transform -translate-x-1/2 text-4xl font-bold text-black'>
          Blog
        </h1>
      </div>

      {/* Blog Grid Section */}
      <div className='px-4 md:px-16 py-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
          <div className='border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow'>
            <h2 className='text-xl font-semibold'>Blog Post 01</h2>
            <p className='mt-2'>Brief description of the blog post content goes here...</p>
          </div>
          <div className='border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow'>
            <h2 className='text-xl font-semibold'>Blog Post 02</h2>
            <p className='mt-2'>Brief description of the blog post content goes here...</p>
          </div>
          <div className='border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow'>
            <h2 className='text-xl font-semibold'>Blog Post 03</h2>
            <p className='mt-2'>Brief description of the blog post content goes here...</p>
          </div>
          <div className='border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow'>
            <h2 className='text-xl font-semibold'>Blog Post 04</h2>
            <p className='mt-2'>Brief description of the blog post content goes here...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
