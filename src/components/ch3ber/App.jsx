import React, { useState } from 'react'
import { generatePassword } from '@components/ch3ber/utils/generatePassword'
import { Footer } from '@components/ch3ber/Footer'

// assets
import logoSrc from './assets/Hfest-Logo.svg'
import clipboardSrc from './assets/clipboard.svg'
import clipboardCopiedSrc from './assets/clipboard-copied.svg'

export const App = () => {
	const DEFAULT_PASSWORD_LENGTH = 8
	const [range, setRange] = useState(DEFAULT_PASSWORD_LENGTH)
	const [password, setPassword] = useState('')
	const [clipboardAnimation, setClipboardAnimation] = useState('')
	const [clipboarIcon, setClipboardIcon] = useState(clipboardSrc)

	const copyToClipboard = () => {
		navigator.clipboard.writeText(password)
		onClipboardAnimation()
	}

	const onClipboardAnimation = () => {
		if (password === '') return
		setClipboardAnimation('bg-green-400')
		setClipboardIcon(clipboardCopiedSrc)
		setTimeout(() => {
			setClipboardAnimation('')
			setClipboardIcon(clipboardSrc)
		}, 500)
	}

	const hanldeClick = () => {
		const passwordOptions = {
			length: range,
			options: ['letters', 'letters-uppercase', 'numbers', 'symbols']
		}
		setPassword(generatePassword(passwordOptions))
	}

	const hanldeSetRange = (event) => {
		setRange(event.target.value)
	}

	return (
		<>
			<main className="text-[#E5E1E6] text-center pt-20 bg-squares bg-[url('./assets/grain-dark-background.png')]">
				<img src={logoSrc} alt='Hacktoberfest logo' className='mx-auto w-96' />
				<h1 className='mt-20 text-3xl text-white font-black text-shadow'>
					Random password generator
				</h1>

				<div className='mt-8 mb-6 flex gap-10 items-center justify-center'>
					<input
						type='text'
						value={password}
						className='bg-transparent border-b-2 border-white'
						disabled
					/>
					<button onClick={copyToClipboard} className={`hacktoberfest-btn ${clipboardAnimation}`}>
						<img src={clipboarIcon} alt='Clipboard icon no fill' />
					</button>
				</div>

				<button className='hacktoberfest-btn w-80' onClick={hanldeClick}>
					Generate password
				</button>

				<section className='mt-20'>
					<h2 className='text-xl font-bold'>[ Configure your password ]</h2>
					<div className='mt-5 flex items-center justify-center gap-5'>
						<p>Password length = {range}</p>
						<input
							type='range'
							defaultValue={DEFAULT_PASSWORD_LENGTH}
							min='6'
							max='50'
							onChange={hanldeSetRange}
						/>
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}
