import React, { Component } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import ProjectForm from './routes/ProjectListing/Create/ProjectForm';
import ProjectList from './routes/ProjectListing/List/ProjectList';

class App extends Component {
	render() {
		return (
			<div className="flex justify-center">
				<div className="pv4 ph3 mw6 w-100">
					<Link to="/project">List</Link>
					<Link to="/project/create">Create</Link>

					<Switch>
						<Route path="/project/create" exact component={ProjectForm} />
						<Route path="/project/" component={ProjectList} />
						<Redirect path="/" to="/project" />
					</Switch>
				</div>
			</div>
		);
	}
}

export default App;
