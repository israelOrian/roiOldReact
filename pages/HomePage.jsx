import React from 'react'
import Carusel from '../component/Carusel'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import MainTitle from '../component/MainTitle'

const HomePage = () => {
    return (
        <div className='bg-success-subtle'>
            <Navbar />
            <Carusel />
            <MainTitle />
            <Footer />
        </div>
    )
}

export default HomePage