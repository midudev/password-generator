type OptionType = 'ul' | 'sc' | 'nu'
const genRandomString = (length: number, options?: Array<OptionType>): string => {
	function randomInteger(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min
	}
	const randomItem = (array) => array[Math.floor(Math.random() * array.length)]
	return [...Array(length)]
		.map((item) => {
			const numbers = [...Array(57 - 47)]
				.map((item, i) => {
					return String.fromCharCode(48 + i)
				})
				.join('')

			const lowercaseLetters = [...Array(122 - 96)]
				.map((item, i) => {
					return String.fromCharCode(97 + i)
				})
				.join('')

			const uppercaseLetters = [...Array(90 - 64)]
				.map((item, i) => {
					return String.fromCharCode(65 + i)
				})
				.join('')
			const specialChars = [...Array(47 - 32)]
				.map((item, i) => {
					return String.fromCharCode(33 + i)
				})
				.join('')
			const dict = {
				ll: lowercaseLetters,
				ul: uppercaseLetters,
				sc: specialChars,
				nu: numbers
			}
			const genArray = (array: string[]) => {
				let newString = lowercaseLetters
				array.map((item) => {
					newString += dict[item]
				})
				return newString
			}

			// const random = randomInteger(...smallLetters)
			// const random = randomItem([...lowercaseLetters, ...numbers])
			return !options ? randomItem(genArray([])) : randomItem(genArray(options))
		})
		.join('')
}

const test = genRandomString(36, ['ul', 'nu', 'sc'])
test
