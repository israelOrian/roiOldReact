import React from 'react'
import AboutTitle from '../component/AboutTitle'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'


const About = () => {
  return (
    <div className='bg-success-subtle'>
      <Navbar />
      <AboutTitle />
      <Footer />
    </div>
  )
}

export default About