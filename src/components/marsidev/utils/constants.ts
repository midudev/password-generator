import type { DictionaryKeys, Dictionary } from '@components/marsidev/types'

export const DICTIONARY: Dictionary = {
	numbers: '0123456789',
	lowercase: 'abcdefghijklmnopqrstuvwxyz',
	uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
	symbols: '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
}

export const DEFAULT_PASSWORD_LENGTH = 16

export const DEFAULT_OPTIONS: DictionaryKeys = ['lowercase', 'uppercase', 'numbers', 'symbols']
