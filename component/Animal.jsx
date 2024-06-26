import React from 'react'

const Animal = (props) => {
    return (
        <div className='col-lg-4 shadow-sm rounded-3 p-3 mb-2'>
            <img src={props.image} alt="" className='img-fluid rounded-top-3 mb-4' width="100%" height={200} />
            <h2 >Name: <span className='lead text-secondary fw-bold'>{props.name}</span></h2>
            <h2>Food: <span className='lead text-secondary fw-bold'>{props.food}</span></h2>
            <h2>Habitat: <span className='lead text-secondary fw-bold'>{props.habitat}</span></h2>
            <h2>lifespan: <span className='lead text-success fw-bolder'>{props.lifespan}</span> </h2>
        </div>
    )
}

export default Animal
