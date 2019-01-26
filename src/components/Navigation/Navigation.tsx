import React, { JSXElementConstructor } from 'react'
import { withRouter, RouteComponentProps, NavLink } from 'react-router-dom';

const linkClass = "dib f5 ph2 mh2 no-underline blue"

const Navigation: JSXElementConstructor<RouteComponentProps> = () =>
	<nav className="tc mb3">
		<NavLink className={linkClass} activeClassName='b' exact to="/project">
			List
		</NavLink>
		<NavLink className={linkClass} activeClassName='b' exact to="/project/create">
			Create
		</NavLink>
	</nav>

export default withRouter(Navigation)
