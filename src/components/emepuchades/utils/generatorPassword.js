export default function generatorPassword(lengthPass, setPassword) {
	const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
	let password = ' '

	for (let i = 0; i < lengthPass; i++) {
		password += characters.charAt(Math.floor(Math.random() * characters.length))
	}
	setPassword(password)
}
