import React from 'react';


class Contact extends React.Component {
  render() {

  	return (
        <section className="contact" id="contact">
           <div className="container">
              <div className="row justify-content-md-center">
                  <div className="col-md-10 text-center">
                    <div className="section-title">
                        <h2>Kontakt</h2>
                        <img src="assets/images/title-line.png" alt="white-line" className="img-fluid"/>
                    </div>
                    <ul className="contact-box">
                       <li>
                          <div className="contact-circle">
                             <i className="fa fa-map-marker" aria-hidden="true"></i>
                          </div>
                          <div className="contact-text">
                             <h3>Lokacija</h3>
                             <p>52100 Pula</p>
                          </div>
                       </li>
                       <li>
                          <div className="contact-circle">
                             <i className="fa fa-phone" aria-hidden="true"></i>
                          </div>
                          <div className="contact-text">
                             <h3>Tel.</h3>
                             <p>099/656-2294</p>
                          </div>
                       </li>
                       <li>
                          <div className="contact-circle">
                             <i className="fa fa-envelope" aria-hidden="true"></i>
                          </div>
                          <div className="contact-text">
                             <h3>Email:</h3>
                             <p>support@gmail.com</p>
                          </div>
                       </li>
                    </ul>
                 </div>
              </div>
           </div>
        </section>
  	);
  }
}


export default Contact;