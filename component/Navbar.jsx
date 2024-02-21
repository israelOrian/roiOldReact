import React from 'react';
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <header className="sticky-top p-3 mb-2 bg-success-subtle text-emphasis-light" style={{ fontFamily: 'Bad Script, cursive' }}>
      <div className="Nav_div ">
        <nav className="navbar navbar-expand-lg rounded-3 bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="HomePage.html"><Link to="/">HOME</Link></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" ><Link to="/Media">media</Link></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" ><Link to="/About">AboutUs</Link></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" ><Link to="/CotactUs">CotactUs</Link></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" > <Link to="/QuestionsAnswers">Questions and Answers</Link> </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" > <Link to="/ZooSearch">Zoo - serch</Link> </a>
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
