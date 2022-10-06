function getRandomPassword(charactersAvaliable, length) {
	let randomPassword = ''
	for (let i = 0; i < length; i++) {
		randomPassword += charactersAvaliable.charAt(
			Math.floor(Math.random() * charactersAvaliable.length)
		)
	}
	return randomPassword
}

function copyPassword(password) {
	let success = false
	navigator.clipboard.writeText(password).then(() => {
		success = true
	})
	return success
}

export default { getRandomPassword, copyPassword }
