import React from 'react';

import aboutIcon from '../assets/images/about.png';

class About extends React.Component {
  render() {

  	return (
  	    <section id="about" className="theme-bg about">
         <div className="container ">
            <div className="row">
               <div className="col-md-12">
                  <div className="section-title">
                     <h2 className="text-white">O NAMA</h2>
                  </div>
                  <div className="feature-image feature-image--white-bg">
                     <div className="row">
                        <div className="col-md-6">
                           <img src={aboutIcon} alt="about"/>
                        </div>
                        <div className="col-md-6">
                           <div className="text-left">
                              <p className="text-white">Mladi smo studio koji se bavi pisanjem i prevođenjem tekstova te podukom.</p>
                              <p className="text-white">Obožavamo se igrati riječima, kratiti, dodavati i uređivati, a jednako nas veseli čuti kako naši klijenti sipaju fraze na stranom jeziku kao iz rukava.</p>
                              <p className="text-white">Sve te ljubavi objedinili smo pod imenom <strong>Alfabeto</strong>.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
  	);
  }
}


export default About;