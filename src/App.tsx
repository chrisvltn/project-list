import React, { Component } from 'react';
import { Switch, Route, Redirect, Link, withRouter, RouteComponentProps } from 'react-router-dom';
import ProjectForm from './routes/ProjectListing/Create/ProjectForm';
import ProjectList from './routes/ProjectListing/List/ProjectList';
import { connect, MapDispatchToPropsFunction } from 'react-redux';
import { Project } from './entities/Project';
import { add } from './store/actions';
import { list } from './services/ProjectService';
import Navigation from './components/Navigation/Navigation';

type MappedProps = { add: (project: Project[]) => void }
type Props = RouteComponentProps & MappedProps

class App extends Component<Props> {
	constructor(props: Props) {
		super(props)
		const projects = list()
		props.add(projects)
	}

	render() {
		return (
			<div className="flex justify-center">
				<div className="pt1 pb4 ph3 mw6 w-100">
					<h1 className="f1 lh-title tc">Project List</h1>
					<Navigation />

					<Switch>
						<Route path="/project/create" exact component={ProjectForm} />
						<Route path="/project/edit" component={ProjectForm} />
						<Route path="/project/" component={ProjectList} />
						<Redirect path="/" to="/project" />
					</Switch>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps: MapDispatchToPropsFunction<MappedProps, {}> = dispatch => ({
	add: projects => projects.forEach(project => dispatch(add(project)))
})

export default withRouter(connect(null, mapDispatchToProps)(App))
