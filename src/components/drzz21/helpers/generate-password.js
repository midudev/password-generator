const arrSymbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+']
const arrLetters = Array.from(Array(26))
	.map((e, i) => i + 65)
	.map((x) => String.fromCharCode(x))
const arrNumbers = Array.from(Array(10)).map((e, i) => i)

const objChars = {
	u: arrLetters,
	l: arrLetters.map((x) => x.toLowerCase()),
	s: arrSymbols,
	n: arrNumbers
}

const generatePassword = (config) => {
	let password = ''
	const pchars = []
	// console.log((config['uppercase'] ? 'true' : 'false'));

	if (config.upperCase) {
		password += getRandomChar('u')
		pchars.push('u')
	}
	if (config.lowerCase) {
		password += getRandomChar('l')
		pchars.push('l')
	}
	if (config.symbols) {
		password += getRandomChar('s')
		pchars.push('s')
	}
	if (config.numbers) {
		password += getRandomChar('n')
		pchars.push('n')
	}

	do {
		password += getRandomChar(pchars[Math.floor(Math.random() * pchars.length)])
	} while (password.length < +config.length)

	return password
}

function getRandomChar(c) {
	const char = objChars[c][Math.floor(Math.random() * objChars[c].length)]
	// console.log(char);
	return char
}

export default generatePassword
