import React, { useState, useEffect } from 'react'
import styles from './Goku.module.css'
import { generatePassword, LEVEL_NAMES } from './utils/utils'

export default function Goku({ level = 0 }) {
	const { saiyan, saiyan2, god, blue, ultra } = styles
	const levelClass = ['', saiyan, saiyan2, god, blue, ultra]
	const MAX_LEVEL = levelClass.length
	if (level > MAX_LEVEL) level = 0
	const [levelState, setLevelState] = useState(level)
	const [passwordGen, setPasswordGen] = useState('1234')
	const [isCopied, setIsCopied] = useState(false)
	const [change, setChange] = useState(null)
	const classes = [styles.Goku, levelClass[levelState]].join(' ')

	const handleClick = () => {
		setIsCopied(false)
		setLevelState((prev) => {
			if (prev >= levelClass.length - 1) return 0
			return prev + 1
		})
		setChange(styles.change)
		if (!change) {
			setTimeout(() => {
				setChange(null)
			}, 550)
		}

		console.log('Aaahhhhhh!!')
	}

	const handleCopy = () => {
		if (passwordGen.length > 0) {
			navigator.clipboard.writeText(passwordGen)
			setIsCopied(true)
		}
	}

	useEffect(() => {
		setPasswordGen(generatePassword(levelState))
	}, [levelState])

	return (
		<div className='flex flex-wrap flex-col md:flex-row items-center justify-center text-center max-w-lg bg-orange-400 rounded-xl border-double border-8 border-orange-600 p-2 relative'>
			<div className='scale-50 absolute top-10 z-10' onClick={handleClick}>
				<div className={[classes, change].join(' ')}></div>
			</div>
			<div>
				<h2 className='text-xl mb-2'>
					PASSWORD KI:
					<button className='text-lg mb-2 bg-orange-600 p-1' type='button' onClick={handleClick}>
						+
					</button>
				</h2>
				<h3 className='md:text-xl mb-2'>{LEVEL_NAMES[levelState].toUpperCase()}</h3>
				<div className='relative'>
					<input
						className='bg-black w-full text-center md:text-xl p-2 rounded-xl text-white border-dashed border-4 border-gray-500'
						type='text'
						name='passgen'
						id='passgen'
						value={passwordGen}
						onClick={handleCopy}
						title='Click to copy'
						readOnly
					/>
					<div className='absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-75'>
						<svg width={24} height={24} xmlns='http://www.w3.org/2000/svg' fill='white'>
							<path
								fillRule='evenodd'
								d='M7.024 3.75c0-.966.784-1.75 1.75-1.75H20.25c.966 0 1.75.784 1.75 1.75v11.498a1.75 1.75 0 0 1-1.75 1.75H8.774a1.75 1.75 0 0 1-1.75-1.75V3.75zm1.75-.25a.25.25 0 0 0-.25.25v11.498c0 .139.112.25.25.25H20.25a.25.25 0 0 0 .25-.25V3.75a.25.25 0 0 0-.25-.25H8.774z'
							/>
							<path d='M1.995 10.749a1.75 1.75 0 0 1 1.75-1.751H5.25a.75.75 0 1 1 0 1.5H3.745a.25.25 0 0 0-.25.25L3.5 20.25c0 .138.111.25.25.25h9.5a.25.25 0 0 0 .25-.25v-1.51a.75.75 0 1 1 1.5 0v1.51A1.75 1.75 0 0 1 13.25 22h-9.5A1.75 1.75 0 0 1 2 20.25l-.005-9.501z' />
						</svg>
					</div>
				</div>
				{isCopied && <p className='mt-2'>Copied</p>}
			</div>
		</div>
	)
}
