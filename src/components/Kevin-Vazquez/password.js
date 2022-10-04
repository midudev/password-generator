const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$/+-=[]{}/<>#&!'

function chooseCharacter(length) {
	let choosed = ''
	for (let i = 0; i < length; i++) {
		choosed += characters[Math.floor(Math.random() * length - 1)]
	}
	return choosed
}

export default chooseCharacter
