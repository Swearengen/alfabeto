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
               <div className="row">
                  <div className="col-md-12">
                     <div className="section-title">
                        <h2>USLUGE</h2>
                        <img src="assets/images/title-line.png" alt="white-line" className="img-fluid"/>
                     </div>
                     <div className="feature-image feature-image--white-bg">
                        <div className="row">
                           <div className="col-md-6">
                              <img src={conversationIcon} alt="conversation"/>
                           </div>
                           <div className="col-md-6">
                              <div className="text-left">
                                 <h3>PRIJEVODI</h3>
                                 <p><em>stvorite si nove prilike</em></p>
                                 <p>Želite ostaviti dobar dojam i izgraditi ugled u inozemstvu, a jezici vam nisu jača strana? Priuštite svojim čitateljima jednostavan i jasan jezik. Uz našu pomoć šarmirajte svojim tekstovima.</p>
                                 <p className="no-margin">Javite name se ako trebate:</p>
                                 <ul>
                                    <li>ovjerene prijevode</li>
                                    <li>prijevode bez ovjere</li>
                                    <li>lekturu</li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section className="theme-bg">
            <div className="container">
                  <div className="feature-image">
                     <div className="row">
                        <div className="col-md-6">
                           <div className="text-left">
                              <h3 className="text-white">PISANJE SADRŽAJA</h3>
                              <p><em>privucite poglede klijenata</em></p>
                              <p>Znate koliko vaš proizvod vrijedi, ali to nikako ne znate pretočiti u riječi? Započeli ste s pisanjem, ali vas je snašla kreativna blokada? Odahnite jer mi ćemo vam u tome pomoći. Kvalitetno i povoljno privlačimo poglede klijenata, vaša jedina zadaća je obratiti nam se.</p>
                           </div>
                        </div>
                        <div className="col-md-6">
                           <img src={ideaIcon} alt="idea"/>
                        </div>
                     </div>
                  </div>
            </div>
         </section>
         <section>
            <div className="container">
               <div className="feature-image">
                  <div className="feature-image feature-image--white-bg">
                     <div className="row">
                        <div className="col-md-6">
                           <img src={englishIcon} alt="english"/>
                        </div>
                        <div className="col-md-6">
                           <div className="text-left">
                              <h3 className="text-white">PODUKE</h3>
                              <p><em>jer dobra komunikacija je pola posla</em></p>
                              <p>Stižu inozemni klijenti, a vama je maca popala jezik? Dosta je izbjegavanja poslovnih razgovora, sljedeći ih sastanak izujte iz cipela. Mi smo tu da vam olakšamo komunikaciju, a vi samo odaberite jezik.</p>
                              <p className="no-margin">Nudimo vam:</p>
                                 <ul>
                                    <li>tečaj stranog jezika za poslovne potrebe</li>
                                    <li>opći tečaj stranog jezika</li>
                                    <li>individualni tečaj stranog jezika</li>
                                    <li>konverzacijski tečaj</li>
                                    <li>online tečaj stranog jezika</li>
                                 </ul>
                           </div>
                        </div>
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