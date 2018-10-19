import React from 'react';
import ReactDOM from 'react-dom';
import firebase from './firebase.js';
import './index.css';

// Header
class Heather extends React.Component {
	render() {
		return (
			<div>
				<h1>Heather Mason</h1>
				<h2>iOS Developer</h2>
			</div>
		)
	}
}

// Social links: LinkedIn, GitHub, and Medium
class Socials extends React.Component {
	render() {
		return (
			<div>
				<ul class='icons'>
					<li class='icon' id='linkedIn'><a href="https://www.linkedin.com/in/heatherem/"><i class='fab fa-linkedin-in'></i></a></li>
					<li class='icon' id='gitHub'><a href="https://github.com/heatem"><i class='fab fa-github'></i></a></li>
					<li class='icon' id='medium'><a href="https://medium.com/@heatem_81309"><i class='fab fa-medium-m'></i></a></li>
				</ul>
			</div>
		)
	}
}

// Cards
// should have a title, text, room for an icon/image, and optional app store link
class Card extends React.Component {
	render() {
		return (
			<div>
				<div class="cardTitle">
					<h2>Say Happy Birthday In...</h2>
				</div>
				<p>This simple app displays the current temperature based on your location, the current time, and the current date. Users can enter a focus or goal and check the box when it's met to clear it out and enter another. Focus on ThisDay!</p>
				<img class="thumb" src="http://heatem.me/thisDay/img/ThisDay_1024.png"></img>
				<img class="appStore" src="http://heatem.me/thisDay/img/Download_on_the_App_Store_Badge_US-UK_135x40.svg"></img>
			</div>
		)
	}
}

// TODO: last card should be a contact card

// TODO: Add cards to Cards section
class Cards extends React.Component {
	render() {
		return (
			<div>
				<div class="card">
					<Card />
				</div>
				<div class="card">
					<Card />
				</div>
				<div class="card">
					<Card />
				</div>
			</div>
		)
	}
}

// Contact Button
// TODO: Create a contact button that appears when the contact card is not visible

// Resume
// TODO: Add resume
class Resume extends React.Component {
	render() {
		return (
			<div>
				<ul>
					<li id="resume"><a href="www.heatem.me">RESUME</a></li>
				</ul>
			</div>
		)
	}
}

// Footer
class Footer extends React.Component {
	render() {
		return (
			<div>
				<p>
				I am an iOS app developer with a background in quality assurance, currently programming in Swift. I value opportunities to grow and refine my skills as a mobile engineer while contributing to my local and global community.
				</p>
			</div>
		)
	}
}

// Site class
class Site extends React.Component {
	render() {
		return (
			<div className='site'>
				<div id='header'>
					<Heather />
				</div>
				<div id='socials'>
					<Socials />
				</div>
				<div id="cards">
					<Cards />
				</div>
				<div>
					<Resume />
				</div>
				<div id="footer">
					<Footer />
				</div>
			</div>
		)
	}
}

// ======

ReactDOM.render(<Site />, document.getElementById('root'));
