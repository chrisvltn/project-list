/* React imports */
import React, { HTMLProps, JSXElementConstructor } from 'react'

/* Typing */
type Props = HTMLProps<HTMLButtonElement> & {
	btnType: 'success' | 'danger'
	small?: boolean
	clear?: boolean
}

const Button: JSXElementConstructor<Props> = ({
	btnType,
	small,
	clear,
	children,
	className,
	...props
}) => {
	const buttonClass = ['db w-100 ttu bn b tc pointer dim']

	if (className)
		buttonClass.push(className)

	buttonClass.push(small ? 'ph1 pv2 f6' : 'ph2 pv3 f5')

	switch (btnType) {
		case 'success':
			buttonClass.push(clear ? 'bg-transparent green' : 'bg-green white')
			break
		case 'danger':
			buttonClass.push(clear ? 'bg-transparent red' : 'bg-red white')
			break
	}

	return (
		<button className={buttonClass.join(' ')} {...props}>
			{children}
		</button>
	)
}

export default Button
