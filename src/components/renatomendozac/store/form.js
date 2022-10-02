import { writable } from 'svelte/store'

const formInitialState = {
	length: 4,
	uppercase: true,
	lowercase: true,
	numbers: true,
	symbols: true
}

const { subscribe, update: updateState } = writable(formInitialState)
const update = (props) => updateState(state => ({ ...state, ...props }))

export { subscribe, update }
