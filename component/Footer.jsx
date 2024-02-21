import React from 'react';

function Footer() {
  return (
    <div>
      <footer style={{ fontFamily: 'Bad Script, cursive' }}>
        <div className="container py-4 py-md-5 px-4 px-md-3 text-body-secondary bg-success-subtle">
          <div className="row justify-content-center">

            <div className="col-6 col-lg-2 offset-lg-1 mb-3">
              <h5>Links</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#"> <i className="fa fa-envelope-o" aria-hidden="true"></i> E-mail</a></li>
                <li className="mb-2"><a href="#"> <i className="fa fa-telegram" aria-hidden="true"></i> Telegram</a></li>
                <li className="mb-2"><a href="#"> <i className="fa fa-linkedin" aria-hidden="true"></i> Linkedin </a></li>
                <li className="mb-2"><a href="#"> <i className="fa fa-whatsapp" aria-hidden="true"></i> WhatsApp</a></li>
              </ul>
            </div>

            <div className="col-6 col-lg-2 offset-lg-1 mb-3">
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#"> <i className="fa fa-twitter" aria-hidden="true"></i> Twitter</a></li>
                <li className="mb-2"><a href="#"><i className="fa fa-facebook-official" aria-hidden="true"></i> FaceBook</a></li>
                <li className="mb-2"><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i> Instagram</a></li>
              </ul>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
