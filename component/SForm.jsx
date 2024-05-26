import { React, useState } from 'react'



const SForm = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, phone);
    }
    return (
        <div className=''>
            <form onSubmit={handleSubmit} >
                <label>Name</label>
                <br />
                <input className='input-group-text' onChange={(e) => setName(e.target.value)} type="text" />
                <br />
                <label>Phone</label>
                <br />
                <input className='input-group-text' onChange={(e) => setPhone(e.target.value)} type="text" />
                <br />
                <button className='btn btn-success m-2'>Submit</button>
            </form>
        </div>
    )
}

export default SForm