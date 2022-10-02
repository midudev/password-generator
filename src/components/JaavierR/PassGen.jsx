import { useState } from 'react'
import style from './range.module.css'

function getUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26 + 65))
}

function getLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26 + 97))
}

function getNumber() {
	return Math.floor(Math.random() * 10)
}

function generatePassword({ length }) {
	let password = ''

	for (let i = 0; i < parseInt(length); i++) {
		const x = Math.random()

		if (x < 0.33) {
			password += getUpper()
		} else if (x > 0.33 && x < 0.66) {
			password += getLower()
		} else {
			password += getNumber()
		}
	}

	return password
}

function Clipboard() {
	return (
		<svg className='h-9 w-9 stroke-zinc-400 transition group-hover:rotate-[-4deg] group-hover:stroke-zinc-500' fill='none' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'>
			<path d='M12.9975 10.7499L11.7475 10.7499C10.6429 10.7499 9.74747 11.6453 9.74747 12.7499L9.74747 21.2499C9.74747 22.3544 10.6429 23.2499 11.7475 23.2499L20.2475 23.2499C21.352 23.2499 22.2475 22.3544 22.2475 21.2499L22.2475 12.7499C22.2475 11.6453 21.352 10.7499 20.2475 10.7499L18.9975 10.7499' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'></path>
			<path d='M17.9975 12.2499L13.9975 12.2499C13.4452 12.2499 12.9975 11.8022 12.9975 11.2499L12.9975 9.74988C12.9975 9.19759 13.4452 8.74988 13.9975 8.74988L17.9975 8.74988C18.5498 8.74988 18.9975 9.19759 18.9975 9.74988L18.9975 11.2499C18.9975 11.8022 18.5498 12.2499 17.9975 12.2499Z' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'></path>
			<path d='M13.7475 16.2499L18.2475 16.2499' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'></path>
			<path d='M13.7475 19.2499L18.2475 19.2499' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'></path>
			<g className='opacity-0'>
				<path d='M15.9975 5.99988L15.9975 3.99988' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'></path>
				<path d='M19.9975 5.99988L20.9975 4.99988' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'></path>
				<path d='M11.9975 5.99988L10.9975 4.99988' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'></path>
			</g>
		</svg>
	)
}

function ClipboardClicked() {
	return (
		<>
			<span className='absolute inset-x-0 bottom-full mb-2.5 flex justify-center scale-100 translate-y-0 opacity-100'>
				<span className='rounded-md bg-zinc-100 py-1 px-3 text-[0.625rem] font-semibold uppercase leading-4 tracking-wide text-zinc-900 drop-shadow-md filter'>
					<svg aria-hidden='true' width='16' height='6' viewBox='0 0 16 6' className='absolute top-full left-1/2 -mt-px -ml-2 text-zinc-100'>
						<path fillRule='evenodd' clipRule='evenodd' d='M15 0H1V1.00366V1.00366V1.00371H1.01672C2.72058 1.0147 4.24225 2.74704 5.42685 4.72928C6.42941 6.40691 9.57154 6.4069 10.5741 4.72926C11.7587 2.74703 13.2803 1.0147 14.9841 1.00371H15V0Z' fill='currentColor'></path>
					</svg>
							Copied!
				</span>
			</span>
			<svg className='h-9 w-9 rotate-[-8deg] stroke-[#ec4899]' fill='none' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'>
				<path d='M12.9975 10.7499L11.7475 10.7499C10.6429 10.7499 9.74747 11.6453 9.74747 12.7499L9.74747 21.2499C9.74747 22.3544 10.6429 23.2499 11.7475 23.2499L20.2475 23.2499C21.352 23.2499 22.2475 22.3544 22.2475 21.2499L22.2475 12.7499C22.2475 11.6453 21.352 10.7499 20.2475 10.7499L18.9975 10.7499' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'></path>
				<path d='M17.9975 12.2499L13.9975 12.2499C13.4452 12.2499 12.9975 11.8022 12.9975 11.2499L12.9975 9.74988C12.9975 9.19759 13.4452 8.74988 13.9975 8.74988L17.9975 8.74988C18.5498 8.74988 18.9975 9.19759 18.9975 9.74988L18.9975 11.2499C18.9975 11.8022 18.5498 12.2499 17.9975 12.2499Z' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'></path>
				<path d='M13.7475 16.2499L18.2475 16.2499' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'></path>
				<path d='M13.7475 19.2499L18.2475 19.2499' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'></path>
				<g>
					<path d='M15.9975 5.99988L15.9975 3.99988' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'></path>
					<path d='M19.9975 5.99988L20.9975 4.99988' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'></path>
					<path d='M11.9975 5.99988L10.9975 4.99988' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'></path>
				</g>
			</svg>
		</>
	)
}

function PassGen() {
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

			<div className='mb-8 flex items-center justify-between'>
				<h1 className={`text-xl truncate ${password ? '' : 'text-zinc-500 uppercase'}`}>
					{password || 'Click generate'}
				</h1>
				<button
					className='group relative ml-2 hidden h-10 w-10 items-center justify-center sm:flex'
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

export default PassGen
