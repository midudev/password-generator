const chars =
	'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_+=/<>.,{[]}~'

const generateRandomPassword = (lenght) => {
	let password = ''
	for (let i = 0; i < lenght; i++) {
		password += chars.charAt(Math.random() * chars.length)
	}

	return password
}

export default generateRandomPassword
