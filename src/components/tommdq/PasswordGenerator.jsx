import { useState } from 'react'

const PasswordGenerator = () => {
	const [password, setPassword] = useState('')
	const [length, setLength] = useState(15)

	const generatePassword = () => {
		const chars = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()+-ABCDEFGHIJKLMNOPQRSTUVWXYZ'
		setPassword('')
		const array = new Uint32Array(length)
		if (typeof window !== 'undefined') window.crypto.getRandomValues(array)
		for (let i = 0; i < length; i++) {
			setPassword((prev) => prev + chars[array[i] % chars.length])
		}
	}

	const copyPassword = () => {
		navigator.clipboard.writeText(password)
		alert('Password copied')
	}

	const changeLength = (e) => {
		setLength(e.target.value)
	}

	return (
		<section className='container h-screen w-1/3 mx-auto flex flex-col gap-4 justify-center'>
			<div className='flex gap-1'>
				<input
					type='text'
					value={password}
					readOnly
					className='p-2 w-full bg-grayViolet rounded font-sans outline-none font-semibold'
				/>
				<button onClick={copyPassword}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						class='icon icon-tabler icon-tabler-copy'
						width='44'
						height='44'
						viewBox='0 0 24 24'
						stroke-width='1.5'
						stroke='#7a7aa3'
						fill='none'
						stroke-linecap='round'
						stroke-linejoin='round'
					>
						<path stroke='none' d='M0 0h24v24H0z' fill='none' />
						<rect x='8' y='8' width='12' height='12' rx='2' />
						<path d='M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2' />
					</svg>
				</button>
			</div>
			<button onClick={generatePassword} className='p-4 bg-grayViolet font-medium'>
				Generate Password
			</button>
			<input
				className='w-full h-2 rounded-lg appearance-none cursor-pointer accent-slate-300  bg-gradient-to-r from-gray-400 via-blue-500 to-gray-600'
				type='range'
				value={length}
				min='4'
				max='40'
				onChange={(e) => changeLength(e)}
			/>
			<label className='text-aqua self-center font-semibold text-xl'>{`Password Length: ${length}`}</label>
		</section>
	)
}

export default PasswordGenerator
