import { useState, useCallback, useEffect } from 'react'
import { Title } from './Components'
import { useCopyToClipboard } from './Hooks'

const PasswordGenerator = () => {
	const [isVolume, setIsVolume] = useState(1)
	const [isPassword, setIsPassword] = useState('')
	const [isCopied, setIsCopied, copyToClipboard] = useCopyToClipboard()

	const handleVolume = useCallback((e) => {
		setIsVolume(e.target.value)
	}, [])

	const generatePassword = useCallback(() => {
		setIsPassword(Math.random().toString(36).slice(-isVolume))
	}, [isVolume])

	useEffect(() => {
		if (isCopied) {
			setTimeout(() => {
				setIsCopied(false)
			}, 2000)
		}
	}, [isCopied])

	return (
		<>
			<div className='md:container md:mx-auto h-full flex flex-col items-center justify-evenly'>
				<Title title='Password Generator' className='text-white uppercase text-center' />
				<section className='bg-slate-900 h-48 w-96 flex flex-col items-center justify-evenly rounded drop-shadow-md'>
					<div className='bg-cyan-900 h-20 rounded py-2 px-2 flex  w-80 items-center justify-around'>
						<input type='text' className='' placeholder={isPassword} />
						<button
							className='text-white'
							onClick={() => isPassword !== '' && copyToClipboard(isPassword)}
						>
							COPY
						</button>
					</div>
					<input
						type='range'
						min='1'
						max='10'
						className='in-range:boder-green-500 w-80'
						step='1'
						onChange={handleVolume}
					/>
				</section>
				<section>
					<h3 className='text-white uppercase'>{isVolume}</h3>
					<button
						className='bg-cyan-900 w-32 rounded drop-shadow-md py-2 text-white'
						onClick={generatePassword}
					>
						Generator
					</button>
				</section>
			</div>
		</>
	)
}

export default PasswordGenerator
