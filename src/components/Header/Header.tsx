import React, { JSXElementConstructor, Props } from 'react'

const Header: JSXElementConstructor<Props<any>> = ({
	children,
}) =>
	<header>
		<h1 className="f1 lh-title tc">Project List</h1>
		{children}
	</header>

export default Header
