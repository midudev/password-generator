function getUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26 + 65))
}

function getLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26 + 97))
}

function getNumber() {
	return Math.floor(Math.random() * 10)
}

function getSymbol() {
	const symbols = [33, 42, 45, 46, 64, 95]
	return String.fromCharCode(symbols[Math.floor(Math.random() * symbols.length)])
}

export function generatePassword({ length, includeNumbers, includeSymbols }) {
	let password = ''

	for (let i = 0; i < parseInt(length); i++) {
		const x = Math.random()

		if (includeNumbers) {
			if (x < 0.33) {
				password += getUpper()
			} else if (x >= 0.33 && x < 0.66) {
				password += getLower()
			} else if (x >= 0.66) {
				password += getNumber()
			}
		} else if (includeSymbols) {
			if (x < 0.33) {
				password += getUpper()
			} else if (x >= 0.33 && x < 0.66) {
				password += getLower()
			} else if (x >= 0.66) {
				password += getSymbol()
			}
		} else {
			if (x < 0.5) {
				password += getUpper()
			} else {
				password += getLower()
			}
		}
	}

	return password
}
