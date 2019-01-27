import { Validator, Validation } from "./Validators";

export const FormControl = {
	create,
	validate,
	toProps,
}

function create(name: string, label: string, validators: Validator[] = [], inputType: string = 'text'): Control {
	return {
		value: '',
		valid: !FormControl.validate('', validators).length,
		touched: false,
		validators,
		props: {
			name,
			label,
			type: inputType,
			disabled: false,
		}
	}
}

function validate(value: string, validators: Validator[]): Validation[] {
	const errors = validators.map(validate => validate(value)).filter(validation => validation)
	return errors
}

function toProps(control: Control) {
	return {
		value: control.value,
		valid: control.valid,
		touched: control.touched,
		type: control.props.type,
		disabled: control.props.disabled,
		name: control.props.name,
		label: control.props.label,
	}
}

export type Control = {
	value: string
	valid: boolean
	touched: boolean
	validators: Validator[]
	props: {
		name: string
		label: string
		type: string
		disabled: boolean
	}
}
