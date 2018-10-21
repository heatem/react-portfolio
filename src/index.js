import React from "react";
import ReactDOM from "react-dom";
import firebase from "./firebase.js";
import "./index.css";

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
				<ul className="icons">
					<li className="icon" id="linkedIn"><a href="https://www.linkedin.com/in/heatherem/"><i class="fab fa-linkedin-in"></i></a></li>
					<li className="icon" id="gitHub"><a href="https://github.com/heatem"><i class="fab fa-github"></i></a></li>
					<li className="icon" id="medium"><a href="https://medium.com/@heatem_81309"><i class="fab fa-medium-m"></i></a></li>
				</ul>
			</div>
		)
	}
}

class Blurb extends React.Component {
	render() {
		return (
			<div className="blurb">
				<p>
					I am an iOS app developer with a background in quality assurance, currently programming in Swift. I value opportunities to grow and refine my skills as a mobile engineer while contributing to my local and global community. Check out my <a id="resume" href="#">resume</a>.
				</p>
			</div>
		)
	}
}

// Cards
// should have a title, text, room for an icon/image, and optional app store link
class Card extends React.Component {
	constructor() {
		super();
		this.state = {
			currentProject: "",
			title: "",
			description: "",
			thumb: "",
			appstore: "",
			projects: []
		}
	}

	componentDidMount() {
		const projectsRef = firebase.database().ref("projects");
		projectsRef.on("value", (snapshot) => {
			let projects = snapshot.val();
			let newState = [];
			for (let project in projects) {
				newState.push({
					id: project,
					title: projects[project].title,
					description: projects[project].description,
					thumb: projects[project].thumb,
					appstore: projects[project].appstore

				});
			}
			this.setState({
				projects: newState
			});
		});
	}

	render() {
		return (
			<div>
				{this.state.projects.map((project) => {
					return (
						<div className="card">
							<li key={project.id}>
								<div className="cardTitle">
									<h2>{project.title}</h2>
								</div>
								<p>{project.description}</p>
								<img className="thumb" src={project.thumb}></img>
								<img className="app-store" src={project.appstore}></img>
							</li>
						</div>
					);
				})}
			</div>
		);
	}
}

// TODO: last card should be a contact card

// TODO: Add cards to Cards section
class Cards extends React.Component {
	render() {
		return (
			<div className="cards">
				<ul>
					<Card />
				</ul>
			</div>
		);
	}
}

// Contact Button
// TODO: Create a contact button that appears when the contact card is not visible

// Resume
// TODO: Add resume

class Footer extends React.Component {
	render() {
		return (
			<div className="footer">
			</div>
		)
	}
}

// Site class
class Site extends React.Component {
	render() {
		return (
			<div className="site">
				<div id="header">
					<Heather />
				</div>
				<div id="socials">
					<Socials />
				</div>
				<div>
					<Blurb />
				</div>
				<div id="cards">
					<Cards />
				</div>
				<div>
					<Footer />
				</div>
			</div>
		)
	}
}

// ======

ReactDOM.render(<Site />, document.getElementById("root"));
	