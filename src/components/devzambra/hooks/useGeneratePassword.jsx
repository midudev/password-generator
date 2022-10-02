
function useGeneratePassword () {
	const [password, setPassword] = React.useState('')

	const handleGeneratePassword = (passwordLength) => {
		const generated = btoa(window.crypto.randomUUID()).slice(0, passwordLength)
		setPassword(generated)
	}

	return [password, handleGeneratePassword]
}

export default useGeneratePassword
