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

export function randomPassword({ length, includeNumbers, includeSymbols }) {
	let password = ''

	for (let i = 0; i < parseInt(length); i++) {
		const x = Math.random()

		if (includeNumbers && includeSymbols) {
			if (x < 0.3) {
				password += getUpper()
			} else if (x >= 0.3 && x < 0.6) {
				password += getLower()
			} else if (x >= 0.6 && x < 0.8) {
				password += getNumber()
			} else {
				password += getSymbol()
			}
		} else if (includeNumbers) {
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

	if (includeNumbers && includeSymbols) {
		if (!/\d/.test(password)) {
			password = password.replace(
				password[Math.floor(Math.random() * password.length)],
				getNumber()
			)
		}

		if (!/[!@*_\-/.]/.test(password)) {
			password = password.replace(
				password[Math.floor(Math.random() * password.length)],
				getSymbol()
			)
		}
	}

	return [...password]
}

export function smartPassword() {
	let password = ''
	let upper = false

	for (let i = 0; i < 5; i++) {
		const randUpper = Math.random()
		const rdm = Math.random()

		if (randUpper < 0.5 && !upper) {
			password += getUpper()
			password += getUpper()
			password += getUpper()
			upper = true
		} else {
			password += getLower()
			password += getLower()
			password += getLower()
		}

		if (i < 4) {
			if (rdm < 0.5) {
				password += getSymbol()
			} else {
				password += getNumber()
			}
		}
	}

	if (!upper) {
		const textPositon = [0, 4, 8, 12, 16]
		const randomPosition = textPositon[Math.floor(Math.random() * textPositon.length)]

		password = password.replace(password[randomPosition], getUpper())
		password = password.replace(password[randomPosition + 1], getUpper())
		password = password.replace(password[randomPosition + 2], getUpper())
	}

	const positions = [3, 6, 9, 12]
	const position = positions[Math.floor(Math.random() * positions.length)]

	if (!/\d/.test(password)) {
		password = password.replace(password[position], getNumber())
	}

	if (!/[!@*_\-/.]/.test(password)) {
		password = password.replace(password[position], getSymbol())
	}

	return [...password]
}

export function pinCode({ length }) {
	let password = ''

	for (let i = 0; i < parseInt(length); i++) {
		password += getNumber()
	}

	return [...password]
}
