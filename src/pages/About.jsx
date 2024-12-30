import React from 'react'
import { assets } from '../assets/assets'

function About() {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>
      <div className='my-10 flex flex-col  md:flex-row gap-12 '>
        <img src={assets.about_image} className='w-full md:max-w-[360px]'/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to , where compassionate care meets advanced medical expertise. Our team of dedicated healthcare professionals is committed to providing personalized and comprehensive medical services to our community.</p>
          <p>To enhance the health and well-being of our patients through quality care, education, and innovative treatment options.</p>
          <b className='text-gray-800'>Our Mission:</b>
          <p>At , we pride ourselves on a diverse team of specialists, each bringing their unique skills and experiences to the practice:</p>
        </div>
      </div>
      <div className='text-xl my-4' >
        <p>Why <span className='text-gray-700 font-semibold'>Choose US</span></p>
      </div>
      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency:</b>
          <p>Streamlined appointment scheduling that fits into busy lifestyle.</p>
        </div>
        <div className='border px-10 md:px-16 py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convenience:</b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className='border px-10 md:px-16 py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalization:</b>
          <p>Tailored recommendation and reminders to help you stay on top your health.</p>
        </div>
      </div>
      
    </div>
  )
}

export default About
