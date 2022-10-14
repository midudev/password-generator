import { useEffect, useState } from 'react'
import { Clipboard, ClipboardClicked } from './components/ClipboardIcons'
import { InputSwitch } from './components/InputSwitch'
import {
	randomPassword,
	pinCode,
	smartPassword,
	memorablePassword
} from './helper/passwordGenerator'
import SelectPasswordType from './components/SelectPasswordType'
import SelectSeparator from './components/SelectSeparator'
import { InputRangeSelector } from './components/InputRangeSelector'

function PasswordGenerator() {
	const [passwordLength, setPasswordLength] = useState(8)
	const [pinLength, setPinLength] = useState(4)
	const [password, setPassword] = useState(randomPassword({ length: passwordLength }))
	const [includeNumbers, setIncludeNumbers] = useState(false)
	const [includeSymbols, setIncludeSymbols] = useState(false)
	const [passwordType, setPasswordType] = useState('Smart Password')
	const [copied, setCopied] = useState(false)
	const [regenerate, setRegenerate] = useState(false)

	const [wordsNumber, setWordsNumber] = useState(6)
	const [separator, setSeparator] = useState('Hyphens')
	const [capitalize, setCapitalize] = useState(false)
	const [fullWords, setFullWords] = useState(false)

	function copyClipboard() {
		navigator.clipboard.writeText(password.join(''))
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
			setPassword(randomPassword({ length: passwordLength, includeNumbers, includeSymbols }))
		}

		if (passwordType === 'Memorable Password') {
			setPassword(memorablePassword({ wordsNumber, capitalize, fullWords, separator }))
		}

		if (passwordType === 'PIN Code') {
			setPassword(pinCode({ length: pinLength }))
		}
	}, [
		passwordLength,
		pinLength,
		wordsNumber,
		includeNumbers,
		includeSymbols,
		passwordType,
		regenerate,
		capitalize,
		fullWords,
		separator
	])

	function handleChange(e) {
		if (passwordType === 'PIN Code') {
			setPinLength(e.target.value)
		} else if (passwordType === 'Memorable Password') {
			setWordsNumber(e.target.value)
		} else {
			setPasswordLength(e.target.value)
		}
	}

	function checkLength(e) {
		let length = e.target.value
		let minLengthByType
		let maxLengthByType

		if (passwordType === 'PIN Code') {
			minLengthByType = 4
			maxLengthByType = 12
		} else if (passwordType === 'Memorable Password') {
			minLengthByType = 3
			maxLengthByType = 15
		} else {
			minLengthByType = 8
			maxLengthByType = 100
		}

		if (length < minLengthByType) {
			length = minLengthByType
		}

		if (length > maxLengthByType) {
			length = maxLengthByType
		}

		if (passwordType === 'PIN Code') {
			setPinLength(length)
		} else if (passwordType === 'Memorable Password') {
			setWordsNumber(length)
		} else {
			setPasswordLength(length)
		}
	}

	function checkCharType(char) {
		if (/^\d$/.test(char)) {
			return 'text-blue-400'
		} else if ([33, 42, 44, 45, 46, 64, 95].includes(char.charCodeAt(0))) {
			return 'text-red-400'
		} else {
			return ''
		}
	}

	return (
		<div className='relative text-white p-10 rounded-xl ring-1 ring-neutral-100/10 backdrop-blur w-full max-w-md bg-neutral-800/30 shadow mx-auto font-["JetBrains_Mono"]'>
			<div className='absolute flex -bottom-px left-1/2 -ml-48 h-[0.125rem] w-96'>
				<div className='w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]'></div>
				<div className='-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,rgba(14,165,233,0.5)_42.29%,rgba(236,72,153,0.4)_57.19%,rgba(236,72,153,0)_100%)]'></div>
			</div>

			<h1 className='text-3xl font-semibold capitalize mb-8 font-special'>Password Generator</h1>

			<div className='flex items-center justify-between mb-4'>
				<button
					type='button'
					className='inline-flex items-center px-4 py-2 bg-pink-600 hover:bg-pink-500 rounded-lg capitalize text-sm font-semibold tracking-wide'
					onClick={() => setRegenerate(!regenerate)}
				>
					Generate
				</button>

				<button
					className='group relative flex h-10 w-10 items-center justify-center rounded-lg hover:bg-neutral-500/20'
					onClick={copyClipboard}
				>
					{copied ? <ClipboardClicked /> : <Clipboard />}
				</button>
			</div>

			<div className='mb-4 text-xl truncate w-full px-4 py-2 rounded-lg ring-1 ring-zinc-600/70 transition duration-200 font-sans tracking-wider bg-neutral-900'>
				{password.map((char, idx) => (
					<span key={idx} className={checkCharType(char)}>
						{char}
					</span>
				))}
			</div>

			<div className='divide-y divide-neutral-100/10'>
				<SelectPasswordType
					label='Type'
					name='Type'
					value={passwordType}
					onChange={(e) => setPasswordType(e.target.value)}
				/>

				{passwordType === 'Random Password' && (
					<>
						<InputRangeSelector
							label='Characters'
							name='Characters'
							min={8}
							max={100}
							value={passwordLength}
							onChange={handleChange}
							onBlur={checkLength}
						/>

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
					</>
				)}

				{passwordType === 'Memorable Password' && (
					<>
						<InputRangeSelector
							label='Words'
							name='Words'
							min={3}
							max={15}
							value={wordsNumber}
							onChange={handleChange}
							onBlur={checkLength}
						/>

						<SelectSeparator
							label='Type'
							name='Type'
							value={separator}
							onChange={(e) => setSeparator(e.target.value)}
						/>

						<InputSwitch
							label='Capitalize'
							value={capitalize}
							onChange={() => setCapitalize(!capitalize)}
							className='py-4'
						/>

						<InputSwitch
							label='Full words'
							value={fullWords}
							onChange={() => setFullWords(!fullWords)}
							className='py-4'
						/>
					</>
				)}

				{passwordType === 'PIN Code' && (
					<InputRangeSelector
						label='Numbers'
						name='PIN Length'
						min={4}
						max={12}
						value={pinLength}
						onChange={handleChange}
						onBlur={checkLength}
					/>
				)}
			</div>
		</div>
	)
}

export default PasswordGenerator
