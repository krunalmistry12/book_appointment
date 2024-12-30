import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom';
const  SpecialityMenu=()=>{
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='speciality'>
        <h1 className='text-3xl font-medium'>Find by speciality</h1>
        <p className='sm:1/3 text-center text-sm'>Simply browse our extensive list of trusted doctors,schedule your appoitment</p>
        <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll '>
            {specialityData.map((item,index)=>(
              <Link onClick={()=>scrollTo(0,0)} key={index} to={`/doctor/${item.speciality/*.replace(/\s+/g, '-')*/}`}
>
                <img className='hover:scale-105 duration-300 ease-in-out' src={item.image}/>
                <p>{item.speciality}</p>
              </Link>
            ))}
        </div>
      
    </div>
  )
}

export default SpecialityMenu;
