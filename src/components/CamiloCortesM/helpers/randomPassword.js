const Characters =
	'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789~@#_^*%/."&+,[]<=>?!'

export const randomPassword = (range = 0) => {
	let password = ''
	for (let index = 0; index < range; index++) {
		password += Characters[Math.floor(Math.random() * (Characters.length - 1 - 0) + 0)]
	}
	return password
}
