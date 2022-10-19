export function getPass({ lengthPass, numbers, lowercase, uppercase, symbols }) {
	const symbolsString = '!"#$%&\'()*+,-./:;<=>?@[]^_{|}~'
	const uppercaseString = 'ABCDEFGHJKMNPQRTUVWXYZ'
	const lowercaseString = 'abcdefghijkmnpqrtuvwxyz'
	const numbersString = '0123456789'
	let result = ''
	for (let i = 0; i < lengthPass; i++) {
		if (lowercase) {
			result += lowercaseString.charAt(Math.floor(Math.random() * lowercaseString.length))
		}
		if (numbers) {
			result += numbersString.charAt(Math.floor(Math.random() * numbersString.length))
		}
		if (uppercase) {
			result += uppercaseString.charAt(Math.floor(Math.random() * uppercaseString.length))
		}
		if (symbols) {
			result += symbolsString.charAt(Math.floor(Math.random() * symbolsString.length))
		}
	}

	return result.slice(0, lengthPass)
}
