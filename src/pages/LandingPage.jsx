import React from 'react'
import Navbar from '../components/landingpage/Navbar'
import Hero from '../components/landingpage/Hero'
import Help from '../components/landingpage/Help'
import Performance from '../components/landingpage/Performance'
import UseCase from '../components/landingpage/UseCase'
import Ideas from '../components/landingpage/Ideas'
import Presence from '../components/landingpage/Presence'
import Footer from '../components/landingpage/Footer'

const LandingPage = () => {
  return (
    <>

      <div className='px-4 sm:px-12'>
        <Navbar />
        <Hero />
        <Help />
        <Performance />
        <UseCase />
        <Presence />
      </div>

      <Footer/>

    </>
  )
}

export default LandingPage