import React from 'react'
import {Link} from 'react-router-dom'

const Letter = () => {
  return (
    <div className='bg-black'>
      <div className='max-w-[1220px] mx-auto md:flex justify-between items-center p-3'>
        <div className='p-10 md:p-20'>
            <h1 className='font-bold text-red-500 text-[30px]'>Want to learn Latest I.T skills</h1>
            <p className='text-white'>Sign up to our Newsletter and stay up to date</p>
        </div>
        <div className='p-10 pt-5 md:p-20'>
            <input type="text" placeholder='Email' className='rounded-md p-3 w-[250px]' require="true" />
            <button className='bg-red-500 text-black rounded-full text-sm p-2 m-3 w-[90px]' >Submit</button>
            <p className='text-white pt-2 text-[15px] md:text-[17px] '>We care about the protection of your data. Read our</p>
            <Link to='' className='text-white pt-2 hover:text-red-500'>Privacy Policy</Link>
        </div>
      </div>
    </div>
  )
}

export default Letter;