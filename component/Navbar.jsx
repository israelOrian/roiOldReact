import React from 'react';
import { NavLink } from 'react-router-dom'


function Navbar() {
  return (
    <header className="sticky-top p-3 mb-2 bg-success-subtle text-emphasis-light  " style={{ fontFamily: 'Bad Script, cursive' ,fontSize: '25px'}}>
      <div className="Nav_div ">
        <nav className="navbar navbar-expand-lg rounded-3  bg-info-subtle">
          <div className="container-fluid">
            <a className="navbar-brand" href="HomePage.html"><NavLink to="/">HOME</NavLink></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center flex-lg-column" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" ><NavLink className={"link"} to="/Media">media</NavLink></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" ><NavLink className={"link"} to="/About">AboutUs</NavLink></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" ><NavLink className={"link"} to="/CotactUs">CotactUs</NavLink></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" > <NavLink className={"link"} to="/QuestionsAnswers">Questions and Answers</NavLink> </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" > <NavLink className={"link"} to="/ZooSearch">Zoo - serch</NavLink> </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" > <NavLink className={"link"} to="/AnimalsFS">AnimalsFS</NavLink> </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
