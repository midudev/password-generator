import { letters, capitalLetters, numbers, symbols } from './utils'

const passwordFunction = (length) => {
	const auxiliarArray = []
	const shuffleArray = [letters, capitalLetters, numbers, symbols]

	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * shuffleArray.length)
		const randomValue =
			shuffleArray[randomIndex][Math.floor(Math.random() * shuffleArray[randomIndex].length)]
		auxiliarArray.push(randomValue)
	}
	console.log(auxiliarArray.join(''))
	return auxiliarArray
}

export default passwordFunction
