import React from 'react'
import { assets } from '../assets/assets'

function Contact() {
  return (
    <>
      <div className='text-center text-2xl pt-10 text-gray-500'>
      <p>CONTACk <span className='text-black font-semibold'>US</span></p>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image}/>
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600'>Our OFFIE</p>
          <p className='text-gray-500'>390019 Willms Station <br/> Suite 650,pune,IND</p>
          <p className='text-gray-500'>Tel:{415} 555-0132 <br/>Email:kunalmistry0177@gmail.com</p>
          <p className='font-semibold text-lg text-gray-600'>Careers at PRESCRIPIO</p>
          <p className='text-gray-500'>Learn more about our team and job opening</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition '>Explore Job</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact
