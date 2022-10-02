import { randomRange } from './util'
import { words } from './words'

// a funtion that returns a random word with a specific length
const randomWord = (characterLenght) => {
	const filteredWords = words.filter((word) => word.length === characterLenght)
	const randomIndex = Math.floor(Math.random() * filteredWords.length)
	return filteredWords[randomIndex]
}

// function that returns a list of random words to fill the length of the password
export const randomWords = (lenght) => {
	let words = ''
	while (words.length < lenght) {
		const difference = lenght - words.length
		const randomWordLenght = randomRange(2, difference)

		if (randomWordLenght < 2) {
			words += '!'
		} else {
			words += randomWord(randomWordLenght) + '-'
		}
	}

	return words.replace(/\s/, '-').slice(0, lenght)
}

const dictLetterToNumber = {
	a: 4,
	b: 8,
	e: 3,
	i: 1,
	g: 6,
	o: 0,
	s: 5,
	t: 7,
	z: 2
}

const dictLetterToSpecial = {
	a: '@',
	c: '(',
	e: '€',
	f: 'ƒ',
	i: '¡',
	j: '¿',
	l: '£',
	o: '0',
	s: '$',
	u: 'µ',
	v: '√',
	w: 'ω',
	y: '¥'
}

const changeaLetterStrategy = {
	0: (char) => {
		return char.toUpperCase()
	},
	1: (char) => {
		return dictLetterToNumber[char] || char
	},
	2: (char) => {
		return dictLetterToSpecial[char] || char
	}
}

const changeCharStrategy = (char) => {
	const randomStrategy = Math.floor(Math.random() * 3)
	return changeaLetterStrategy[randomStrategy] ? changeaLetterStrategy[randomStrategy](char) : char
}

const changeSpaceStrategy = () => {
	const randomStrategy = Math.floor(Math.random() * 2)
	return ['_', '-'][randomStrategy]
}

export const securePassword = (password) => {
	return password
		.split('')
		.map((char) => (char === '-' ? changeSpaceStrategy() : changeCharStrategy(char)))
		.join('')
}
