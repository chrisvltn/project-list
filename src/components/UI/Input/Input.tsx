import React, { JSXElementConstructor, HTMLProps } from 'react'

import styles from './Input.module.scss'

const Input: JSXElementConstructor<Props> = ({
	className = '',
	label,
	type,
	...props
}) => {
	const inputStyle = 'db w-100 br2 pa3 ba b--silver ' + className
	let input

	switch (type) {
		case 'textarea':
			input = <textarea className={inputStyle + ' ' + styles.TextArea} {...props}></textarea>
			break
		default:
			input = <input className={inputStyle} type={type} {...props} />
	}

	return (
		<label className="db mb4">
			<p className="b mb3">{label}</p>
			{input}
		</label>
	)
}

type Props = HTMLProps<HTMLInputElement> & HTMLProps<HTMLTextAreaElement> & {
	type: string
	label: string
}

export default Input
