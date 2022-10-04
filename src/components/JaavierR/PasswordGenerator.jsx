import { useState } from 'react'
import { Clipboard, ClipboardClicked } from './ClipboardIcons'
import { generatePassword } from './passwordGenrator'
import style from './range.module.css'


function PasswordGenerator() {
	const [passwordLen, setPasswordLen] = useState(8)
	const [password, setPassword] = useState(generatePassword({ length: passwordLen }))
	const [copied, setCopied] = useState(false)

	function copyClipboard() {
		navigator.clipboard.writeText(password)
		setCopied(true)
		setTimeout(() => {
			setCopied(false)
		}, 1500)
	}

	return (
		<div className='relative text-white p-10 rounded-lg ring-1 ring-neutral-100/10 backdrop-blur-md w-full max-w-md'>
			<div className='absolute flex -bottom-px left-1/2 -ml-48 h-[0.125rem] w-96'>
				<div className='w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]'></div>
				<div className='-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,rgba(14,165,233,0.5)_42.29%,rgba(236,72,153,0.4)_57.19%,rgba(236,72,153,0)_100%)]'></div>
			</div>

			<h1 className='text-center text-3xl font-semibold uppercase mb-10'>Password Generator</h1>

			<div className='mb-8 flex items-center justify-between'>
				<span className='text-xl truncate w-full'>
					{password }
				</span>

				<button
					className='group relative ml-2 flex h-10 w-10 items-center justify-center'
					onClick={copyClipboard}
				>
					{copied ? <ClipboardClicked /> : <Clipboard />}
				</button>
			</div>

			<div className='flex justify-between text-lg'>
				<h1 className='font-semibold'>Character length</h1>
				<span>{passwordLen}</span>
			</div>

			<input
				type='range'
				min={8}
				max={100}
				className={style.inputRange}
				step={1}
				value={passwordLen}
				onChange={(e) => setPasswordLen(e.target.value)}
			/>

			<button
				className='bg-pink-500 hover:bg-pink-600 mt-6 w-full py-2 rounded-lg uppercase text-sm font-semibold tracking-wide'
				onClick={() => setPassword(generatePassword({ length: passwordLen }))}
			>
				Generate
			</button>
		</div>
	)
}

export default PasswordGenerator
