import React from 'react';

class About extends React.Component {
  render() {

  	return (
  	    <section id="about" className="theme-bg about">
              <div className="about-chat">
                 <div className="container ">
                    <div className="row justify-content-md-center">
                       <div className="col-md-10 text-center">
                          <div className="section-title">
                             <h2 className="text-white">O Nama</h2>
                             <img src="assets/images/white-line.png" alt="title-line" className="img-fluid"/>
                          </div>
                          <p className="text-white">Mladi smo studio koji se bavi pisanjem i prevođenjem tekstova te podukom. Obožavamo se igrati riječima, kratiti, dodavati i uređivati, a ništa nas manje ne veseli kada čujemo kako naši klijenti sipaju fraze na stranom jeziku kao iz rukava.</p>
                          <p className="text-white">Sve te ljubavi objedinili smo pod imenom <strong>Alfabeto</strong>.</p>
                       </div>
                    </div>
                 </div>
              </div>
        </section>
  	);
  }
}


export default About;