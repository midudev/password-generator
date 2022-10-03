import React, { useEffect, useState } from 'react'
import { CheckIcon, CopyIcon, Slider } from './'

const regex = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXZY~@#-^*%/.+:;='
const minValue = 6
const maxValue = 18

export const PasswordGenerator = () => {
	const [isCopied, setIsCopied] = useState(false)
	const [{ passwordValue, passwordlength }, setPasswordState] = useState({
		passwordlength: minValue,
		passwordValue: ''
	})

	// TODO: PASSWORD VARIATIONS

	const isPasswordEmpty = passwordValue.length === 0

	const copyPassword = () => {
		setIsCopied(true)
		navigator.clipboard.writeText(passwordValue)
	}

	const handleGeneratePassword = () => {
		let newPassword = ''

		for (let i = 0; i < passwordlength; i++) {
			const randomNumber = Math.floor(Math.random() * regex.length)
			newPassword = newPassword.concat(regex[randomNumber])
		}

		const beginWithSpecialCharacter = newPassword.match(/^[~@#-^*%/.+:;=]/)
		if (beginWithSpecialCharacter) return handleGeneratePassword()

		setIsCopied(false)
		setPasswordState((curr) => ({
			...curr,
			passwordValue: newPassword
		}))
	}

	useEffect(() => {
		handleGeneratePassword()
	}, [])

	return (
		<div className='grid gap-4 place-self-center min-w-[304px] p-4 rounded-lg bg-gradient-to-t from-gray-700 via-gray-400 to-gray-600'>
			<section
				className={`relative flex items-center bg-slate-800 rounded-md ${
					isCopied ? 'border border-[#b4ff39]' : 'border border-transparent'
				}`}
			>
				<button
					aria-label='Copy url button'
					className={`p-2 pr-1 bg-slate-600 rounded-tl-md rounded-bl-md ${
						isPasswordEmpty ? 'opacity-20' : ''
					}`}
					disabled={isPasswordEmpty}
					onClick={copyPassword}
				>
					{isCopied
						? (
							<CheckIcon fill='none' height='24px' width='30px' />
						)
						: (
							<CopyIcon fill='white' height='24px' width='30px' />
						)}
				</button>
				<div className='pl-4'>
					<div className='bg-transparent font-semibold text-slate-200'>{passwordValue}</div>
				</div>
			</section>
			<section className='text-center'>
				<Slider max={maxValue} min={minValue} setPasswordLength={setPasswordState} />
				<button
					className='rounded-md p-2 font-bold border-2 border-[#170F1E] hover:text-white hover:border-[#b4ff39] transition-colors duration-300
					hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#ffe27d] hover:via-[#64e2ff] hover:to-[#b4ff39]'
					onClick={handleGeneratePassword}
				>
					Generar nueva contraseña
				</button>
			</section>
		</div>
	)
}
