import React, { Component, ChangeEvent } from 'react'
import Card from '../../../components/UI/Card/Card';
import Input from '../../../components/UI/Input/Input';
import { Project } from '../../../entities/Project';
import { connect, MapDispatchToPropsFunction } from 'react-redux';
import { add, edit } from '../../../store/actions';
import { withRouter, RouteComponentProps } from 'react-router';
import { save, list } from '../../../services/ProjectService';
import Button from '../../../components/UI/Button/Button';

type MappedProps = { save: (project: Project) => void }
type Props = RouteComponentProps & MappedProps

class ProjectForm extends Component<Props> {
	state = {
		project: Project.parse()
		}
	}

	handleInputChange = (event: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
		this.setState({
			project: Project.parse({
				...this.state.project,
				[event.target.name]: event.target.value.trim(),
		})
		})
	}

	handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
		event.preventDefault()

		this.props.save(Project.parse({
			...this.state.project,
		}))
		this.props.history.push('/projects')

		this.setState({
			project: Project.parse()
		})
	}

	render() {
		return (
			<Card>
				<form onSubmit={this.handleSubmit}>
					<Input name="title" label="Project Name" type="text" onChange={this.handleInputChange} value={this.state.project.title} />
					<Input name="description" label="Project Description" type="textarea" onChange={this.handleInputChange} value={this.state.project.description} />
					<Button type="submit" btnType="success">
						CREATE
					</Button>
				</form>
			</Card>
		)
	}
}

const mapDispatchToProps: MapDispatchToPropsFunction<MappedProps, RouteComponentProps> = dispatch => ({
	save: project => {
		const { isNew } = save(project)
		if (isNew) dispatch(add(project))
		else dispatch(edit(project))
	}
})

export default withRouter(connect(null, mapDispatchToProps)(ProjectForm))
