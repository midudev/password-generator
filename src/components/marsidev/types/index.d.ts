export * from './password'
export * from './toast'

export type WithRequired<T> = {
	[P in keyof T]-?: T[P]
}

export type WithUndef<T> = {
	[P in keyof T]-?: T[P] | undefined
}
