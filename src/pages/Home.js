import React from 'react'
import Typed from 'react-typed';
import Banner from '../Components/Banner';
import Letter from '../Components/Letter';
import Charts from '../Components/Charts';

const Home = () => {
  return (
    <>
      {/* home */}
      <div className='py-[150px] bg-black text-center font-bold w-full md:py-[150px]'>
        <div className='text-2xl md:text-4xl text-white'>Learn With Us</div>
        <div className='text-[30px] md:text-[60px] text-red-500 mt-6'>Grow With Us.</div>
        <div className='text-2xl md:text-4xl text-white mt-6'>Learn 
                <Typed className='text-red-500 text-2xl pl-2 md:text-5xl'
                    strings={['Web Development', 'Digital Marketing', 'Ethical Hacking ']}
                    typeSpeed={100}
                    loop={true}
                    backSpeed={60}
                />
                  </div>
                  <button className='bg-red-500 text-black rounded-full text-[14px] md:text-md p-3 md:p-4 mt-[30px] md:mt-[40px]'>Get Started</button>
      </div>
      <Banner/>
      <Letter/>
      <Charts/>
    </>
  )
}

export default Home;


