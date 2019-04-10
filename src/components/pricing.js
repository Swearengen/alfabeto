import React from 'react'

import podukeIcon from '../assets/images/poduke.png';

class Pricing extends React.Component {
    render() {
        return (
            <div>

                <section id="pricing" className="theme-bg about">
                    <div className="container ">
                        <div className="row">
                        <div className="col-md-12">
                            <div className="section-title">
                                <h2 className="text-white">CIJENE</h2>
                            </div>
                            <div className="feature-image">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="text-left">
                                            <h3 className="text-white">CIJENA PRIJEVODA</h3>
                                            <ul className="text-white">
                                                <li>pisani prijevodi obračunavaju se prema normiranoj kartici teksta koja sadrži 1500 znakova s razmacima ili prema broju riječi</li>
                                                <li>vrijeme izrade prijevoda ovisi o količini teksta, otprilike dva do tri radna dana</li>
                                                <li>za hitne usluge prijevoda (isti dan ili sljedeći dan – ovisno o količini) obračunava se žurna tarifa, tj. dodaje se 25 % do 50 % na osnovnu cijenu</li>
                                                <li>za hitne prijevode vikendom obračunava se žurna tarifa, tj. dodaje se 100 % na osnovnu cijenu</li>
                                                <li>za stručni prijevod, tj. prijevod stručnih tekstova dodaje se 20 % na osnovnu cijenu</li>
                                                <li>za prijevod s jednog stranog jezika na drugi dodaje se 30 – 50 % na osnovnu cijenu</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-4 offset-md-1">
                                        <img src={podukeIcon} style={{marginTop: '60px'}} alt="pricing" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th scope="col">engleski, talijanski</th>
                                                    <th scope="col">slovenski, njemački</th>
                                                    <th scope="col">francuski, španjolski, poljski, češki</th>
                                                    <th scope="col">portugalski, švedski, nizozemski</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>kartica od 120,00 kn</td>
                                                    <td>kartica od 130,00 kn</td>
                                                    <td>kartica od 150,00 kn</td>
                                                    <td>kartica od 200,00 kn</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
                <section className="theme-bg about" style={{paddingTop: 0}}>
                    <div className="container">
                        <div className="feature-image">
                            <div className="feature-image">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="text-left">
                                            <h3 className="text-white">CIJENA PISANJA SADRŽAJA</h3>
                                            <ul className="text-white">
                                                <li>cijena opisa proizvoda, pisanja tekstova za web stranice ovisi o zahtjevnosti tematike sadržaja i kreće se između 120,00 i 250,00 kn</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="text-left">
                                            <h3 className="text-white">CIJENA TEČAJA STRANOG JEZIKA</h3>
                                            <ul className="text-white">
                                                <li>cijene tečaja stranog jezika ovise vrsti tečaja i odabranom jeziku</li>
                                                <li>cijene se računaju kao paket sati po tečaju (50 školskih sati) ili po školskom satu</li>
                                                <li>cijena po školskom satu iznosi između 100,00 i 220,00 kn</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Opći tečaj stranog jezika</th>
                                                    <th scope="col">Poslovni tečaj stranog jezika</th>
                                                    <th scope="col">Individualni tečaj stranog jezika</th>
                                                    <th scope="col">Online tečaj stranog jezika</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>2.500,00 kn (50 školskih sati)</td>
                                                    <td>cijena po školskom satu</td>
                                                    <td>cijena po školskom satu</td>
                                                    <td>1.800,00 kn (50 školskih sati)</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Pricing