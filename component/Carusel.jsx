import React from 'react';

function Carusel() {
    return (
        <div className="container mt-5">
            <div id="animalCarousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="./media/ber.jpg" className="d-block w-100" alt="Bear" />
                    </div>
                    <div className="carousel-item">
                        <img src="./media/cheeta.jpeg" className="d-block w-100" alt="Cheetah" />
                    </div>
                    <div className="carousel-item">
                        <img src="./media/corn.jpg" className="d-block w-100" alt="Corn Snake" />
                    </div>
                    <div className="carousel-item">
                        <img src="./media/jiraf.webp" className="d-block w-100" alt="Giraffe" />
                    </div>
                    <div className="carousel-item">
                        <img src="./media/keng.webp" className="d-block w-100" alt="Kangaroo" />
                    </div>
                    <div className="carousel-item">
                        <img src="./media/lion.webp" className="d-block w-100" alt="Lion" />
                    </div>
                    <div className="carousel-item">
                        <img src="./media/sharck.png" className="d-block w-100" alt="Shark" />
                    </div>
                    <div className="carousel-item">
                        <img src="./media/tiger.jpg" className="d-block w-100" alt="Tiger" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#animalCarousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#animalCarousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            
        </div>
    );
}

export default Carusel;
