import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* left side */}
            <div>
                <img className='mb-5 w-40' src={assets.logo}/>
                <p className='w-full md:w-2/3 text-gray-600 leading-6'> This class sets the position of the element to relative, which means it can be positioned relative to its normal position in the document flow. This is useful for absolutely positioning child elements or for controlling layout.</p>
            </div>
            {/* center */}
            <div >
                <p className='text-xl font-medium mb-5'>Company</p>
                <ul className='flex flex-col gap-2 text-gray-500'>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Privacy Policy</li>
                </ul>
            </div>
            {/* right */}
            <div>
                <p className='text-xl font-medium mb-5'>Get in touch</p>
                <ul className='flex flex-col gap-2 text-gray-500'>
                    <li>+1-222-456-7890</li>
                    <li>cardoctor@gmail.com</li>
                </ul>
            </div>
        </div>
        {/* Copy right section */}
        <div >
            <hr/>
            <p className='text-center py-4 text-sm '>Copyright 2024@ Appoitment - All Right reserved.</p>
        </div>
    </div>
  )
}

export default Footer