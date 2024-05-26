import { React, useState } from 'react'

import animalJ from '../src/animals.json'
import AnimalNoImg from './AnimalNoImg';
import SForm from './SForm';

const Gallery2 = () => {
    const [counter, setCounter] = useState(0);
    const next = () => {
        if (counter < animalJ.length - 1)
            setCounter(counter + 1);
        else setCounter(0)
    }

    const back = () => {
        if (counter > 0)
            setCounter(counter - 1);
        else setCounter(animalJ.length - 1)
    }

    // const createAllCars = () => {
    //     return animalJ.map((item, index) => {
    //         return <img key={index} onClick={() => {
    //             setCounter(item.id - 1)
    //         }} src={item.image} width={300} height={200} />
    //     })
    // }
    return (
        <div>
            <div className="container text-center p-4">
                <img src={animalJ[counter].image} className='img-fluid' width="75%"  />
                <div className='mt-4'>
                    <button onClick={next} className='btn btn-dark m-2'>Next</button>
                    <button onClick={back} className='btn btn-danger m-2'>Back</button>
                </div>
            </div>

            <div className="container">
                <div className="row"><SForm />
                    {<AnimalNoImg name={animalJ[counter].name} food={animalJ[counter].food} lifespan={animalJ[counter].lifespan} habitat={animalJ[counter].habitat}  /> }
                    
                </div>
                
            </div>
        </div>
    )
}


const ButtonsImg = () => {
    return (
        <div>
            {Gallery2()}
        </div>
    )
}

export default ButtonsImg