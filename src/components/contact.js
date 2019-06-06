import React from 'react';


class Contact extends React.Component {
  render() {

  	return (
      <section className="contact theme-bg" id="contact">
         <div className="container ">
            <div className="row">
               <div className="col-md-12">
                  <div className="section-title">
                     <h2 className="text-white">KONTAKT</h2>
                  </div>
                  <div className="row">
                     <div className="col-md-6">
                        <ul className="contact-box">
                           <li>
                              <div className="contact-circle">
                                 <i className="fa fa-map-marker" aria-hidden="true"></i>
                              </div>
                              <div className="contact-text">
                                 <h3 className="text-white">Lokacija</h3>
                                 <p className="text-white">Mletačka ulica 12 (IV. kat, IDA), 52100 Pula</p>
                              </div>
                           </li>
                           <li>
                              <div className="contact-circle">
                                 <i className="fa fa-phone" aria-hidden="true"></i>
                              </div>
                              <div className="contact-text">
                                 <h3 className="text-white">Tel.</h3>
                                 <p className="text-white">099/656-2294</p>
                              </div>
                           </li>
                           <li>
                              <div className="contact-circle">
                                 <i className="fa fa-envelope" aria-hidden="true"></i>
                              </div>
                              <div className="contact-text">
                                 <h3 className="text-white">Email:</h3>
                                 <p className="text-white">info@alfabeto-prijevodi.hr</p>
                              </div>
                           </li>
                           <li>
                              <a href="https://www.facebook.com/alfabeto.prijevodi">
                                 <div className="contact-circle">
                                    <i className="fa fa-facebook" aria-hidden="true"></i>
                                 </div>
                                 <div className="contact-text">
                                       <h3 className="text-white">Facebook:</h3>
                                       <p className="text-white">facebook.com/alfabeto.prijevodi</p>
                                 </div>
                              </a>
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