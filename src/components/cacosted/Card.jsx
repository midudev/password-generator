
import React, { useEffect, useState } from "react"
import { Header } from "@components/cacosted/Header"
import { Button } from "@components/cacosted/Button"
import { CopyIcon } from "@components/cacosted/CopyIcon"
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
	
	const setNewPassword = () => {
		const newPassword = generatePassword()
		setPassword(newPassword)
	}
	

	useEffect(() => {
		setNewPassword()
	},[passLength])

	return {
		password,
		setNewLength,
		setNewPassword
	}
}

export const Card = () => {
	const [copied, setCopied] = useState(false)
	const {password, setNewLength, setNewPassword} = usePassword()
	const copyText = () => {
		navigator.clipboard.writeText(password)
		setCopied(true)
		setTimeout(() => setCopied(false), 2000)
	}

	const copiedClass = copied ? 'opacity-1' : 'opacity-0' 
	const handleChange = ({target}) => {
		setNewLength(target.value)
	}

	const handleClick = () => {
		setNewPassword()
	}
	
	return (
		<main className="min-h-screen text-white flex justify-center items-center bg-slate-900">
			<div className={`absolute top-5 mx-auto text-center border-amber-500 border-2 rounded-lg transition-opacity duration-500 ${copiedClass}`}>
				<span className="text-white p-5 relative block">Copied to clipboard</span>
			</div>
			<article className="w-3/5 bg-gray-900 rounded-xl flex flex-col gap-8 p-6 shadow-bg-gray-900 shadow-2xl">
				<Header />
				<label htmlFor="password" className="relative block">
					<input name="password" id="password" className="text-slate-400 w-full px-5 py-3 bg-gray-800 rounded-lg" type="text" readOnly value={password}/>
					<Button action={copyText} className=" bg-gray-800 absolute top-0 right-2 min-h-full">
						<CopyIcon className="text-amber-400 hover:text-amber-500 active:text-amber-700 " />
					</Button>
				</label>
				<label htmlFor="password-length" className="flex gap-5">
					<input 
						onChange={handleChange} 
						type="range"
						className="w-full bg-transparent accent-white" 
						name="password-length" 
						id="password-length" 
						min="5" 
						max="100" 
						value={password.length}
					/>
					<span className="rounded-xl bg-slate-800 px-4 py-2">{password.length}</span>

				</label>
				<Button className="bg-slate-800 px-4 py-3 rounded-lg hover:bg-slate-700" action={handleClick}>Generate</Button>
			</article>
		</main>
	)
}