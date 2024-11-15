import React from 'react'
import HeroImage from '../../assets/hero.png'

const Hero = () => {
  return (
    <div className='mt-10 flex justify-center items-center flex-wrap flex-col'>

      <h1 className=' text-[#0F172A] text-[2rem] font-bold w-fit text-transparent bg-clip-text bg-gradient-to-b from-[#231645] to-[#4507CC]'>AI-Driven Call Automation for <br /> Engaging Customers Anytime</h1>
      <p className='mt-4 text-sm w-[50%] text-[#0F172A] text-center  '>Our AI-powered call automation platform is designed to simplify and enhance client engagement. Simply connect your CRM or manually enter client details. Once set up, our intelligent AI agent can initiate calls, handle inquiries, qualify leads, and even follow up on specific tasks, all automatically. The AI can interact with clients in real-time, providing information, setting appointments, and collecting feedback, which your team can review for insights.</p>
      <button className='bg-[#EA580C] rounded-md w-[8rem] h-[2.5rem] text-[#fff] text-sm mt-4'>Signup Now</button>

    </div>
  )
}

export default Hero
