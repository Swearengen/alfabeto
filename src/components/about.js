import React from 'react';

import aboutIcon from '../assets/images/about.png';

class About extends React.Component {
  render() {

  	return (
  	    <section id="about" className="about">
         <div className="container ">
            <div className="row">
               <div className="col-md-12">
                  <div className="section-title">
                     <h2>O NAMA</h2>
                  </div>
                  <div className="feature-image feature-image--white-bg">
                     <div className="row">
                        <div className="col-md-4">
                           <img src={aboutIcon} alt="about" style={{width: '240px'}}/>
                        </div>
                        <div className="col-md-8">
                           <div className="text-left">
                              <p>Mladi smo studio koji se bavi pisanjem i prevođenjem tekstova te podukom. Obožavamo se igrati riječima, kratiti, dodavati i uređivati, a jednako nas veseli kada čujemo kako naši klijenti sipaju fraze na stranom jeziku kao iz rukava. Sve te ljubavi objedinili smo pod imenom <strong>Alfabeto</strong>.</p>
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