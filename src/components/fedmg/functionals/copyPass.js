export const copyPassword = async (password) => {
	try {
		await navigator.clipboard.writeText(password)
		console.log('Copied to the clipboard successfully!')
	} catch (err) {
		console.error('Error to copy: ', err)
	}
}
