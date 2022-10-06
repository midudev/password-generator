const defaultLetters = 'abcdefghijklmnopqrstuvwxyz'
const numbers = '0123456789'
const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-='

const passwordGenerator = (passwordLength, options) => {
	const charactersList = [
		defaultLetters,
		...(options.uppercase ? defaultLetters.toUpperCase() : []),
		...(options.numbers ? numbers : []),
		...(options.symbols ? symbols : [])
	].join('')

	return Array.from({ length: passwordLength }, () =>
		Math.floor(Math.random() * charactersList.length)
	)
		.map((number) => charactersList[number])
		.join('')
}

export default passwordGenerator
