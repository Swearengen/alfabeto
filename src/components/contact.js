import React from 'react';


class Contact extends React.Component {
  render() {

  	return (
      <section className="contact" id="contact">
         <div className="container ">
            <div className="row">
               <div className="col-md-12">
                  <div className="section-title">
                     <h2>KONTAKT</h2>
                     <img src="assets/images/title-line.png" alt="title-line" className="img-fluid"/>
                  </div>
                  <div className="row">
                     <div className="col-md-6">
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
                                 <p>info@alfabeto.net</p>
                              </div>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
  	);
  }
}


export default Contact;