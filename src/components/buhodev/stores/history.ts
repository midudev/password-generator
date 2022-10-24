import { writable } from './localStorage'

export const SAVED_PASSWORDS = writable('saved_passwords', [
	{ password: 'j8a6!dzZ^2#A', generated: 'Nov 1, 12:00' },
	{ password: 'j8a6!dzZ^2#A', generated: 'Nov 2, 12:00' },
	{ password: 'j8a6!dzZ^2#A', generated: 'Nov 3, 12:00' }
])
