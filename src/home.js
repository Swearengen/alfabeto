import React from 'react';
import Feature from './components/feature';
import Contact from './components/contact';

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
								<a className="nav-link" href="#home" >Home</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#feature" >feature</a>
							</li>

							<li className="nav-item">
								<a className="nav-link" href="#contact">contact us</a>
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
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<div className="d-flex-1">
								<div className="slide-text">
									<div>
										<h1>The best way to connect with your friend is with
		  <br/><span className="main-title">ChatLoop!</span>
										</h1>
										<h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h4>
										<div className="slid-btn">
											<a href=""><img src="assets/images/app1.png" alt="app1" className="img-fluid" data-tilt data-tilt-perspective="50" data-tilt-speed="350" data-tilt-max="1.8"/></a>
											<a href=""><img src="assets/images/app2.png" alt="app2" className="img-fluid" data-tilt data-tilt-perspective="50" data-tilt-speed="350" data-tilt-max="1.8"/></a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="home-right">
								<div className="mobile-slid">
									<img src="assets/images/top-mobile.png" alt="top1" className="img-fluid"/>
								</div>
								<div className="profile-msg">
									<img src="assets/images/top2.png" alt="top2" className="img-fluid" />
								</div>
								<div className="awesome">
									<img src="assets/images/top3.png" alt="top3" className="img-fluid"/>
								</div>
								<div className="profile-1">
									<img src="assets/images/top4.png" alt="top4" className="img-fluid"/>
								</div>
								<div className="emoji">
									<img src="assets/images/top5.png" alt="top5" className="img-fluid"/>
								</div>
								<div className="profile-2">
									<img src="assets/images/top1.png" alt="top1" className="img-fluid"/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
  			{/* Home One Section End */}

			{/*Feature Component*/}
			<Feature />

			{/*Contact Component*/}
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