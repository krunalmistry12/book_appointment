import React, { useState } from 'react'
import { use } from 'react';

const Login=()=>{
  const [state,setState]= useState('sign Up');
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [name,setName]=useState('')
  const onSubmithandler=async(event)=>{
    event.preventDefault()
  }
  return (
    <form className='min-h-[80vh] flex items-center'> 
        <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-2xl'>
          <p className='text-2xl font-semibold'>{state==='sign Up' ? "Create Account":"Login"}</p>
          <p>Please {state==='sign Up' ? "sign up":"login"} to Book appointmnet</p>
          {/* aa state use karvathi only signup ma j name field show krse */}
          {
            state==='sign Up' && <div className='w-full'>
              <p >Fullname:</p>
              <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e)=>setName(e.target.name)} value={name} required/>
            </div>}
          <div className='w-full'>
            <p>Email:</p>
            <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="email" onChange={(e)=>setEmail(e.target.name)} value={email} required/>
          </div>
          <div className='w-full'>
            <p>Password:</p>
            <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="passeord" onChange={(e)=>setPassword(e.target.name)} value={password} required/>
          </div>
          <button className='bg-primary text-white w-full py-2 rounded-md text-base'>{state==='sign Up' ? "Create Account":"Login"}</button>
          {state==='sign Up'
          ? <p>Already have an acocunt? <span onClick={()=>setState('Login')}   className='text-primary underline cursor-pointer'>Login here</span></p>:
          <p>Create a new account? <span onClick={()=>setState('sign Up')}   className='text-primary underline cursor-pointer'>click here</span></p>}
        </div>
    </form>
  )
}

export default Login