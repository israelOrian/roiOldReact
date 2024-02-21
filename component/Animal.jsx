import React from 'react'

const Animal = (props) => {
    return (
        <div className='col-3 rounded-2 border border-2 p-2 m-2'>
            <img src={props.image} alt="" className='rounded-2' width="100%" height={200} />
            <h2 >Name: <span className='lead text-secondary fw-bold'>{props.name}</span></h2>
            <h2>Food: <span className='lead text-secondary fw-bold'>{props.food}</span></h2>
            <h2>Habitat: <span className='lead text-secondary fw-bold'>{props.habitat}</span></h2>
            <h2>lifespan: <span className='lead text-success fw-bolder'>{props.lifespan}</span></h2>
        </div>
    )
}

export default Animal
