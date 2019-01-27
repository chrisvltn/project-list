/* React imports */
import React, { JSXElementConstructor, HTMLProps } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { connect, MapDispatchToPropsFunction } from 'react-redux';

/* Components */
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';

/* Services */
import { remove } from '../../store/actions';
import * as service from '../../services/ProjectService'

/* Typing */
import { Project } from '../../entities/Project';
type DispatchProps = { remove: () => void }
type Props = Project & RouteComponentProps & DispatchProps & {
	onClick?: HTMLProps<HTMLElement>['onClick']
}

const ProjectItem: JSXElementConstructor<Props> = ({
	id,
	title,
	description,
	onClick,
	remove,
	history,
}) =>
	<div className="mb3" onClick={onClick}>
		<Card>
			<p className="mb2 f5 b">{title}</p>
			<p className="f6">{description}</p>

			<div className="flex">
				<div className="w-25 mr2">
					<Button clear small btnType="success" onClick={() => history.push('/project/edit?id=' + id)}>EDIT</Button>
				</div>
				<div className="w-25 mr2">
					<Button clear small btnType="danger" onClick={remove}>REMOVE</Button>
				</div>
			</div>
		</Card>
	</div>


const mapDispatchToProps: MapDispatchToPropsFunction<DispatchProps, Project> = (dispatch, props) => ({
	remove: () => {
		service.remove(props.id)
		dispatch(remove(props.id))
	}
})

export default withRouter(connect(null, mapDispatchToProps)(ProjectItem))
