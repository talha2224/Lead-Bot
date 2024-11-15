import React from 'react'
import Navbar from '../components/home/Navbar'
import Hero from '../components/home/Hero'

const Home = () => {
  return (
    <div className='px-12 bg-[#fafafa]'>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default Home