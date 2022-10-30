type Strength = {
	type: 'num' | 'lower' | 'lowerUpper' | 'numLowerUpper' | 'numLowerUpperSym'
	timeToCrack: string
	strength: 'lowest' | 'low' | 'medium' | 'high' | 'highest'
}

export function checkStrength(password) {
	const hasOnlyNumbers = /^\d+$/
	const hasOnlyLower = /^[a-z]+$/
	const hasNumbers = /\d/
	const hasLower = /[a-z]/
	const hasUpper = /[A-Z]/
	const hasSymbols = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/

	// Numbers only
	const numbers = (length: number): Strength => {
		if (length < 11) return { type: 'num', timeToCrack: 'instantly', strength: 'lowest' }
		if (length < 12) return { type: 'num', timeToCrack: '1 sec', strength: 'low' }
		if (length < 13) return { type: 'num', timeToCrack: '14 secs', strength: 'low' }
		if (length < 14) return { type: 'num', timeToCrack: '2 mins', strength: 'low' }
		if (length < 15) return { type: 'num', timeToCrack: '24 mins', strength: 'low' }
		if (length < 16) return { type: 'num', timeToCrack: '4 hours', strength: 'low' }
		if (length < 17) return { type: 'num', timeToCrack: '2 days', strength: 'low' }
		if (length < 18) return { type: 'num', timeToCrack: '2 weeks', strength: 'low' }
		if (length < 19) return { type: 'num', timeToCrack: '5 months', strength: 'low' }
		return { type: 'num', timeToCrack: '> 5 months', strength: 'low' }
	}
	// Lowecase letters
	const lower = (length: number) => {
		if (length < 8) return { type: 'lower', timeToCrack: 'instantly', strength: 'lowest' }
		if (length < 9) return { type: 'lower', timeToCrack: '3 secs', strength: 'low' }
		if (length < 10) return { type: 'lower', timeToCrack: '1 min', strength: 'low' }
		if (length < 11) return { type: 'lower', timeToCrack: '34 mins', strength: 'low' }
		if (length < 12) return { type: 'lower', timeToCrack: '15 hours', strength: 'low' }
		if (length < 13) return { type: 'lower', timeToCrack: '2 weeks', strength: 'low' }
		if (length < 14) return { type: 'lower', timeToCrack: '1 year', strength: 'low' }
		if (length < 15) return { type: 'lower', timeToCrack: '29 years', strength: 'medium' }
		if (length < 16) return { type: 'lower', timeToCrack: '800 years', strength: 'medium' }
		if (length < 17) return { type: 'lower', timeToCrack: '20k years', strength: 'medium' }
		if (length < 18) return { type: 'lower', timeToCrack: '518k years', strength: 'high' }
		if (length < 19) return { type: 'lower', timeToCrack: '13m years', strength: 'high' }
		return { type: 'lower', timeToCrack: '> 13m years', strength: 'highest' }
	}
	// Upper and lowercase letter
	const lowerUpper = (length: number) => {
		if (length < 7) return { type: 'lowerUpper', timeToCrack: 'instantly', strength: 'lowest' }
		if (length < 8) return { type: 'lowerUpper', timeToCrack: '15 secs', strength: 'low' }
		if (length < 9) return { type: 'lowerUpper', timeToCrack: '13 min', strength: 'low' }
		if (length < 10) return { type: 'lowerUpper', timeToCrack: '11 hours', strength: 'low' }
		if (length < 11) return { type: 'lowerUpper', timeToCrack: '3 weeks', strength: 'low' }
		if (length < 12) return { type: 'lowerUpper', timeToCrack: '3 years', strength: 'medium' }
		if (length < 13) return { type: 'lowerUpper', timeToCrack: '200 years', strength: 'medium' }
		if (length < 14) return { type: 'lowerUpper', timeToCrack: '9k years', strength: 'medium' }
		if (length < 15) return { type: 'lowerUpper', timeToCrack: '483k years', strength: 'high' }
		if (length < 16) return { type: 'lowerUpper', timeToCrack: '25m years', strength: 'high' }
		if (length < 17) return { type: 'lowerUpper', timeToCrack: '1bn years', strength: 'high' }
		if (length < 18) return { type: 'lowerUpper', timeToCrack: '68bn years', strength: 'highest' }
		if (length < 19) return { type: 'lowerUpper', timeToCrack: '4tn years', strength: 'highest' }
		return { type: 'lowerUpper', timeToCrack: '> 4tn years', strength: 'highest' }
	}
	// Numbers, upper and lowercase letter
	const numLowerUpper = (length: number) => {
		if (length < 7) return { type: 'numLowerUpper', timeToCrack: 'instantly', strength: 'lowest' }
		if (length < 8) return { type: 'numLowerUpper', timeToCrack: '51 secs', strength: 'low' }
		if (length < 9) return { type: 'numLowerUpper', timeToCrack: '52 min', strength: 'low' }
		if (length < 10) return { type: 'numLowerUpper', timeToCrack: '2 days', strength: 'low' }
		if (length < 11) return { type: 'numLowerUpper', timeToCrack: '5 months', strength: 'low' }
		if (length < 12) return { type: 'numLowerUpper', timeToCrack: '24 years', strength: 'medium' }
		if (length < 13) return { type: 'numLowerUpper', timeToCrack: '1k years', strength: 'medium' }
		if (length < 14) return { type: 'numLowerUpper', timeToCrack: '91k years', strength: 'medium' }
		if (length < 15) return { type: 'numLowerUpper', timeToCrack: '6m years', strength: 'high' }
		if (length < 16) return { type: 'numLowerUpper', timeToCrack: '251m years', strength: 'high' }
		if (length < 17) { return { type: 'numLowerUpper', timeToCrack: '22bn years', strength: 'highest' } }
		if (length < 18) return { type: 'numLowerUpper', timeToCrack: '1tn years', strength: 'highest' }
		if (length < 19) { return { type: 'numLowerUpper', timeToCrack: '84tn years', strength: 'highest' } }
		return { type: 'numLowerUpper', timeToCrack: '> 84tn years', strength: 'highest' }
	}
	// Numbers, upper and lowercase letters, symbols
	const numLowerUpperSym = (length: number) => {
		if (length < 6) { return { type: 'numLowerUpperSym', timeToCrack: 'instantly', strength: 'lowest' } }
		if (length < 7) return { type: 'numLowerUpperSym', timeToCrack: '3 sec', strength: 'low' }
		if (length < 8) return { type: 'numLowerUpperSym', timeToCrack: '4 min', strength: 'low' }
		if (length < 9) return { type: 'numLowerUpperSym', timeToCrack: '45 hours', strength: 'low' }
		if (length < 10) return { type: 'numLowerUpperSym', timeToCrack: '2 weaks', strength: 'low' }
		if (length < 11) return { type: 'numLowerUpperSym', timeToCrack: '3 years', strength: 'medium' }
		if (length < 12) {
			return { type: 'numLowerUpperSym', timeToCrack: '300 years', strength: 'medium' }
		}
		if (length < 13) {
			return { type: 'numLowerUpperSym', timeToCrack: '20k years', strength: 'medium' }
		}
		if (length < 14) return { type: 'numLowerUpperSym', timeToCrack: '2m years', strength: 'high' }
		if (length < 15) { return { type: 'numLowerUpperSym', timeToCrack: '118m years', strength: 'high' } }
		if (length < 16) return { type: 'numLowerUpperSym', timeToCrack: '9bn years', strength: 'high' }
		if (length < 17) {
			return { type: 'numLowerUpperSym', timeToCrack: '697bn years', strength: 'highest' }
		}
		if (length < 18) {
			return { type: 'numLowerUpperSym', timeToCrack: '54tn years', strength: 'highest' }
		}
		if (length < 19) {
			return { type: 'numLowerUpperSym', timeToCrack: '4qd years', strength: 'highest' }
		}
		return { type: 'numLowerUpperSym', timeToCrack: '> 4qd years', strength: 'highest' }
	}

	if (hasOnlyNumbers.test(password)) return numbers(String(password).length)
	if (hasOnlyLower.test(password)) return lower(String(password).length)
	if (hasLower.test(password) && hasUpper.test(password)) return lowerUpper(String(password).length)
	if (hasLower.test(password) && hasUpper.test(password) && hasNumbers.test(password)) {
		return numLowerUpper(String(password).length)
	}
	if (
		hasLower.test(password) &&
		hasUpper.test(password) &&
		hasNumbers.test(password) &&
		hasSymbols.test(password)
	) {
		return numLowerUpperSym(String(password).length)
	}
}
