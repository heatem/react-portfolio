import React from 'react';
import ReactDOM from 'react-dom';
import firebase from './firebase.js';
import './index.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			currentProject: '',
			title: '',
			description: '',
			thumb: '',
			appstore: '',
			projects: []
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
    	this.setState({
      		[e.target.name]: e.target.value
    	});
    }

  	handleSubmit(e) {
    	e.preventDefault();
    	const projectsRef = firebase.database().ref('projects');
    	const project = {
      		title: this.state.title,
      		description: this.state.description,
      		thumb: this.state.thumb,
      		appstore: this.state.appstore
    	}
    	projectsRef.push(project);
    	this.setState({
      		title: '',
      		description: '',
      		thumb: '',
      		appstore: ''
    	});
  	}

	componentDidMount() {
		const projectsRef = firebase.database().ref('projects');
		projectsRef.on('value', (snapshot) => {
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
	        	<div>
	          		<section>
	              		<form onSubmit={this.handleSubmit}>
		                	<input type='text' name='title' placeholder="What's the project called?" onChange={this.handleChange} value={this.state.title} />
		                	<input type='text' name='description' placeholder='Enter a description' onChange={this.handleChange} value={this.state.description} />
		                	<input type='text' name='thumb' placeholder='Link to an image?' onChange={this.handleChange} value={this.state.thumb} />
		                	<input type='text' name='appstore' placeholder='Link to project on appstore?' onChange={this.handleChange} value={this.state.appstore} />
		                	<button>Add Item</button>
	              		</form>
	          		</section>
	          	</div>
	      	</div>
    	);
  	}
}

// ============

ReactDOM.render(<App />, document.getElementById('root'));