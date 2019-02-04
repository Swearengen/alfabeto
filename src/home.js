import React from 'react';
import Feature from './components/feature';
import Contact from './components/contact';
import About from './components/about';

class Home extends React.Component {
  render() {
  	document.body.classList.remove('inner-page');
  	return (
  		<div>
  			{/* Navbar Section*/}
  			<nav className="navbar navbar-expand-lg  theme-nav fixed-top">
				<div className="container">
					<a className="navbar-brand" href={`${process.env.PUBLIC_URL}/`}><img src="assets/images/logo.png" alt="logo" /></a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainmenu"  aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"><i className="fa fa-align-justify" aria-hidden="true"></i></span>
					</button>
					<div className="collapse navbar-collapse" id="mainmenu">
						<ul className="navbar-nav ml-auto" id="mymenu">
							<li className="nav-item ">
								<a className="nav-link" href="#home" >Početna</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#feature">Usluge</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#about">O Nama</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#contact">Kontakt</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>

  			{/* Home One Section Start */}
			<section className="slide-bg" id="home">
				<div className="animation-circle">
					<i></i>
					<i></i>
					<i></i>
				</div>

				<div className="intro-image">
					<div className="container">
						<div className="row">
							<div className="col-md-10">
								<h1>Alfabeto</h1>
								<h3>Svijet na dlanu</h3>
							</div>
						</div>
					</div>
				</div>
			</section>
  			{/* Home One Section End */}

			<Feature />
			<About />
			<Contact />

			{/*tap-top*/}
			<div className="tap-top">
				<div>
					<i className="fa fa-angle-up" aria-hidden="true"></i>
				</div>
			</div>
  		</div>
  	);
  }
}

export default Home;