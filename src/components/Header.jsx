import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden' id='Header' style={
        {backgroundImage: "url('/header_image.jpg')"}
    }>
        <Navbar />
        <div className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
            <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>Explore homes that fit your dreams</h2>
            <div className='space-x-6 mt-16'>
                <a href='#Projects' className='border border-white hover:text-purple-300 hover:border-purple-300 px-8 py-3 rounded-md'>Projects</a>
                <a href='#Contact' className='border border-purple-600 bg-purple-600 px-8 py-3 rounded-md'>Contact Us</a>
            </div>
        </div>
    </div>
  )
}

export default Header