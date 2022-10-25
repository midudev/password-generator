import { writable } from './localStorage'

type PasswordEntry = {
	password: string
	generated: string
}

export const savedPasswords = writable('saved_passwords', [])

export const addPassword = (passwordEntry: PasswordEntry) => {
	savedPasswords.update((all) => [{ ...passwordEntry }, ...all])
}

export const deletePassword = (password: PasswordEntry['password']) => {
	savedPasswords.update((all) => all.filter((passwordEntry) => passwordEntry.password !== password))
}
