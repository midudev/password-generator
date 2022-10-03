export const generatePassword = ({ length = 8, options = ['letters', 'letters-uppercase', 'numbers', 'symbols'] }) => {
	const characters = {
		letters: 'abcdefghijklmnopqrstuvwxyz',
		'letters-uppercase': 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
		numbers: '0123456789',
		symbols: '!@#$%^&*()_+~`|}{[]:;?><,./-='
	}

	let optionsString = ''

	options.forEach(option => {
		optionsString += characters[option] ?? ''
	})

	let password = ''
	const minStrLength = 0
	const maxStrLength = optionsString.length
	let index = 0

	while (index < length) {
		const randomIndex = Math.floor(Math.random() * (maxStrLength - minStrLength + 1)) + minStrLength
		password += optionsString[randomIndex]
		index++
	}

	return password
}
