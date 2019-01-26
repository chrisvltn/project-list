import React, { JSXElementConstructor } from 'react'
import ProjectItem from '../../../components/ProjectItem/ProjectItem';
import { connect } from 'react-redux';
import { Project } from '../../../entities/Project';

type Props = { projects: Project[] }

const ProjectList: JSXElementConstructor<Props> = ({
	projects,
}) =>
	<div>
		{projects.map(project =>
			<ProjectItem key={project.id} {...project} />
		)}
	</div>

const mapStateToProps = (state: { projects: Project[] }) => ({
	projects: state.projects,
})

export default connect(mapStateToProps)(ProjectList)
