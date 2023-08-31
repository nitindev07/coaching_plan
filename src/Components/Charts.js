import React from 'react'
import logo from '../assets/logo192.png'

const Charts = () => {
  return (
    <div className='bg-slate-100 pt-20 px-9 lg:px-20'>
      <h1 className='text-center md:text-5xl font-bold text-3xl'>Subscribe Plans</h1>
      <div className='md:grid md:grid-cols-2  xl:grid xl:grid-cols-3 gap-24 max-w-[1240px] mx-auto py-20 text-center'>
        
        <div className='bg-white hover:bg-slate-200  mx-10 md:mx-0 rounded-2xl shadow-xl '>
            <img src={logo} alt="" className='mx-auto w-[60px] pt-7' />
            <h1 className='font-bold text-[25px] my-3'>Web Development</h1>
            <amount className='font-bold text-red-500 text-[30px]'>$140</amount>
            <p className=' p-3'>Lorem ipsum dolor sit amet.</p><hr className='w-[250px] border-black mx-auto' />
            <p className=' p-3'>Lorem, ipsum dolor sit ametjskja</p><hr className='w-[250px] border-black mx-auto'/>
            <p className=' p-3'>Lorem ipsum dolor sit amet.</p>
            <button className='bg-black text-red-500 p-2 rounded-full my-6 w-[150px] text-[15px] hover:bg-red-500 hover:text-black'>Subscribe</button>
        </div>
        <div className='bg-white hover:bg-slate-200  my-14 md:my-0 mx-10 md:mx-0 rounded-2xl shadow-xl'>
        <img src={logo} alt="" className='mx-auto w-[60px] pt-7' />
        <h1 className='font-bold text-[25px] my-3'>Ethical Hacking</h1>
            <amount className='font-bold text-red-500 text-[30px]'>$140</amount>
            <p className=' p-3'>Lorem ipsum dolor sit amet.</p><hr className='w-[250px] border-black mx-auto' />
            <p className=' p-3'>Lorem, ipsum dolor sit ametjskja</p><hr className='w-[250px] border-black mx-auto'/>
            <p className=' p-3'>Lorem ipsum dolor sit amet.</p>
            <button className='bg-black text-red-500 p-2 rounded-full my-6 w-[150px] text-[15px] hover:bg-red-500 hover:text-black'>Subscribe</button>
        </div>
        <div className='bg-white hover:bg-slate-200   mx-10 md:mx-0 rounded-2xl shadow-xl'>
        <img src={logo} alt="" className='mx-auto w-[60px] pt-7' />
        <h1 className='font-bold text-[25px] my-3'>Digital Marketing</h1>
            <amount className='font-bold text-red-500 text-[30px]'>$140</amount>
            <p className=' p-3'>Lorem ipsum dolor sit amet.</p><hr className='w-[250px] border-black mx-auto' />
            <p className=' p-3'>Lorem, ipsum dolor sit ametjskja</p><hr className='w-[250px] border-black mx-auto'/>
            <p className=' p-3'>Lorem ipsum dolor sit amet.</p>
            <button className='bg-black text-red-500 p-2 rounded-full my-6 w-[150px] text-[15px] hover:bg-red-500 hover:text-black'>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default Charts;