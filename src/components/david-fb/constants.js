const PASSWORD_MIN = 4
const PASSWORD_MAX = 20
const INPUT_STEPS = 1

const OPTIONS = [
	{
		id: 'Uppercase',
		title: 'Include Uppercase Letters',
		status: true,
		characters: [
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
	},
	{
		id: 'Lowercase',
		title: 'Include Lowercase Letters',
		status: true,
		characters: [
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
			'u',
			'v',
			'w',
			'x',
			'y',
			'z'
		]
	},
	{
		id: 'Numbers',
		title: 'Include Numbers',
		status: false,
		characters: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
	},
	{
		id: 'Symbols',
		title: 'Include Symbols',
		status: false,
		characters: [
			'(',
			')',
			'_',
			'+',
			'-',
			'%',
			'^',
			'&',
			'*',
			'=',
			'[',
			']',
			'{',
			'}',
			'|',
			';',
			':',
			',',
			'.',
			'!',
			'@',
			'#',
			'$',
			'/',
			'<',
			'>',
			'?'
		]
	}
]

export { PASSWORD_MIN, PASSWORD_MAX, INPUT_STEPS, OPTIONS }
