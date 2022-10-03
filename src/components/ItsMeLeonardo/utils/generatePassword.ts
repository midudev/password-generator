type Params = {
	length: number
	includeUppercase: boolean
	includeNumbers: boolean
	includeSymbols: boolean
}

export function generatePassword({
	includeNumbers,
	includeSymbols,
	length,
	includeUppercase
}: Params) {
	const lowercase = 'abcdefghijklmnopqrstuvwxyz'
	const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
	const numbers = '0123456789'
	const symbols = '!@#$%^&*_-+=~'

	const chars =
		lowercase +
		(includeUppercase ? uppercase : '') +
		(includeNumbers ? numbers : '') +
		(includeSymbols ? symbols : '')

	let password = ''
	for (let i = 0; i < length; i++) {
		password += chars.charAt(Math.floor(Math.random() * chars.length))
	}

	return password
}
