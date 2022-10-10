import { useEffect, useState } from 'react'
import { Clipboard, ClipboardClicked } from './ClipboardIcons'
import { InputSwitch } from './InputSwitch'
import { generatePassword, smartPassword } from './helper/passwordGenerator'
import style from './range.module.css'
import SelectPasswordType from './SelectPasswordType'

function PasswordGenerator() {
	const [passwordLen, setPasswordLength] = useState(8)
	const [password, setPassword] = useState(generatePassword({ length: passwordLen }))
	const [includeNumbers, setIncludeNumbers] = useState(false)
	const [includeSymbols, setIncludeSymbols] = useState(false)
	const [passwordType, setPasswordType] = useState('Smart Password')
	const [copied, setCopied] = useState(false)
	const [regenerate, setRegenerate] = useState(false)

	function copyClipboard() {
		navigator.clipboard.writeText(password)
		setCopied(true)
		setTimeout(() => {
			setCopied(false)
		}, 1500)
	}

	useEffect(() => {
		if (passwordType === 'Smart Password') {
			setPassword(smartPassword())
		}

		if (passwordType === 'Random Password') {
			let length = passwordLen

			if (length < 8) {
				length = 8
			}

			if (length > 100) {
				length = 100
			}

			setPassword(generatePassword({ length, includeNumbers, includeSymbols }))
		}
	}, [passwordLen, includeNumbers, includeSymbols, passwordType, regenerate])

	function handleChange(e) {
		let length = e.target.value

		if (length < 8) {
			length = 8
		}

		if (length > 100) {
			length = 100
		}

		setPasswordLength(e.target.value)
	}

	function checkLength(e) {
		let length = e.target.value

		if (length < 8) {
			length = 8
		}

		if (length > 100) {
			length = 100
		}

		setPasswordLength(length)
	}

	function checkCharType(char) {
		if (/^\d$/.test(char)) {
			return 'text-blue-400'
		} else if ([33, 42, 45, 46, 64, 95].includes(char.charCodeAt(0))) {
			return 'text-red-400'
		} else {
			return ''
		}
	}

	return (
		<div className='relative text-white p-10 rounded-lg ring-1 ring-neutral-100/10 backdrop-blur-md w-full max-w-md bg-neutral-800/50'>
			<div className='absolute flex -bottom-px left-1/2 -ml-48 h-[0.125rem] w-96'>
				<div className='w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]'></div>
				<div className='-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,rgba(14,165,233,0.5)_42.29%,rgba(236,72,153,0.4)_57.19%,rgba(236,72,153,0)_100%)]'></div>
			</div>

			<h1 className='text-3xl font-semibold capitalize mb-10'>Password Generator</h1>

			<button
				className='group relative flex h-10 w-10 items-center justify-center'
				onClick={copyClipboard}
			>
				{copied ? <ClipboardClicked /> : <Clipboard />}
			</button>

			<div className='mb-6 text-xl truncate w-full px-4 py-2 rounded-lg ring-1 ring-zinc-600/70'>
				{[...password].map((char, idx) => (
					<span key={idx} className={checkCharType(char)}>
						{char}
					</span>
				))}
			</div>

			<SelectPasswordType
				label='Password type'
				name='Password type'
				value={passwordType}
				onChange={(e) => setPasswordType(e.target.value)}
			/>

			{passwordType === 'Random Password' && (
				<div className='divide-y divide-neutral-100/10'>
					<div className='flex justify-between items-center text-base space-x-4 py-4'>
						<h1 className='font-semibold'>Characters</h1>

						<input
							type='range'
							min={8}
							max={100}
							className={style.inputRange}
							step={1}
							value={passwordLen}
							onChange={(e) => setPasswordLength(e.target.value)}
						/>

						<input
							type='text'
							className='w-10 text-white bg-neutral-900 ring-1 ring-zinc-600/70 rounded-lg text-center focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 focus:ring-offset-neutral-800 focus:outline-none'
							value={passwordLen}
							onChange={handleChange}
							onBlur={checkLength}
						/>
					</div>

					<InputSwitch
						label='Numbers'
						value={includeNumbers}
						onChange={() => setIncludeNumbers(!includeNumbers)}
						className='py-4'
					/>

					<InputSwitch
						label='Symbols'
						value={includeSymbols}
						onChange={() => setIncludeSymbols(!includeSymbols)}
						className='py-4'
					/>
				</div>
			)}

			<button
				className='bg-pink-500 hover:bg-pink-600 mt-6 w-full py-2 rounded-lg uppercase text-sm font-semibold tracking-wide'
				onClick={() => setRegenerate(!regenerate)}
			>
				Generate
			</button>
		</div>
	)
}

export default PasswordGenerator
