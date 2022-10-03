const CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-_/{}[]%&$#.,;:'
export function generatePassword(length: number): string {
	return Array.from(
		globalThis.crypto.getRandomValues(new Uint8Array(length)),
		(num) => CHARSET[num % CHARSET.length]
	).join('')
}
