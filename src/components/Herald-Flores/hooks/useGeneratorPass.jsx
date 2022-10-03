import React from 'react'

const useGeneratorPass = () => {
	const generatePass = () => {
		const chars = {
			lower: 'abcdefghijklmnopqrstuvwxyz',
			upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
			numeric: '0123456789',
			symbols: '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
		}
		const charsLength = document.querySelector('#rangeBar').value

		document.querySelector('#checkSymbols').checked = true
		const charsSelected = (
			(document.querySelector('#checkLowercase').checked ? chars.lower : '') +
			(document.querySelector('#checkUppercase').checked ? chars.upper : '') +
			(document.querySelector('#checkNumber').checked ? chars.numeric : '') +
			(document.querySelector('#checkSymbols').checked ? chars.symbols : '')
		).split('')

		const shuffleArray = (charsArr) => {
			for (let i = charsArr.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1))
				;[charsArr[i], charsArr[j]] = [charsArr[j], charsArr[i]]
			}
			return charsArr
		}

		const password = shuffleArray(charsSelected).join('').substring(0, charsLength)

		document.querySelector('#password').value = password
	}

	const copyClipBoard = () => {
		const copyText = document.querySelector('#password')
		copyText.select()
		copyText.setSelectionRange(0, 99999)
		navigator.clipboard.writeText(copyText.value)
		document.querySelector('#alert').classList.remove('hidden')
		setTimeout(() => {
			document.querySelector('#alert').classList.add('hidden')
		}, 2500)
	}

	return {
		generatePass,
		copyClipBoard
	}
}

export default useGeneratorPass
