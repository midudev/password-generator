import React from 'react'
import { Actions, State } from './types'

export function usePasswordGenerator() {
	const [state, dispatch] = React.useReducer(reducerPasswordGenerator, INITIAL_STATE)

	return { state, dispatch }
}

const INITIAL_STATE: State = {
	password: '',
	length: 6
}

function reducerPasswordGenerator(state: State, action: Actions) {
	switch (action.type) {
		case 'generate':
			return { ...state, password: generatePassword(state.length) }
		case 'setLength':
			return { ...state, length: action.payload }
		default:
			throw new Error('Unexpected action')
	}
}

function generatePassword(lenght: number) {
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#$%&()!?'
	let password = ''
	for (let i = 0; i < lenght; i++) {
		password += characters.charAt(Math.floor(Math.random() * characters.length))
	}
	return password
}
