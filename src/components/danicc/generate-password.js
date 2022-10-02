const defaultCharactersOpts = {
	includeUppercaseLetters: false,
	includeLowercaseLetters: false,
	includeNumbers: false
}

const defaultLength = 6

function getCharacters({
	includeUppercaseLetters,
	includeLowercaseLetters,
	includeNumbers
} = defaultCharactersOpts) {
	const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
	const numbers = '0123456789'
	let randomCharacters = []
	if (includeUppercaseLetters) {
		randomCharacters = [...upperCaseLetters]
	}
	if (includeLowercaseLetters) {
		const lowerCaseLetters = upperCaseLetters.toLocaleLowerCase()
		randomCharacters = [...randomCharacters, ...lowerCaseLetters]
	}
	if (includeNumbers) {
		randomCharacters = [...randomCharacters, ...numbers]
	}
	return randomCharacters
}

function getRandomCharacterFrom(characters) {
	if (characters.length === 0) {
		return ''
	}

	const max = characters.length - 1
	const randomCharacterIdx = Math.floor(Math.random() * max)
	return characters[randomCharacterIdx]
}

function getRandomCharactersFrom(characters = [], length = defaultLength) {
	let randomPassword = ''
	for (let i = 0; i < length; i++) {
		const newchar = getRandomCharacterFrom(characters)
		randomPassword = randomPassword + newchar
	}
	return randomPassword
}

function generatePassword(charactersOpts = defaultCharactersOpts, length = defaultLength) {
	const characters = getCharacters(charactersOpts)
	return getRandomCharactersFrom(characters, length)
}

export default generatePassword
