import { writable } from 'svelte/store'
import { usePassword } from '@hooks/fredoist/use-password'

const history = writable<string[]>([])

export function useHistory() {
	const { subscribe, set, update } = history
	const password = usePassword()
	password.subscribe((password) =>
		update((items) => (password !== '' && !items.includes(password) ? [password, ...items] : items))
	)

	const clear = () => {
		set([])
	}

	return {
		subscribe,
		clear
	}
}
