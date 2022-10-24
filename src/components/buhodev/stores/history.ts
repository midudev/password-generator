import { writable } from './localStorage'

type PasswordEntry = {
	password: string
	generated: string
}

export const savedPasswords = writable('saved_passwords', [
	{ password: 'j8a6!dzZ^2#A', generated: 'Nov 1, 12:00' },
	{ password: 'j8a6!dzZ^2#A', generated: 'Nov 2, 12:00' },
	{ password: 'j8a6!dzZ^2#A', generated: 'Nov 3, 12:00' }
])

export const addPassword = (passwordEntry: PasswordEntry) => {
	savedPasswords.update((all) => [{ ...passwordEntry }, ...all])
}

export const deletePassword = (password: PasswordEntry['password']) => {
	savedPasswords.update((all) => all.filter((passwordEntry) => passwordEntry.password !== password))
}
