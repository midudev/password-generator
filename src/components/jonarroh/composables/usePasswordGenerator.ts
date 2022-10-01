export const usePasswordGenerator = () => {
	// generar password con mayusculas y minusculas
	const generatePasswordWithUpper = (length: number) => {
		return Math.random().toString(36).toUpperCase().slice(-length)
	}

	const generatePassword = (length: number) => {
		return Math.random().toString(36).slice(-length)
	}
	const generatePasswordWithSymbols = (length: number) => {
		const symbols = '!@#$%^&*()_+{}|:"<>?[];\',./`~'
		const password = generatePassword(length - 2)
		const passwordWithSymbols =
			password + symbols[Math.floor(Math.random() * symbols.length)] + generatePasswordWithUpper(1)
		return passwordWithSymbols
	}
	return {
		generatePassword,
		generatePasswordWithSymbols
	}
}
