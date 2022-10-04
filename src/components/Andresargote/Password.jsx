import { useState } from 'react'

export function Password({ password }) {
	const [isCopied, setIsCopied] = useState(false)

	const copyToClipboard = () => {
		navigator.clipboard.writeText(password)
		setIsCopied(true)
		setTimeout(() => setIsCopied(false), 1500)
	}

	return (
		<div className='bg-white flex items-center justify-between px-1 sm:px-6 py-3 rounded flex-wrap'>
			<output className='font-mono text-sm sm:text-2xl text-white text-gray-900'>{password}</output>
			<button
				className={`rounded-full px-2 md:px-3 py-1 border ${
					isCopied ? 'bg-green-500' : 'bg-black'
				} text-white text-sm font-mono p-0 ${
					!isCopied &&
					'hover:bg-white hover:border hover:text-black transition hover:ease-in duration-200'
				}`}
				aria-label='Copy'
				onClick={copyToClipboard}
			>
				{isCopied ? 'Copiado!' : 'Copiar'}
			</button>
		</div>
	)
}
