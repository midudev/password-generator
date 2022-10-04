function randomChar() {
	const index = Math.floor(Math.random() * 62)
	if (index < 10) {
		return String(index)
	} else if (index < 36) {
		return String.fromCharCode(index + 55)
	} else {
		return String.fromCharCode(index + 61)
	}
}

export function randomString(length, string = '') {
	if (length === 0) return string
	return randomString(length - 1, string.concat(randomChar()))
}
