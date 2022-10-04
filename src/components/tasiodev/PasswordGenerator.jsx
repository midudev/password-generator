import { useState } from 'react'
import CopyIcon from './CopyIcon'
import Slider from './Slider'

export function PasswordGenerator() {
	const [password, setPassword] = useState(null)
	const [length, setLength] = useState(8)
	const [showCopied, setShowCopied] = useState(false)

	const generatePassword = () => {
		const TYPES = [
			'0123456789',
			'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ',
			'!#$%&()*+,-./:;<=>?@[]^_{|}~'
		]
		let pwd = ''
		for (let i = 1; i <= length; i++) {
			const type = TYPES[i % 3]
			pwd += type[Math.floor(Math.random() * type.length)]
		}
		setPassword(pwd)
	}

	const copyHandler = () => {
		navigator.clipboard.writeText(password)
		setShowCopied(true)
		setTimeout(() => {
			setShowCopied(false)
		}, 2500)
	}

	return (
		<div className='text-white shadow-lg bg-gray-700 max-w-xl m-auto mt-20 p-6 rounded-lg'>
			<h1 className='text-center text-3xl font-bold my-4'>Password Generator</h1>
			<div className='flex gap-2 justify-center items-center'>
				<div className='w-5/6 p-2 min-h-[40px] bg-gray-500 text-gray-300 text-center rounded-sm break-all'>
					{password}
				</div>
				<div
					className={
						(password ? 'cursor-pointer' : 'cursor-not-allowed') +
						' w-1/6 p-2 rounded-md text-center flex justify-center bg-slate-600 relative shadow-md'
					}
					title='Copy to clipboard'
					onClick={() => password && copyHandler()}
				>
					<CopyIcon width={26} color={password ? 'white' : '#666'} />
					<div
						className='text-[12px] text-green-500 absolute top-[-20px] font-bold transition-all'
						style={{ opacity: showCopied ? 1 : 0 }}
					>
						COPIED!
					</div>
				</div>
			</div>
			<div>
				<Slider value={length} onChange={setLength} min={6} max={40} />
			</div>
			<div className='text-center'>
				<button
					onClick={generatePassword}
					className='my-4 bg-gray-900 text-center rounded-md py-2 w-28 m-auto cursor-pointer transition-all hover:-translate-y-1 shadow-md'
				>
					Generate!
				</button>
			</div>
		</div>
	)
}
