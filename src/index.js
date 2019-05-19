import React from "react";
import ReactDOM from "react-dom";
import firebase from "./firebase.js";
import "./index.css";
import appStoreIcon from "./assets/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg";
import resume from "./assets/HMasonResume100618.pdf";

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

class Socials extends React.Component {
	render() {
		return (
			<div>
				<ul className="icons">
					<li className="icon" id="linkedIn"><a href="https://www.linkedin.com/in/heatherem/" target="_blank" aria-label="LinkedIn icon"><i className="fab fa-linkedin-in"></i></a></li>
					<li className="icon" id="gitHub"><a href="https://github.com/heatem" target="_blank" aria-label="GitHub icon"><i className="fab fa-github"></i></a></li>
					<li className="icon" id="medium"><a href="https://medium.com/@heatem_81309" target="_blank" aria-label="Medium icon"><i className="fab fa-medium-m"></i></a></li>
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
					I am an iOS app developer with a background in quality assurance, currently programming in Swift. I value opportunities to grow and refine my skills as a mobile engineer while contributing to my local and global community. Check out my <a id="resume" href={resume} download target="_blank"  aria-label="resume download link">resume</a>.
				</p>
			</div>
		)
	}
}

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
						<div className="card" key={project.id}>
							<li>
								<div className="cardTitle">
									<h2>{project.title}</h2>
								</div>
								<p>{project.description}</p>
								<img className="thumb" src={project.thumb} alt=""></img>
								<a href={project.appstore} target="_blank"><img className="app-store" src={appStoreIcon} alt={"App Store link to " + project.title}></img></a>
							</li>
						</div>
					);
				})}
			</div>
		);
	}
}

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
	
