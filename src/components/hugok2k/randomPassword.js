export default function randomPassword(input) {
	let pass = ''
	const abcLower = 'abcdefghijklmnopqrstuvwxyz'
	const abcUpper = abcLower.toUpperCase()
	const passNum = '0123456789'
	const passSym = '@#$%'
	const total = abcLower + abcUpper + passNum + passSym

	for (let i = 1; i <= input; i++) {
		const char = Math.floor(Math.random() * total.length + 1)
		pass += total.charAt(char)
	}
	return pass
}
