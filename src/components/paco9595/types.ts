export interface SliderType {
	min: number
	max: number
	value: number
	changeHandler: (value: number) => void
}

export interface PasswordType {
	passwordLength: number
}
