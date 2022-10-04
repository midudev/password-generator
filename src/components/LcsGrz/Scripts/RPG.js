const CHARS =
	'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789¡!¿?/|@#$%^&*()-_=+{};:[],.~'

function shufflString(string) {
	const stringArray = string.split('')

	for (let i = stringArray.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		;[stringArray[i], stringArray[j]] = [stringArray[j], stringArray[i]]
	}

	return stringArray.join('')
}

export default function randomPasswordGenerator(settings) {
	const randomChars = shufflString(CHARS)
	const charsLength = randomChars.length
	let randomPassword = ''

	for (let i = 0; i < settings.length; i++) {
		randomPassword += randomChars[Math.floor(Math.random() * charsLength)]
	}

	return randomPassword
}
