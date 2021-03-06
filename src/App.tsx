/* React imports */
import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter, RouteComponentProps } from 'react-router-dom';
import { connect, MapDispatchToPropsFunction } from 'react-redux';

/* Components */
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import ProjectForm from './routes/ProjectListing/Form/ProjectForm';
import ProjectList from './routes/ProjectListing/List/ProjectList';
import Footer from './components/Footer/Footer';

/* Services */
import { add } from './store/actions';
import { list } from './services/ProjectService';

/* Typing */
import { Project } from './entities/Project';
type MappedProps = { add: (project: Project[]) => void }
type Props = RouteComponentProps & MappedProps

export class App extends Component<Props> {
	constructor(props: Props) {
		super(props)
		const projects = list()
		props.add(projects)
	}

	render() {
		return (
			<div className="flex flex-column justify-between min-vh-100">
				<Header>
					<Navigation />
				</Header>

				<main className="flex-auto self-center pt1 pb4 ph3 mw6 w-100">
					<Switch>
						<Route path="/project/create" exact component={ProjectForm} />
						<Route path="/project/edit" component={ProjectForm} />
						<Route path="/project/" component={ProjectList} />
						<Redirect path="/" to="/project" />
					</Switch>
				</main>

				<Footer />
			</div>
		);
	}
}

const mapDispatchToProps: MapDispatchToPropsFunction<MappedProps, {}> = dispatch => ({
	add: projects => projects.forEach(project => dispatch(add(project)))
})

export default withRouter(connect(null, mapDispatchToProps)(App))
