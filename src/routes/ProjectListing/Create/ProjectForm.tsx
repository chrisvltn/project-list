import React, { Component, ChangeEvent } from 'react'
import Card from '../../../components/UI/Card/Card';
import Input from '../../../components/UI/Input/Input';

class ProjectForm extends Component {
	state = {
		project: {
			name: '',
			description: '',
		}
	}

	handleInputChange = (event: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
		this.setState({
			project: {
				...this.state.project,
				[event.target.name]: event.target.value.trim(),
			}
		})
	}

	handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
		event.preventDefault()
		this.setState({
			project: {
				name: '',
				description: '',
			}
		})
	}

	render() {
		return (
			<Card>
				<form onSubmit={this.handleSubmit}>
					<Input name="name" label="Project Name" type="text" onChange={this.handleInputChange} value={this.state.project.name} />
					<Input name="description" label="Project Description" type="textarea" onChange={this.handleInputChange} value={this.state.project.description} />
					<button className="db w-100 bn b tc ph2 pv3 bg-green white pointer dim">CREATE</button>
				</form>
			</Card>
		)
	}
}

export default ProjectForm
