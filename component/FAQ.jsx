import React from 'react';

function FAQ() {
  return (
    <main className="container justify-content-center">
      <div className="col-md-5 p-lg-5 mx-auto my-5">
        <h1 className="display-1 fw-bold" style={{ textShadow: '0px -6px 7px rgba(0,0,0,0.6)' }}>
          Questions & Answers
        </h1>
      </div>
      <div className="container justify-content-center">
        <div className="accordion mx-auto container" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Question: What is the purpose of a zoo's conservation programs?
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>Answers:</strong> Zoos often have conservation
                programs aimed at preserving endangered species. These programs involve breeding, research,
                and education to help protect species from extinction and promote biodiversity.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Question: How do zoos ensure the well-being of animals in captivity?
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>Answers.</strong> Zoos implement various measures to ensure the well-being of
                animals in captivity. This includes providing appropriate habitats, veterinary care,
                enrichment activities, and nutrition plans. Additionally, many zoos participate in
                accreditation programs to uphold high standards of animal care.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Question: Why do zoos play a vital role in education?
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>Answers.</strong>Zoos serve as educational institutions by offering insights into
                the natural behaviors and habitats of diverse animal species. Through interactive exhibits,
                guided tours, and educational programs, zoos help raise awareness about wildlife
                conservation, ecology, and the importance of protecting the planet's biodiversity.
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default FAQ;
