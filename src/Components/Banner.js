import React from 'react'
import laptop from '../assets/Laptop.jpg'

const Banner = () => {
  return (
    <div className='grid md:grid-cols-2 max-w-[1220px]  mx-auto'>
      <div className=' w-full col-span-1'>
        <img src={laptop} className='w-[80%]' alt="" />
      </div>
      <div className=' w-full flex flex-col p-10 md:p-0 justify-center col-span-1'>
        <h1 className='font-bold text-[#00df9a] text-[20px]'>Learn From Experts</h1>
        <p className='mt-5 text-[15px] '>Lorem ipsum dolor sit ipsum, ab alias error temporibus in veritatis. Dolorum excepturi, ullam error sunt modi accusamus quasi quam, aliquam labore repudiandaedisaepe, vel repellendus aperiam quam incidunt provident, ab deleniti tempora dignissimos, minima eaque. Saepe quae ipsam vel beatae.</p>
        
      </div>
    </div>
  )
}

export default Banner;