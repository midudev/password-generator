import { useState } from 'react'

function useGeneratePassword () {
	const [password, setPassword] = useState('')

	const handleGeneratePassword = (passwordLength) => {
		const generated = btoa(window.crypto.randomUUID()).slice(0, passwordLength)
		setPassword(generated)
	}

	return [password, handleGeneratePassword]
}

export default useGeneratePassword
