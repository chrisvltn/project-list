import React, { JSXElementConstructor, Props } from 'react'

const Card: JSXElementConstructor<Props<any>> = ({
	children,
}) =>
	<div className="pa3 br2 shadow-4">
		{children}
	</div>

export default Card
