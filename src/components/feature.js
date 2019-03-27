import React from 'react';

import ideaIcon from '../assets/images/idea.png';
import conversationIcon from '../assets/images/conversation.png';

import pricingIcon from '../assets/images/pricing.png';

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
                     </div>
                     <div className="feature-image feature-image--white-bg">
                        <div className="row">
                           <div className="col-md-4">
                              <img src={conversationIcon} alt="conversation" style={{width: '240px'}}/>
                           </div>
                           <div className="col-md-8">
                              <div className="text-left">
                                 <h3>PRIJEVODI</h3>
                                 <p><em>stvorite si nove prilike</em></p>
                                 <p>Želite ostaviti dobar dojam i izgraditi ugled u inozemstvu, a jezici vam nisu jača strana?</p>
                                 <p>Uz naše prijevode priuštite svojim čitateljima jednostavan i jasan jezik. Šarmirajte svojim tekstovima.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section style={{padding: 0}}>
            <div className="container">
                  <div className="feature-image feature-image--white-bg">
                     <div className="row">
                        <div className="col-md-6">
                           <div className="text-left">
                              <h4>PISANI PRIJEVODI</h4>
                              <p>Potreban vam je prijevod teksta na strani jezik ili sa stranog jezika na hrvatski?</p>
                              <p><strong>Prepustite to nama.</strong> Za vas prevodimo <strong>s/na više od 10 stranih jezika.</strong></p>
                              <p>Uz opsežno istraživanje i marljivo mozganje prenosimo izvornu poruku u drugi jezik.</p>
                              <p><strong>Javite nam se!</strong></p>
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="text-left">
                              <h4 className="text-white">USMENI PRIJEVODI</h4>
                              <p>Želite pronaći zajednički jezik s klijentima, ali vam to ne polazi za rukom? Tu mi uskačemo! Prenosimo vaše riječi na strani jezik i omogućujemo lakšu komunikaciju na poslovnim sastancima, pregovorima, konferencijama i seminarima.</p>
                           </div>
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
                           <div className="text-left">
                              <h4>NA KOJE JEZIKE PREVODIMO</h4>
                              <p className="no-margin">Prevodimo za vas sa stranog jezika na hrvatski i s hrvatskog na strani jezik. Jezici koje nudimo:</p>
                                 <ul>
                                    <li>hrvatski jezik</li>
                                    <li>engleski jezik</li>
                                    <li>njemački jezik</li>
                                    <li>talijanski jezik</li>
                                    <li>španjolski jezik</li>
                                    <li>francuski jezik</li>
                                    <li>slovenski jezik</li>
                                    <li>poljski jezik</li>
                                    <li>češki jezik</li>
                                    <li>portugalski jezik</li>
                                    <li>švedski jezik</li>
                                    <li>nizozemski jezik</li>
                                 </ul>
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="text-left">
                              <h4>KAKVE TEKSTOVE PREVODIMO?</h4>
                              <ul>
                                 <li>marketinške tekstove, sadržaje za društvene mreže (content)</li>
                                 <li>internetske stranice</li>
                                 <li>diplomske radove, maturalne radove</li>
                                 <li>objave za medije i srodne tekstove</li>
                                 <li>tehničku dokumentaciju</li>
                                 <li>književne tekstove</li>
                                 <li>tekstove iz sljedećih područja:</li>
                                    <ul className="nested-list">
                                       <li>turizam i ugostiteljstvo</li>
                                       <li>medicina</li>
                                       <li>nutricionizam</li>
                                       <li>ekonomija i gospodarstvo</li>
                                    </ul>
                              </ul>
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
                        <div className="col-md-8">
                           <div className="text-left">
                              <h3 className="text-white">PISANJE SADRŽAJA (copywriting)</h3>
                              <p><em>privucite poglede klijenata</em></p>
                              <p>Znate koliko vaš proizvod vrijedi, ali to nikako ne znate pretočiti u riječi? Započeli ste s pisanjem, ali vas je snašla kreativna blokada? Odahnite jer mi ćemo vam pomoći u pisanju sadržaja! </p>
                              <p>Kvalitetno i povoljno usmjeravamo svjetla reflektora baš na vas.</p>
                              <h4>ŠTO SVE PIŠEMO?</h4>
                              <ul className="text-white">
                                 <li>tekstove za internetsku stranicu</li>
                                 <li>tekstove o proizvodima i uslugama</li>
                                 <li>tekstove za internetske trgovine (webshop)</li>
                                 <li>brošure</li>
                                 <li>tekstove za oglase</li>
                                 <li>recenzije proizvoda</li>
                                 <li>recenzije usluga</li>
                              </ul>
                           </div>
                        </div>
                        <div className="col-md-4">
                           <img src={ideaIcon} alt="idea" style={{marginTop: '100px'}}/>
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
                        <div className="col-md-12">
                           <div className="text-left">
                              <h3>PODUKE</h3>
                              <p><em>jer dobra komunikacija je pola posla</em></p>
                              <p>Oduvijek vas je mučila gramatika <strong>njemačkog jezika</strong> ili biste htjeli usavršiti <strong>engleski jezik</strong>? Želite naučiti osnove <strong>talijanskog jezika</strong> ili napokon saznati o čemu je riječ u vašim omiljenim sapunicama na <strong>španjolskom jeziku</strong>? Mi ćemo vam olakšati!</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section style={{padding: 0}}>
            <div className="container">
                  <div className="feature-image feature-image--white-bg">
                     <div className="row">
                        <div className="col-md-12">
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-md-6">
                           <div className="text-left">
                              <h4>OPĆI TEČAJ STRANOG JEZIKA</h4>
                           </div>
                           <div className="text-left">
                              <p>Upisom općeg tečaja stranog jezika učite četiri školska sata tjedno. Ako ste oduvijek htjeli započeti s učenjem nekog stranog jezika ili želite poboljšati sve svoje jezične vještine, ovo je prava stvar za vas</p>
                              <p>Slušamo, pišemo, čitamo, govorimo, razmišljamo, diskutiramo; <strong>i to sve na stranom jeziku!</strong></p>
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="text-left">
                              <h4>POSLOVNI TEČAJ STRANOG JEZIKA</h4>
                           </div>
                           <div className="text-left">
                              <p>Stižu inozemni klijenti, a vama je maca popapala jezik? Dosta je izbjegavanja poslovnih razgovora, sljedeći ih sastanak izujte iz cipela.</p>
                              <p>Pregovaranje, odgovaranje na upite, ugovaranje poslova na stranom jeziku? <strong>Četiri školska sata tjedno brusite svoje poslovne vještine.</strong> Mi smo tu da vam olakšamo komunikaciju, a vi samo odaberite jezik.</p>
                           </div>
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
                           <div className="text-left">
                              <h4>INDIVIDUALNI TEČAJ STRANOG JEZIKA</h4>
                              <p>Planirate uskoro put pod noge i potrebno vam je <strong>brzo uliti znanje u glavu?</strong> Javite nam se sa svojim željama, kreiramo nastavu baš za vas</p>
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="text-left">
                              <h4>ONLINE TEČAJ STRANOG JEZIKA</h4>
                              <p>Rado biste naučili strani jezik, ali vam se ne da ustati iz naslonjača? Nema problema, stižemo kod vas doma.</p>
                              <p><strong>Odaberite koliko školskih sati tjedno virtualno učimo.</strong></p>
                           </div>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-md-6">
                           <div className="text-left">
                              <h4 style={{margin: '25px 0 0'}}>KOJE JEZIKE MOŽETE KOD NAS UČITI?</h4>
                                 <ul className="text-black">
                                    <li>njemački jezik</li>
                                    <li>engleski jezik</li>
                                    <li>talijanski jezik</li>
                                    <li>španjolski jezik</li>
                                 </ul>
                           </div>
                        </div>
                        <div className="col-md-6">
                           <img src={pricingIcon} alt="about"/>
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