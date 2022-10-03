const NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const ALPHABET = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z'
]

const SPEC_CHARS = [
	'!',
	'@',
	'#',
	'$',
	'%',
	'^',
	'&',
	'*',
	'(',
	')',
	'_',
	'+',
	'=',
	'/',
	'?',
	'.',
	',',
	'<',
	'>'
]

export const LEVEL_NAMES = [
	'Saiyan',
	'Super Saiyan',
	'Super Saiyan 2',
	'Super Saiyan God',
	'Super Saiyan Blue',
	'Ultra Instinct'
]

export const generatePassword = (level = 0) => {
	const size = level * 2 + 4
	let password = new Array(size).fill('0')
	// LEVEL 0 -> Size: 4, only numbers
	if (level <= 0) {
		password = shuffle([
			randomPick(ALPHABET),
			randomPick(ALPHABET).toLowerCase(),
			randomPick(SPEC_CHARS),
			randomPick(NUMBERS)
		])
	}
	// LEVEL 1 -> Size: 6, 3 alphas + 1 ALPHA + 2 numbers
	if (level === 1) {
		password = shuffle(
			password.map((el, idx) => {
				if (idx < 3) return randomPick(ALPHABET).toLowerCase()
				if (idx === 4) return randomPick(ALPHABET)
				else return randomPick(NUMBERS)
			})
		)
	}
	// LEVEL 2 -> Size: 8, 3 alphas + 1 ALPHA + 2 numbers + 2 spec
	if (level === 2) {
		password = shuffle(
			password.map((el, idx) => {
				if (idx < 3) return randomPick(ALPHABET).toLowerCase()
				if (idx === 4) return randomPick(ALPHABET)
				if (idx > 4 && idx < 7) return randomPick(NUMBERS)
				else return randomPick(SPEC_CHARS)
			})
		)
	}
	// LEVEL 3 -> Size: 10, 4 alphas + 2 numbers + 2 spec + 2 ALPHAS
	if (level === 3) {
		password = shuffle(
			password.map((el, idx) => {
				if (idx < 4) return randomPick(ALPHABET).toLowerCase()
				if (idx > 4 && idx < 6) return randomPick(NUMBERS)
				if (idx > 6 && idx < 8) return randomPick(ALPHABET)
				else return randomPick(SPEC_CHARS)
			})
		)
	}
	// LEVEL 4 -> Size: 12, 4 alphas + 4 numbers + 2 spec + 2 ALPHAS
	if (level === 4) {
		password = shuffle(
			password.map((el, idx) => {
				if (idx <= 3) return randomPick(ALPHABET).toLowerCase()
				if (idx > 3 && idx < 8) return randomPick(NUMBERS)
				if (idx >= 8 && idx <= 9) return randomPick(SPEC_CHARS)
				else return randomPick(ALPHABET)
			})
		)
	}
	// LEVEL 5 -> Size: 14, 4 alphas + 4 numbers + 4 spec + 2 ALPHAS
	if (level >= 5) {
		password = shuffle(
			password.map((el, idx) => {
				if (idx <= 3) return randomPick(ALPHABET).toLowerCase()
				if (idx > 3 && idx < 8) return randomPick(NUMBERS)
				if (idx >= 8 && idx <= 11) return randomPick(SPEC_CHARS)
				else return randomPick(ALPHABET)
			})
		)
	}
	return password.join('')
}

const randomPick = (array) => {
	const randomPos = Math.floor(Math.random() * array.length)
	return array[randomPos]
}

const shuffle = (array) => {
	const auxArr = [...array]
	let currentIndex = auxArr.length
	let randomIndex

	while (currentIndex !== 0) {
		randomIndex = Math.floor(Math.random() * currentIndex)
		currentIndex--
		;[auxArr[currentIndex], auxArr[randomIndex]] = [auxArr[randomIndex], auxArr[currentIndex]]
	}

	return auxArr
}
