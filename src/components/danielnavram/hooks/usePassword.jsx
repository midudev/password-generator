import { useState, useContext, createContext } from 'react'

const PasswordContext = createContext()

export const PasswordProvider = ({ children }) => {
	const [length, setLength] = useState(6)
	const [generatedPassword, setGenerate] = useState('')
	const [copied, setCopy] = useState(false)
	return (
		<PasswordContext.Provider
			value={{ length, generatedPassword, setLength, setGenerate, copied, setCopy }}
		>
			{children}
		</PasswordContext.Provider>
	)
}

export const usePassword = () => {
	return useContext(PasswordContext)
}

export default PasswordProvider
