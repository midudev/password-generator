import { useState } from 'react'

const PasswordGenerator = () => {
	const [password, setPassword] = useState('')
	const [isCopy, setIsCopy] = useState(false)
	const [length, setLength] = useState(5)

	const generatePassword = () => {
		setIsCopy(false)
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
		setIsCopy(true)
	}

	const changeLength = (e) => {
		setLength(e.target.value)
	}

	return (
		<section className='container h-screen w-1/5 mx-auto flex flex-col gap-4 justify-around'>
			<div className='flex flex-col-reverse shadow-lg shadow-cyan-500/50 p-8 gap-5'>
				<div className='flex gap-1 '>
					<input
						type='text'
						value={password}
						readOnly
						className='p-2 w-full rounded font-sans outline-none font-semibold'
						style={{ background: '#ffffff' }}
					/>
					<button onClick={copyPassword}>
						{isCopy
							? (
								<svg
									width='48px'
									height='48px'
									stroke-width='1.72'
									viewBox='0 0 24 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
									color='#000000'
								>
									<path
										d='M1.5 12.5l4.076 4.076a.6.6 0 00.848 0L9 14M16 7l-4 4'
										stroke='#ffffff'
										stroke-width='1.72'
										stroke-linecap='round'
									></path>
									<path
										d='M7 12l4.576 4.576a.6.6 0 00.848 0L22 7'
										stroke='#ffffff'
										stroke-width='1.72'
										stroke-linecap='round'
									></path>
								</svg>
							)
							: (
								<svg
									width='48px'
									height='48px'
									stroke-width='1.72'
									viewBox='0 0 24 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
									color='#ffffff'
								>
									<path
										d='M19.4 20H9.6a.6.6 0 01-.6-.6V9.6a.6.6 0 01.6-.6h9.8a.6.6 0 01.6.6v9.8a.6.6 0 01-.6.6z'
										stroke='#ffffff'
										stroke-width='1.72'
										stroke-linecap='round'
										stroke-linejoin='round'
									></path>
									<path
										d='M15 9V4.6a.6.6 0 00-.6-.6H4.6a.6.6 0 00-.6.6v9.8a.6.6 0 00.6.6H9'
										stroke='#ffffff'
										stroke-width='1.72'
										stroke-linecap='round'
										stroke-linejoin='round'
									></path>
								</svg>
							)}
					</button>
				</div>
				<button
					onClick={generatePassword}
					className='p-4 font-medium rounded-md'
					style={{ background: '#42c2a7' }}
				>
					Generate
				</button>
				<input
					className='w-full h-3 rounded-lg appearance-none cursor-pointer accent-slate-200  bg-gradient-to-r from-cyan-500 to-blue-500'
					type='range'
					value={length}
					min='4'
					max='40'
					onChange={(e) => changeLength(e)}
				/>
				<label
					className='self-center font-semibold text-xl'
					style={{ color: '#ffffff' }}
				>{`Password Length: ${length}`}</label>
			</div>
		</section>
	)
}

export default PasswordGenerator
