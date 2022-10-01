
import React, { useEffect, useState } from "react"
import { CopyIcon } from "@components/cacosted/CopyIcon.jsx"
import { Header } from "@components/cacosted/Header.jsx"
const CHARSET = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-='

const usePassword = (initialLength = 5) => {
	const [passLength, setPassLength] = useState(initialLength)
	const [password, setPassword] = useState('')

	const getRandomChar = () => {
		const charArray = CHARSET.split('')
		const randomIndex = Math.floor(Math.random() * CHARSET.length)
		const randomChar = charArray[randomIndex]
		return randomChar
	}

	const generatePassword = () => {
		const password = Array.from({length: passLength}).map(() => getRandomChar())
		return password.join('')
	}

	const setNewLength = (number) => setPassLength(number)
	
	const setNewPassword = (string) => setPassword(string)
	

	useEffect(() => {
		const newPassword = generatePassword()
		setNewPassword(newPassword)
	},[passLength])

	return {
		password,
		setNewLength
	}
}

export const Card = () => {
	
	const {password, setNewLength} = usePassword()
	const handleChange = ({target}) => {
		setNewLength(target.value)
	}
	
	return (
		<main className="text-white flex justify-center items-center">
			<article className="w-3/5 bg-gray-900 rounded-xl flex flex-col gap-4 p-5">
				<Header />
				<label htmlFor="password" className="relative block bg-green-400">
					<input name="password" id="password" className="text-slate-400 w-full px-4 py-2" type="text" readOnly value={password}/>
					<CopyIcon fill="red" className="absolute top-0 right-0"/>
				</label>
				<label htmlFor="password-length">
					<span className="block bg-slate-400 px-4 py-2">{password.length}</span>
					<input 
						onChange={handleChange} 
						type="range" 
						name="password-length" 
						id="password-length" 
						min="1" 
						max="100" 
						value={password.length}/>
				</label>
				<button>Generate</button>
			</article>
		</main>
	)
}