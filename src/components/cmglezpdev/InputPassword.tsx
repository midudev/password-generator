import { ChangeEvent, useState } from 'react'
import { usePassword, useClipboard } from '@hooks/cmglezpdev'

import clipboardCopy from '@components/cmglezpdev/icons/clipboard-copy.svg'
import clipboardCopied from '@components/cmglezpdev/icons/clipboard-copied.svg'

export const InputPassword = () => {
	const [lenghtPassword, setLenghtPassword] = useState('10')
	const { refElement, copied, copyText } = useClipboard()
	const { password, generatePassword, generatePasswordByPhrase } = usePassword()


	// useEffect(() => {
	// 	generatePasswordByPhrase('My recovery Phrase', 10)
	// }, [])

	const handleLenghtControl = (e:ChangeEvent<HTMLInputElement>) => {
		setLenghtPassword(e.target.value)
	}

	const handleGenPassword = () => {
		const set = {
			length: 10,
			letters: true,
			special: true,
			numbers: true
		}
		generatePassword(set)
	}

	return (
		<>
			<div className='flex gap-2'>
				<input
					ref={refElement}
					type='text'
					name='password'
					value={password}
					className='py-1 px-2 rounded w-96 outline-none text-gray-600 text-xl'
				/>
				<button
					className='flex items-center gap-1 px-2 bg-gray-400 rounded outline-none'
					onClick={() => copyText()}
				>
					<img src={!copied ? clipboardCopy : clipboardCopied} alt='clipboard' className='w-4' />
					<span
						className='uppercase text-xs font-bold'
						style={{ color: copied ? '#19770d' : '#000' }}
					>Copy</span>
				</button>
			</div>

			<div className='mt-3'>
				<p className='w-72 flex justify-between px-4'>
					<span className='text-white font-bold'>Lenght</span>
					<span className='text-white font-bold'>{ lenghtPassword }</span>
				</p>
				<input
					type='range'
					name='range'
					min='6'
					max='40'
					defaultValue='10'
					className='w-72 outline-none'
					onChange={handleLenghtControl}
				/>
			</div>

			<button
				className='uppercase py-3 px-5 bg-blue-800 rounded-3xl text-white font-bold mt-4 outline-none hover:bg-blue-700 transition-colors'
				onClick={handleGenPassword}
			>
				Generate Password
			</button>
		</>
	)
}
