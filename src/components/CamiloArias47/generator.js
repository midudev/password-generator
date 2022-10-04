import { useState, useEffect } from 'react'

const ALPHABET_LOWER = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'w',
	'x',
	'y',
	'z'
]
const ALPHABET_CAPITAL = [
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
	'W',
	'X',
	'Y',
	'Z'
]
const NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const SIMBOLS = ['-', '+', '*', '&', '$', '#', '?', '!']

const CHARACTERS = [...ALPHABET_LOWER, ...ALPHABET_CAPITAL, ...NUMBERS, ...SIMBOLS]

export default function useGenerator() {
	const [password, setPassword] = useState('******')

	const generator = (passSize) => {
		if (passSize) {
			const key = []

			for (let index = 0; index < passSize; index++) {
				const randomPos = Math.floor(Math.random() * CHARACTERS.length)
				const char = CHARACTERS[randomPos]
				key.push(char)
			}

			const newPassword = key.join('')

			setPassword(newPassword)
		}
	}

	const generateBySize = (size) => {
		useEffect(() => {
			generator(size)
		}, [size])
	}

	const generateByBtn = (size) => {
		generator(size)
	}

	return {
		password,
		generateBySize,
		generateByBtn
	}
}
