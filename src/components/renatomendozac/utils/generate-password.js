const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%&*()_+{}[]:;<>?,./';

const chars = [
	upperCase,
	lowerCase,
	numbers,
	symbols
]

const getRandomNumber = (max) => Math.floor(Math.random() * max)

const getRandomChar = (charsIndex) => {
	const charIndex = getRandomNumber(chars[charsIndex].length);
	return chars[charsIndex][charIndex];
}

const generatePassword = (length = 12) => {
	const atLeastOneUppercase = getRandomChar(0);
	const atLeastOneLowercase = getRandomChar(1);
	const atLeastOneNumber = getRandomChar(2);
	const atLeastOneSymbol = getRandomChar(3);

	const pass = [
		atLeastOneUppercase,
		atLeastOneLowercase,
		atLeastOneNumber,
		atLeastOneSymbol,
	]

	if (length > 4) {
		for (let i = 4; i < length; i++) {
			const randomChar = getRandomChar(getRandomNumber(chars.length));
			pass.push(randomChar);
		}
	}

	return pass.join('');
}

export { generatePassword };
