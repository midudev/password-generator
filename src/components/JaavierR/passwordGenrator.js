function getUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26 + 65))
}

function getLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26 + 97))
}

function getNumber() {
	return Math.floor(Math.random() * 10)
}

export function generatePassword({ length, includeNumbers }) {
	let password = ''

	for (let i = 0; i < parseInt(length); i++) {
		const x = Math.random()

		if (x < 0.33) {
			password += getUpper()
		} else if (x >= 0.33 && x < 0.66) {
			password += getLower()
		} else if (x >= 0.66 && includeNumbers) {
			password += getNumber()
		}
	}

	return password
}
