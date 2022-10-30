type Strength = {
	password: string | number
	warning: string
	type: 'num' | 'lower' | 'lowerUpper' | 'numLowerUpper' | 'numLowerUpperSym'
	timeToCrack: string
	strength: 'lowest' | 'low' | 'medium' | 'high' | 'highest'
	score: 0 | 1 | 2 | 3 | 4
}

export function checkStrength(password) {
	const hasOnlyNumbers = /^\d+$/
	const hasOnlyLower = /^[a-z]+$/
	const hasOnlyUpper = /^[A-Z]+$/
	const hasOnlySymbols = /^[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]+$/
	const hasNumbers = /\d/
	const hasLower = /[a-z]/
	const hasUpper = /[A-Z]/
	const hasSymbols = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/

	// Numbers only
	const numbers = (length: number): Strength => {
		if (length < 11) {
			return {
				password,
				warning: '',
				type: 'num',
				timeToCrack: 'instantly',
				strength: 'lowest',
				score: 0
			}
		}
		if (length < 12) { return { password, warning: '', type: 'num', timeToCrack: '1 sec', strength: 'low', score: 1 } }
		if (length < 13) {
			return {
				password,
				warning: '',
				type: 'num',
				timeToCrack: '14 secs',
				strength: 'low',
				score: 1
			}
		}
		if (length < 14) {
			return {
				password,
				warning: '',
				type: 'num',
				timeToCrack: '2 mins',
				strength: 'low',
				score: 1
			}
		}
		if (length < 15) {
			return {
				password,
				warning: '',
				type: 'num',
				timeToCrack: '24 mins',
				strength: 'low',
				score: 1
			}
		}
		if (length < 16) {
			return {
				password,
				warning: '',
				type: 'num',
				timeToCrack: '4 hours',
				strength: 'low',
				score: 1
			}
		}
		if (length < 17) {
			return {
				password,
				warning: '',
				type: 'num',
				timeToCrack: '2 days',
				strength: 'low',
				score: 1
			}
		}
		if (length < 18) {
			return {
				password,
				warning: '',
				type: 'num',
				timeToCrack: '2 weeks',
				strength: 'low',
				score: 1
			}
		}
		if (length < 19) {
			return {
				password,
				warning: '',
				type: 'num',
				timeToCrack: '5 months',
				strength: 'low',
				score: 1
			}
		}
		return {
			password,
			warning: '',
			type: 'num',
			timeToCrack: '> 5 months',
			strength: 'low',
			score: 1
		}
	}
	// Lowecase letters
	const lower = (length: number) => {
		if (length < 8) {
			return {
				password,
				warning: '',
				type: 'lower',
				timeToCrack: 'instantly',
				strength: 'lowest',
				score: 0
			}
		}
		if (length < 9) {
			return {
				password,
				warning: '',
				type: 'lower',
				timeToCrack: '3 secs',
				strength: 'low',
				score: 1
			}
		}
		if (length < 10) {
			return {
				password,
				warning: '',
				type: 'lower',
				timeToCrack: '1 min',
				strength: 'low',
				score: 1
			}
		}
		if (length < 11) {
			return {
				password,
				warning: '',
				type: 'lower',
				timeToCrack: '34 mins',
				strength: 'low',
				score: 1
			}
		}
		if (length < 12) {
			return {
				password,
				warning: '',
				type: 'lower',
				timeToCrack: '15 hours',
				strength: 'low',
				score: 1
			}
		}
		if (length < 13) {
			return {
				password,
				warning: '',
				type: 'lower',
				timeToCrack: '2 weeks',
				strength: 'low',
				score: 1
			}
		}
		if (length < 14) {
			return {
				password,
				warning: '',
				type: 'lower',
				timeToCrack: '1 year',
				strength: 'low',
				score: 1
			}
		}
		if (length < 15) {
			return {
				password,
				warning: '',
				type: 'lower',
				timeToCrack: '29 years',
				strength: 'medium',
				score: 2
			}
		}
		if (length < 16) {
			return {
				password,
				warning: '',
				type: 'lower',
				timeToCrack: '800 years',
				strength: 'medium',
				score: 2
			}
		}
		if (length < 17) {
			return {
				password,
				warning: '',
				type: 'lower',
				timeToCrack: '20k years',
				strength: 'medium',
				score: 2
			}
		}
		if (length < 18) {
			return {
				password,
				warning: '',
				type: 'lower',
				timeToCrack: '518k years',
				strength: 'high',
				score: 3
			}
		}
		if (length < 19) {
			return {
				password,
				warning: '',
				type: 'lower',
				timeToCrack: '13m years',
				strength: 'high',
				score: 3
			}
		}
		return {
			password,
			warning: '',
			type: 'lower',
			timeToCrack: '> 13m years',
			strength: 'highest',
			score: 4
		}
	}
	// Upper and lowercase letter
	const lowerUpper = (length: number) => {
		if (length < 7) {
			return {
				password,
				warning: '',
				type: 'lowerUpper',
				timeToCrack: 'instantly',
				strength: 'lowest',
				score: 0
			}
		}
		if (length < 8) {
			return {
				password,
				warning: '',
				type: 'lowerUpper',
				timeToCrack: '15 secs',
				strength: 'low',
				score: 1
			}
		}
		if (length < 9) {
			return {
				password,
				warning: '',
				type: 'lowerUpper',
				timeToCrack: '13 min',
				strength: 'low',
				score: 1
			}
		}
		if (length < 10) {
			return {
				password,
				warning: '',
				type: 'lowerUpper',
				timeToCrack: '11 hours',
				strength: 'low',
				score: 1
			}
		}
		if (length < 11) {
			return {
				password,
				warning: '',
				type: 'lowerUpper',
				timeToCrack: '3 weeks',
				strength: 'low',
				score: 1
			}
		}
		if (length < 12) {
			return {
				password,
				warning: '',
				type: 'lowerUpper',
				timeToCrack: '3 years',
				strength: 'medium',
				score: 2
			}
		}
		if (length < 13) {
			return {
				password,
				warning: '',
				type: 'lowerUpper',
				timeToCrack: '200 years',
				strength: 'medium',
				score: 2
			}
		}
		if (length < 14) {
			return {
				password,
				warning: '',
				type: 'lowerUpper',
				timeToCrack: '9k years',
				strength: 'medium',
				score: 2
			}
		}
		if (length < 15) {
			return {
				password,
				warning: '',
				type: 'lowerUpper',
				timeToCrack: '483k years',
				strength: 'high',
				score: 3
			}
		}
		if (length < 16) {
			return {
				password,
				warning: '',
				type: 'lowerUpper',
				timeToCrack: '25m years',
				strength: 'high',
				score: 3
			}
		}
		if (length < 17) {
			return {
				password,
				warning: '',
				type: 'lowerUpper',
				timeToCrack: '1bn years',
				strength: 'high',
				score: 3
			}
		}
		if (length < 18) {
			return {
				password,
				warning: '',
				type: 'lowerUpper',
				timeToCrack: '68bn years',
				strength: 'highest',
				score: 4
			}
		}
		if (length < 19) {
			return {
				password,
				warning: '',
				type: 'lowerUpper',
				timeToCrack: '4tn years',
				strength: 'highest',
				score: 4
			}
		}
		return {
			password,
			warning: '',
			type: 'lowerUpper',
			timeToCrack: '> 4tn years',
			strength: 'highest',
			score: 4
		}
	}
	// Numbers, upper and lowercase letter
	const numLowerUpper = (length: number) => {
		if (length < 7) {
			return {
				password,
				warning: '',
				type: 'numLowerUpper',
				timeToCrack: 'instantly',
				strength: 'lowest',
				score: 0
			}
		}
		if (length < 8) {
			return {
				password,
				warning: '',
				type: 'numLowerUpper',
				timeToCrack: '51 secs',
				strength: 'low',
				score: 1
			}
		}
		if (length < 9) {
			return {
				password,
				warning: '',
				type: 'numLowerUpper',
				timeToCrack: '52 min',
				strength: 'low',
				score: 1
			}
		}
		if (length < 10) {
			return {
				password,
				warning: '',
				type: 'numLowerUpper',
				timeToCrack: '2 days',
				strength: 'low',
				score: 1
			}
		}
		if (length < 11) {
			return {
				password,
				warning: '',
				type: 'numLowerUpper',
				timeToCrack: '5 months',
				strength: 'low',
				score: 1
			}
		}
		if (length < 12) {
			return {
				password,
				warning: '',
				type: 'numLowerUpper',
				timeToCrack: '24 years',
				strength: 'medium',
				score: 2
			}
		}
		if (length < 13) {
			return {
				password,
				warning: '',
				type: 'numLowerUpper',
				timeToCrack: '1k years',
				strength: 'medium',
				score: 2
			}
		}
		if (length < 14) {
			return {
				password,
				warning: '',
				type: 'numLowerUpper',
				timeToCrack: '91k years',
				strength: 'medium',
				score: 2
			}
		}
		if (length < 15) {
			return {
				password,
				warning: '',
				type: 'numLowerUpper',
				timeToCrack: '6m years',
				strength: 'high',
				score: 3
			}
		}
		if (length < 16) {
			return {
				password,
				warning: '',
				type: 'numLowerUpper',
				timeToCrack: '251m years',
				strength: 'high',
				score: 3
			}
		}
		if (length < 17) {
			return {
				password,
				warning: '',
				type: 'numLowerUpper',
				timeToCrack: '22bn years',
				strength: 'highest',
				score: 4
			}
		}
		if (length < 18) {
			return {
				password,
				warning: '',
				type: 'numLowerUpper',
				timeToCrack: '1tn years',
				strength: 'highest',
				score: 4
			}
		}
		if (length < 19) {
			return {
				password,
				warning: '',
				type: 'numLowerUpper',
				timeToCrack: '84tn years',
				strength: 'highest',
				score: 4
			}
		}
		return {
			password,
			warning: '',
			type: 'numLowerUpper',
			timeToCrack: '> 84tn years',
			strength: 'highest',
			score: 4
		}
	}
	// Numbers, upper and lowercase letters, symbols
	const numLowerUpperSym = (length: number) => {
		if (length < 6) {
			return {
				password,
				warning: '',
				type: 'numLowerUpperSym',
				timeToCrack: 'instantly',
				strength: 'lowest',
				score: 0
			}
		}
		if (length < 7) {
			return {
				password,
				warning: '',
				type: 'numLowerUpperSym',
				timeToCrack: '3 sec',
				strength: 'low',
				score: 1
			}
		}
		if (length < 8) {
			return {
				password,
				warning: '',
				type: 'numLowerUpperSym',
				timeToCrack: '4 min',
				strength: 'low',
				score: 1
			}
		}
		if (length < 9) {
			return {
				password,
				warning: '',
				type: 'numLowerUpperSym',
				timeToCrack: '45 hours',
				strength: 'low',
				score: 1
			}
		}
		if (length < 10) {
			return {
				password,
				warning: '',
				type: 'numLowerUpperSym',
				timeToCrack: '2 weaks',
				strength: 'low',
				score: 1
			}
		}
		if (length < 11) {
			return {
				password,
				warning: '',
				type: 'numLowerUpperSym',
				timeToCrack: '3 years',
				strength: 'medium',
				score: 2
			}
		}
		if (length < 12) {
			return {
				password,
				warning: '',
				type: 'numLowerUpperSym',
				timeToCrack: '300 years',
				strength: 'medium',
				score: 2
			}
		}
		if (length < 13) {
			return {
				password,
				warning: '',
				type: 'numLowerUpperSym',
				timeToCrack: '20k years',
				strength: 'medium',
				score: 2
			}
		}
		if (length < 14) {
			return {
				password,
				warning: '',
				type: 'numLowerUpperSym',
				timeToCrack: '2m years',
				strength: 'high',
				score: 3
			}
		}
		if (length < 15) {
			return {
				password,
				warning: '',
				type: 'numLowerUpperSym',
				timeToCrack: '118m years',
				strength: 'high',
				score: 3
			}
		}
		if (length < 16) {
			return {
				password,
				warning: '',
				type: 'numLowerUpperSym',
				timeToCrack: '9bn years',
				strength: 'high',
				score: 3
			}
		}
		if (length < 17) {
			return {
				password,
				warning: '',
				type: 'numLowerUpperSym',
				timeToCrack: '697bn years',
				strength: 'highest',
				score: 4
			}
		}
		if (length < 18) {
			return {
				password,
				warning: '',
				type: 'numLowerUpperSym',
				timeToCrack: '54tn years',
				strength: 'highest',
				score: 4
			}
		}
		if (length < 19) {
			return {
				password,
				warning: '',
				type: 'numLowerUpperSym',
				timeToCrack: '4qd years',
				strength: 'highest',
				score: 4
			}
		}
		return {
			password,
			warning: '',
			type: 'numLowerUpperSym',
			timeToCrack: '> 4qd years',
			strength: 'highest',
			score: 4
		}
	}

	// ✅ only numbers 🔐 -1
	if (hasOnlyNumbers.test(password)) {
		return numbers(String(password).length)
	}
	// ✅ only lower 🔐 0
	// ✅ only upper 🔐 0
	// ✅ only symbols 🔐 0
	if (hasOnlyLower.test(password) || hasOnlyUpper.test(password) || hasOnlySymbols.test(password)) {
		return lower(String(password).length)
	}
	// ✅ lower + numbers 🔐 1
	// ✅ upper + numbers 🔐 1
	// ✅ symbols + numbers 🔐 1
	if (
		(hasLower.test(password) && hasNumbers.test(password)) ||
		(hasUpper.test(password) && hasNumbers.test(password)) ||
		(hasSymbols.test(password) && hasNumbers.test(password))
	) {
		return lowerUpper(String(password).length)
	}
	// ✅ lower + symbols 🔐 2
	// ✅ upper + symbols 🔐 2
	// ✅ lower + upper 🔐 2
	if (
		(hasLower.test(password) && hasSymbols.test(password)) ||
		(hasUpper.test(password) && hasSymbols.test(password)) ||
		(hasUpper.test(password) && hasLower.test(password))
	) {
		return lowerUpper(String(password).length)
	}
	// ✅ lower + upper + numbers 🔐 3
	// ✅ lower + symbols + numbers 🔐 3
	// ✅ upper + symbols + numbers 🔐 3
	// ✅ lower + upper + symbols 🔐 3
	if (
		(hasLower.test(password) && hasUpper.test(password) && hasNumbers.test(password)) ||
		(hasLower.test(password) && hasSymbols.test(password) && hasNumbers.test(password)) ||
		(hasUpper.test(password) && hasSymbols.test(password) && hasNumbers.test(password)) ||
		(hasLower.test(password) && hasUpper.test(password) && hasSymbols.test(password))
	) {
		return numLowerUpper(String(password).length)
	}
	// lower + upper + numbers + symbols 🔐 4
	if (
		hasLower.test(password) &&
		hasUpper.test(password) &&
		hasNumbers.test(password) &&
		hasSymbols.test(password)
	) {
		return numLowerUpperSym(String(password).length)
	}
}
