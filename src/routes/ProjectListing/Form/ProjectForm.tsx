/* React imports */
import React, { Component, ChangeEvent } from 'react'
import { connect, MapDispatchToPropsFunction } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router';

/* Components */
import Card from '../../../components/UI/Card/Card';
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';

/* Services */
import { Project } from '../../../entities/Project';
import { add, edit } from '../../../store/actions';
import { save, list } from '../../../services/ProjectService';

/* Helpers */
import { FormControl, Control } from '../../../helpers/FormControl';
import * as V from '../../../helpers/Validators'

/* Typing */
type MappedProps = { save: (project: Project) => void }
type Props = RouteComponentProps & MappedProps
type State = {
	isFormValid: boolean
	project: Project | null
	isEdit: boolean
	formControls: Control[]
}

export class ProjectForm extends Component<Props, State> {
	state = {
		isFormValid: false,
		project: null,
		isEdit: false,
		formControls: [
			FormControl.create('title', 'Project Name', [V.required]),
			FormControl.create('description', 'Project Description', [V.required], 'textarea'),
		]
	}

	componentWillMount() {
		if (!this.props.location.search) return

		const query = new URLSearchParams(this.props.location.search)
		const id = parseInt(query.get('id') || '')
		const project = list().find(project => project.id === id)

		if (project)
			this.setState({
				project,
				isFormValid: true,
				isEdit: true,
				formControls: [
					{
						...this.state.formControls[0],
						value: project.title,
						touched: true,
						valid: !FormControl.validate(project.title, this.state.formControls[0].validators).length,
					},
					{
						...this.state.formControls[1],
						value: project.description,
						touched: true,
						valid: !FormControl.validate(project.description, this.state.formControls[1].validators).length,
					},
				]
			})

		const unsubscribe = this.props.history.listen(() => {
			this.setState({ project: Project.parse() })
			unsubscribe()
		})
	}

	handleInputChange = (event: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
		const control = this.state.formControls.find(control => control.props.name == event.target.name) as Control
		const index = this.state.formControls.indexOf(control)
		const controls = [...this.state.formControls]
		controls[index] = {
			...control,
			value: event.target.value,
			touched: true,
			valid: !FormControl.validate(event.target.value, control.validators).length,
		}

		const isFormValid = !controls.some(control => !control.valid)

		this.setState({
			isFormValid,
			formControls: controls,
		})
	}

	handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
		event.preventDefault()

		this.props.save(Project.parse({
			...(this.state.project || {}),
			title: this.state.formControls[0].value,
			description: this.state.formControls[1].value,
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
					{this.state.formControls.map(control =>
						<Input key={control.props.name} {...FormControl.toProps(control)} onChange={this.handleInputChange} />
					)}

					<Button type="submit" btnType="success" disabled={!this.state.isFormValid}>
						{this.state.isEdit ? 'Edit' : 'Create'}
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
