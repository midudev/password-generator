export const isBrowser = typeof window !== 'undefined'

export const randomRange = (min, max) => {
	return Math.floor(min + Math.random() * (max - min + 1))
}
