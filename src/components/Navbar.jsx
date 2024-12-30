import React, { useState } from 'react'
import {assets} from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
function Navbar() {

    const navigate=useNavigate();
    const [showMeny,setShowMenu]=useState(false);
    const[token,setToken]=useState(true);
  return (
    <div className='flex item-center justify-between text-sm py-4 mb-5 bottom-b bottom-b-gray-400'>
      <img onClick={()=>{navigate(`/`)}} className='w-44 cursor-pointer' src={assets.logo} alt=''/>
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to='/'>
            <li className='py-1'>Home</li>
            <hr className='boarder-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='/doctor'>
            <li className='py-1'>Doctors</li>
            <hr className='boarder-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='/about'>
            <li className='py-1'>About</li>
            <hr className='boarder-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='/contact'>
            <li className='py-1'>Contact</li>
            <hr className='boarder-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
      </ul>
      <div className='flex items-center gap-4'>
      {
        token                       //agr login hoy to button show nhi kre and profile pic show krse
        ?<div className='flex items-center gap-2 cursor-pointer group relative'>
            <img className='w-8 rounded-full' src={assets.profile_pic} alt=""/>
            <img className='w-2.5' src={assets.dropdown_icon} alt=""/>
            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                    <p onClick={()=>navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                    <p onClick={()=>navigate('/my-appoitment')} className='hover:text-black cursor-pointer'>MyAppoitmnet</p>
                    <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                </div>
            </div>
        </div>
        :<button onClick={()=>navigate('/login')}className='bg-primary text-white px-8 py-3 rounded-full font-light hiddenmd:block'>Create account</button>
      }
        
      </div>
    </div>
  )
}

export default Navbar
