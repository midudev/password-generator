// @utils
import shuffleString from './shuffleString'
// @configs
import settingsKeys from '../config/settingsKeys'

// ─────────────── ∞ ───────────────

const includes = {
	// cambiar nombre de esto
	[settingsKeys.LOWER_CASE]: 'abcdefghijklmnñopqrstuvwxyz',
	[settingsKeys.UPPER_CASE]: 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ',
	[settingsKeys.NUMBERS]: '0123456789',
	[settingsKeys.SIMBOLS]: '¡!¿?/|@#$%^&*()-_=+{};:[],.~^<>`',
	[settingsKeys.EMOJIS]: '¡!¿?/|@#$%^&*()-_=+{};:[],.~^<>`'
}

// ─────────────── ∞ ───────────────

export default function randomPasswordGenerator(settings) {
	const { length, ...charsConfig } = settings

	const charsSet = Object.keys(charsConfig)
		.map((key) => (charsConfig[key] ? includes[key] : ''))
		.join('')

	const randomChars = shuffleString(charsSet)
	const charsLength = randomChars.length

	let randomPassword = ''

	for (let i = 0; i < length; i++) {
		randomPassword += randomChars[Math.floor(Math.random() * charsLength)]
	}

	return randomPassword
}
