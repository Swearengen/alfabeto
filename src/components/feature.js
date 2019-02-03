import React from 'react';

import ideaIcon from '../assets/images/idea.png';
import conversationIcon from '../assets/images/conversation.png';
import englishIcon from '../assets/images/english.png';


class Feature extends React.Component {
  render() {

  	return (
      <div>
         <section className="feature" id="feature">
            <div className="container">
               <div className="row justify-content-md-center">
                  <div className="col-md-10 text-center">
                     <div className="section-title">
                        <h2>Usluge</h2>
                        <img src="assets/images/title-line.png" alt="white-line" className="img-fluid"/>
                        <h3>Prijevodi</h3>
                     </div>
                     <div className="feature__image feature__image--white-bg">
                        <img src={conversationIcon} alt="conversation"/>
                        <p>Stvorite si nove prilike.</p>
                        <p>Želite ostaviti dobar dojam i izgraditi ugled u inozemstvu, a jezici vam nisu jača strana? Priuštite svojim čitateljima jednostavan i jasan jezik. Uz našu pomoć šarmirajte svojim tekstovima.</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section className="theme-bg">
            <div className="container">
               <div className="row justify-content-md-center">
                  <div className="col-md-10 text-center">
                     <div className="section-title">
                        <h3 className="text-white">Pisanje Sadržaja</h3>
                     </div>
                     <div className="feature__image">
                        <img src={ideaIcon} alt="idea"/>
                        <p>Privucite poglede klijenata.</p>
                        <p>Znate koliko vaš proizvod vrijedi, ali to nikako ne znate pretočiti u riječi? Započeli ste s pisanjem, ali vas je snašla kreativna blokada?</p>
                        <p>Odahnite jer mi ćemo vam u tome pomoći. Kvalitetno i povoljno privlačimo poglede klijenata, vaša jedina zadaća je obratiti nam se.</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section>
            <div className="container">
               <div className="row justify-content-md-center">
                  <div className="col-md-10 text-center">
                     <div className="section-title">
                        <h3 >Poduke</h3>
                     </div>
                     <div className="feature__image feature__image--white-bg">
                        <img src={englishIcon} alt="english"/>
                        <p>Jer dobra komunikacija je pola posla.</p>
                        <p>Stižu inozemni klijenti, a vama je maca popala jezik? Dosta je izbjegavanja poslovnih razgovora, sljedeći ih sastanak izujte iz cipela.</p>
                        <p>Mi smo tu da vam olakšamo komunikaciju, a vi samo odaberite jezik.</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
  	);
  }
}


export default Feature;