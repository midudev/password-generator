import { useState } from 'react'

const letters = 'ajkbidmnocdefghlpqrsvyztwxu'
const numbers = '8056219437'
const special = '&*#$%+!@=^</'

interface ISettings {
	length: number;
	letters?: boolean;
	numbers?: boolean;
	special?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const randomSort = (array:any) => {
	array.sort(() => Math.random() * 1000 - Math.random() * 1000)
	array.sort(() => Math.random() * 1000 - Math.random() * 1000)
	array.sort(() => Math.random() * 1000 - Math.random() * 1000)
	array.sort(() => Math.random() * 1000 - Math.random() * 1000)
	array.sort(() => Math.random() * 1000 - Math.random() * 1000)

	return array
}

const toArray = (text:string) => {
	const r:string[] = []
	for (let i = 0; i < text.length; i++) r.push(text[i])
	return r
}

export const usePassword = () => {
	const [password, setPassword] = useState<string>('')
	// const [settings, setSettings] = useState('')

	const generatePassword = (settings:ISettings) => {
		let repo = ''
		if (settings.letters) repo += letters
		if (settings.numbers) repo += numbers
		if (settings.special) repo += special

		// merge the characters
		const r = randomSort(toArray(repo))

		let genPass = ''
		for (let i = 1; i < settings.length; i++) {
			const n = Math.floor(Math.random() * 10000 % r.length)
			genPass += r[n]
		}
		setPassword(genPass)
	}

	const generatePasswordByPhrase = (phrase:string, length:number) => {
		// extend the phrase
		while (phrase.length < length) {
			phrase += phrase
		}
		phrase = phrase.substring(0, length)


		// create a hashes
		const BASE = 7
		const hashs = new Array<number>(length)
		for (let i = 0; i < phrase.length; i++) {
			if (i === 0) {
				hashs[i] = phrase[i].charCodeAt(0) % length
				continue
			}
			hashs[i] = (hashs[i - 1] * BASE + phrase[i].charCodeAt(0)) % length
		}

		// assign characters
		let passw = ''
		for (let i = 0; i < hashs.length; i++) {
			const rand = hashs[i] % 2
			let char = ''
			if (rand === 0) char = letters[hashs[i] % letters.length]
			if (rand === 1) char = numbers[hashs[i] % numbers.length]
			passw += char
		}

		// put some special characters
		// const nrand = hashs[(letters.length + numbers.length + special.length + length) % hashs.length] % length

		// for (let i = nrand; i < length; i++) {
		// 	const index = hashs[passw[i].charCodeAt(0) % hashs.length]
		// 	passw = passw.substring(0, i) + special[index % special.length] + passw.substring(i + 1)
		// }

		setPassword(passw)
	}



	// const generatePasswordByPhrase = (phrase:string, lenght:number) => {
	// 	// Convert the phrase string in a array of characters
	// 	phrase = phrase.toLowerCase()
	// 	const ph:string[] = []
	// 	for (let i = 0; i < phrase.length; i++) {
	// 		if (phrase[i] === ' ') continue
	// 		ph.push(phrase[i])
	// 	}

	// 	// convert some characters to upper case
	// 	for (let i = 0; i < ph.length; i++) {
	// 		const r = ph[i].charCodeAt(0) % 10
	// 		ph[i] = (r <= 5 ? ph[i].toUpperCase() : ph[i])
	// 	}

	// 	// convert to number some characters
	// 	for (let i = 0; i < ph.length; i++) {
	// 		const r = ph[i].charCodeAt(0) % Math.max(1, ph.length)
	// 		if (r % 2 === 0) ph[i] = (ph[i].charCodeAt(0) % 10).toString()
	// 	}

	// 	// complete the lenght
	// 	while (ph.length < lenght) {
	// 		const l = (2 * ph.length <= lenght) ? ph.length : 2 * ph.length - lenght

	// 		for (let i = 0; i < l; i++) {
	// 			const code = ph[i].charCodeAt(0)
	// 			const ll = code % 3
	// 			if (ll === 0) ph.push(letters[code % letters.length])
	// 			if (ll === 1) ph.push(numbers[code % numbers.length])
	// 			if (ll === 2) ph.push(special[code % special.length])
	// 		}
	// 	}
	// 	while (ph.length > lenght) {
	// 		const r = ph.length % 2
	// 		if (r === 0) ph.pop()
	// 		else ph.shift()
	// 	}

	// 	// change some characters
	// 	for (let i = 0; i < lenght; i++) {
	// 		const code = ph[i].charCodeAt(0)
	// 		const ll = code % 3
	// 		if (ll === 0) ph[i] = (letters[code % letters.length])
	// 		if (ll === 1) ph[i] = (numbers[code % numbers.length])
	// 		if (ll === 2) ph[i] = (special[code % special.length])
	// 	}

	// 	// convert to string
	// 	let pw = ''
	// 	for (let i = 0; i < ph.length; i++) {
	// 		if (i % 4 === 0) pw += ' '
	// 		pw += ph[i]
	// 	}
	// 	setPassword(pw)
	// }


	return {
		password,
		generatePassword,
		generatePasswordByPhrase
	}
}