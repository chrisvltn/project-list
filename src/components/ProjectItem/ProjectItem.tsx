import React, { JSXElementConstructor } from 'react'
import Card from '../UI/Card/Card';

const ProjectItem: JSXElementConstructor<Props> = ({
	name,
	description,
}) =>
	<div className="mb3">
		<Card>
			<p className="mb2 f5 b">{name}</p>
			<p className="f6">{description}</p>
		</Card>
	</div>

type Props = {
	name: string
	description: string
}

export default ProjectItem
