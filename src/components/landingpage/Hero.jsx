import React from 'react'
import HeroImage from '../../assets/landing/hero.svg'

const Hero = () => {
  return (
    <div className='mt-10 flex justify-center lg:justify-between items-center lg:flex-nowrap flex-wrap'>


      <div className='lg:max-w-[50%] max-w-[100%]'>
        <h1 className='text-[1.6rem] lg:text-[2rem] font-bold w-fit text-[#0F172A] sm:block hidden'>AI-Driven Cold Calling for <br /> Engaging Customers Anytime</h1>
        <h1 className='text-[1.6rem] lg:text-[2rem] font-bold w-fit text-[#0F172A] sm:hidden block'>AI-Driven Cold Calling for Engaging Customers Anytime</h1>
        <p className='mt-4 text-sm w-[100%] text-[#0F172A] leading-7'>Our AI-powered call automation platform is designed to simplify and enhance client engagement. Simply connect your CRM or manually enter client details. Once set up, our intelligent AI agent can initiate calls, handle inquiries, qualify leads, and even follow up on specific tasks, all automatically. The AI can interact with clients in real-time, providing information, setting appointments, and collecting feedback, which your team can review for insights.</p>
        <button className='bg-[#EA580C] rounded-md w-[8rem] h-[2.5rem] text-[#fff] text-sm mt-4'>Signup Now</button>
      </div>


      <div className='lg:mt-0 mt-10 lg:block flex justify-center items-center'>
        <img src={HeroImage} alt="" className='lg:min-h-[30rem] lg:min-w-[30rem] h-[20rem]' />
      </div>



    </div>
  )
}

export default Hero
