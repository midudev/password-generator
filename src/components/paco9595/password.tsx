import { useEffect, useState } from 'react'
import { PasswordGenerator } from './passwordGenerator'
import { PasswordType } from './types'

export default function Passowrd({ passwordLength }: PasswordType) {
	const [word, setWord] = useState('')

	useEffect(() => {
		const newWord = PasswordGenerator(passwordLength)
		setWord(newWord)
	}, [passwordLength])

	return (
		<div className='bg-[#C9EAD7] rounded-lg py-2 px-2 text-black tracking-[4px] font-medium text-xl mt-8 mb-5'>
			{word}
		</div>
	)
}
