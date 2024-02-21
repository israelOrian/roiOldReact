import React from 'react';
import { useNavigate } from 'react-router-dom'


const Form = () => {
    const nav = useNavigate();
    const eventSub = (event) => {
        event.preventDefault();
        console.log('Form submitted!');
        nav("/ThenkYou");


    }

    return (
        <div className="container">
            <h1 className="display-1 text-center">Fill out the application and we'll get back to you! </h1>
            <form onSubmit={eventSub} className="col-6 mx-auto">
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="first and last name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="tel" className="form-control" id="phone" placeholder="Ten digits" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="comments" className="form-label">Comments or notes</label>
                    <textarea className="form-control" id="comments" rows="3"></textarea>
                </div>
                <div className="col-12 d-flex justify-content-center">
                    <button type="submit" className="btn btn-secondary btn-lg" > Send to us</button>
                </div>
            </form>
        </div>
    );
}

{/* <Link to="/ThenkYou"> </Link> */ }
export default Form;
