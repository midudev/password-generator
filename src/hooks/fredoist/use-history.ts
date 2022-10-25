import { writable } from 'svelte/store'
import { usePassword } from '@hooks/fredoist/use-password'

const history = writable<string[]>(JSON.parse(localStorage.getItem('fredoist_history')) || [])

export function useHistory() {
	const { subscribe, set, update } = history
	const password = usePassword()
	password.subscribe((password) =>
		update((items) => (password !== '' && !items.includes(password) ? [password, ...items] : items))
	)

	const clear = () => {
		set([])
	}

	subscribe((items) => localStorage.setItem('fredoist_history', JSON.stringify(items)))

	return {
		subscribe,
		clear
	}
}
