/* React imports */
import React, { JSXElementConstructor, HTMLProps, ChangeEvent } from 'react'

import styles from './Input.module.scss'

/* Typing */
type Props = HTMLProps<HTMLInputElement> & HTMLProps<HTMLTextAreaElement> & {
	type: string
	label: string
	valid: boolean
	touched: boolean
}

const Input: JSXElementConstructor<Props> = ({
	className,
	label,
	type,
	valid,
	touched,
	...props
}) => {
	let style = ['db w-100 br2 pa3 ba b--silver']
	let input

	if (className)
		style.push(className)

	if (touched)
		if (valid)
			style.push('b--green')
		else
			style.push('b--red')

	switch (type) {
		case 'textarea':
			input = <textarea className={style.join(' ') + ' ' + styles.TextArea} {...props}></textarea>
			break
		default:
			input = <input className={style.join(' ')} type={type} {...props} />
	}

	return (
		<label className="db mb4">
			<p className="b mb3">{label}</p>
			{input}
		</label>
	)
}

export default Input
