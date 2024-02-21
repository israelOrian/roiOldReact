import React from 'react';
import { Link } from 'react-router-dom'


function MainTitle() {
    return (
        <main>
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary bg-dark-subtle rounded-5">
                <div className="col-md-6 p-lg-5 mx-auto my-5">
                    <h1 className="display-3 fw-bold">Welcome to our zoo</h1>
                    <h3 className="fw-normal text-muted mb-3">Discover the animal in you</h3>
                    <div className="d-flex gap-3 justify-content-center lead fw-normal">
                        <a className="icon-link" href="about.html">
                        <Link to="/About">Learn more</Link>
                            <svg className="bi">
                                <use xlinkHref="#chevron-right"></use>
                            </svg>
                        </a>
                        <a className="icon-link">
                            <Link to="/Media">Gallery</Link>
                            <svg className="bi">
                                <use xlinkHref="#chevron-right"></use>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="product-device shadow-sm d-none d-md-block"></div>
                <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
            </div>

            <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3 justify-content-center">
                <div className="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                    <div className="my-3 py-3">
                        <h2 className="display-5">Our zoo</h2>
                        <p className="lead">in the middle of the city.</p>
                    </div>
                    <div className="bg-body-black shadow-sm mx-auto"
                        style={{ width: '80%', height: '100%', borderRadius: '21px 21px 0 0' }}>
                        <p>A zoo (short for zoological garden; also called an animal park or menagerie) is a facility in
                            which animals are kept within enclosures for public exhibition and often bred for conservation
                            purposes.
                            The term zoological garden refers to zoology, the study of animals. The term is derived from the
                            Greek ζώον, zoon, 'animal', and the suffix -λογία, -logia, 'study of'. The abbreviation zoo was
                            first used of the London Zoological Gardens, which was opened for scientific study in 1828, and
                            to the public in 1847. The first modern Zoo was the Tierpark Hagenbeck by Carl Hagenbeck in
                            Germany. In the United States alone, zoos are visited by over 181 million people annually.</p>
                        <br />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default MainTitle;
