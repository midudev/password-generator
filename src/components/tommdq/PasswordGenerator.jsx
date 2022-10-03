import { useState } from 'react'
import Alert from '@components/tommdq/Alert'
import CopyButton from '@components/tommdq/CopyButton'
import GeneratePassword from '@components/tommdq/GeneratePassword'

const PasswordGenerator = () => {
	const [password, setPassword] = useState('')
	const [length, setLength] = useState(15)
	const [isCopied, setIsCopied] = useState(false)

	const generatePassword = () => {
		const chars = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()+-ABCDEFGHIJKLMNOPQRSTUVWXYZ'
		setPassword('')
		const array = new Uint32Array(length)
		window.crypto.getRandomValues(array)
		for (let i = 0; i < length; i++) {
			setPassword((prev) => prev + chars[array[i] % chars.length])
		}
	}

	const copyPassword = () => {
		navigator.clipboard.writeText(password)
		setIsCopied(true)
		setTimeout(() => {
			setIsCopied(false)
		}, 1500)
	}

	return (
		<section className='container h-screen lg:w-1/3 md:w-1/2 w-3/4 mx-auto flex flex-col gap-4 justify-center'>
			<Alert isCopied={isCopied} />
			<div className='flex gap-1'>
				<input
					type='text'
					value={password}
					readOnly
					className='bg-[#29335C] text-[#E4842E] p-2 w-full rounded font-sans outline-none font-semibold text-xl h-12 cursor-default'
				/>
				<CopyButton copyPassword={copyPassword} />
			</div>
			<GeneratePassword generatePassword={generatePassword} />
			<input
				className='w-full h-2 rounded-lg outline-none border-none border-transparent cursor-pointer accent-[#a7a7cc]'
				type='range'
				value={length}
				min='4'
				max='40'
				onChange={(e) => setLength(e.target.value)}
			/>
			<label className='self-center font-semibold text-xl text-[#a7a7cc]'>{`Password Length: ${length}`}</label>
		</section>
	)
}

export default PasswordGenerator
