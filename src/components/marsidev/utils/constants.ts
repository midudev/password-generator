import type {
	DictionaryKeys,
	Dictionary,
	ToastOptions,
	WithRequired,
	ToastContainerProps
} from '@components/marsidev/types'

export const DICTIONARY: Dictionary = {
	numbers: '0123456789',
	lowercase: 'abcdefghijklmnopqrstuvwxyz',
	uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
	symbols: '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
}

export const DEFAULT_PASSWORD_LENGTH = 16

export const DEFAULT_KEYS: DictionaryKeys = ['lowercase', 'uppercase', 'numbers', 'symbols']

export const DEFAULT_TOAST_OPTIONS: WithRequired<ToastOptions & ToastContainerProps> = {
	duration: 5000,
	newestOnTop: false,
	position: 'top-right',
	closeOnClick: true,
	theme: 'light',
	type: 'default'
}
