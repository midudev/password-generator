const passwordOptions = () => {
	const letters = 'abcdefghijklmnopqrstuvwxyz'
	const symbols = '?#$@-_.+&%!*<>'
	const numbers = '0123456789'
	const combining = [...letters, ...letters.toUpperCase(), ...symbols, ...numbers]
	return combining
}

export const generatePassword = (length) => {
	const options = passwordOptions()
	const random = []
	for (let i = 0; i < length; i++) {
		random.push(options[Math.floor(Math.random() * options.length)])
	}

	return random.join('')
}
