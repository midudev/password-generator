import { writable } from 'svelte/store'

const initialState = {
	length: 4,
	uppercases: true,
	lowercases: true,
	numbers: true,
	symbols: false
}

const { subscribe, update: updateState } = writable(initialState)
const update = (props) => updateState(state => ({ ...state, ...props }))

export { initialState, subscribe, update }
