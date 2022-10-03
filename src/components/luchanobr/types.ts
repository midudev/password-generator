export interface State {
	password: string
	length: number
}

export interface Actions {
	type: 'generate' | 'setLength'
	payload?: number
}
