export function copy(value: string) {
	return new Promise((resolve, reject) => {
		try {
			navigator.clipboard.writeText(value)
			resolve('Copied to clipboard')
		} catch (error) {
			reject(error)
		}
	})
}
