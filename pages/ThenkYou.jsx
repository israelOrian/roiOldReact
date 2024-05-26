import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'




const ThenkYou = () => {
    return (
        <div className='bg-success-subtle'>
            <Navbar />
            <div className="container">
                <h1 className="display-1 text-center">The form has been sent, thank you and goodbye.</h1>
                
            </div>
            <Footer />
        </div>
    )
}

export default ThenkYou