export const isBrowser = typeof window !== 'undefined'

export const randomRange = (min: number, max: number) => {
	return Math.floor(min + Math.random() * (max - min + 1))
}
