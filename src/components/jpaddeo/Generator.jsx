import { useState } from 'react'

import GeneratorOptions from '@components/jpaddeo/GeneratorOptions'
import Clipboard from '@components/jpaddeo/icons/Clipboard'

import {
	PasswordGeneratorContextProvider,
	usePasswordGenerator
} from '@components/jpaddeo/hooks/usePasswordGenerator.jsx'

function InnerGenerator() {
	const [copying, setCopying] = useState(false)

	const { generatePassword, generatedPassword } = usePasswordGenerator()

	const handleCopy = (e) => {
		setCopying(true)
		navigator.clipboard.writeText(generatedPassword).then(
			() => {
				setCopying(false)
				console.log('Copiado')
			},
			() => {
				setCopying(false)
				console.log('No Copiado')
			}
		)
	}

	const handleRefresh = (e) => {
		generatePassword()
	}

	return (
		<section className='flex flex-col items-center justify-center gap-4 bg-red-500 max-w-sm md:max-w-lg mx-auto p-6 mt-6 rounded-lg shadow-md shadow-gray-200'>
			<h1 className='text-white text-2xl uppercase mt-2'>Password Generator</h1>
			<span className='bg-gray-900 dark:bg-gray-200 p-6 rounded-xl'>
				{generatedPassword || 'Generating...'}
			</span>
			<GeneratorOptions />
			<div>
				<div className='flex items-center justify-between gap-4'>
					<button onClick={handleRefresh} className='bg-gray-400 text-white px-4 py-2 rounded-2xl'>
						Refresh
					</button>
					<button
						onClick={handleCopy}
						className='bg-blue-400 text-white px-4 py-2 rounded-2xl'
						disabled={copying}
					>
						{copying ? 'Copiando...' : 'Copiar'}
						<Clipboard className='w-6 h-6' />
					</button>
				</div>
			</div>
		</section>
	)
}

export default function Generator() {
	return (
		<PasswordGeneratorContextProvider>
			<InnerGenerator />
		</PasswordGeneratorContextProvider>
	)
}
