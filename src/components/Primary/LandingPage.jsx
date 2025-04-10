import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'

const LandingPage = () => {
  return (
    <div className='bg-black w-full h-full min-h-screen text-white'>
      <Navbar />
      <Hero />
    </div>
  )
}

export default LandingPage
