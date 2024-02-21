import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import MediaTitle from '../component/MediaTitle'


const Media = () => {
  return (
    <div className='bg-success-subtle'>
      <Navbar />
      <MediaTitle />
      <Footer />
    </div>
  )
}

export default Media