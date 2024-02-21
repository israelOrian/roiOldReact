import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Animal from '../component/Animal'
import animalJ from '../src/animals.json'

const createAllAnimal = () => {
  let newArray = animalJ.map((item, index) => {
    return <Animal key={index} image={item.image}
      name={item.name} food={item.food} habitat={item.habitat}
      lifespan={item.lifespan} />
  });
  return newArray;
};

const ZooSearch = () => {
  return (
    <div className='bg-success-subtle'>
      <Navbar />
      <div className='container row m-auto'>
        <div className='row justify-content-center'>
          {createAllAnimal()}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ZooSearch