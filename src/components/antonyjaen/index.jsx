import React, { useState } from 'react'
import style from './passwordGenerator.module.css'
import { randomString } from './randomPassword'
import SvgCopy from './svg/svgcopy'

const PasswordGenerator = () => {
	const [passwordLen, setPasswordLen] = useState(10)
	const [password, setPassword] = useState(null)
	const [fillColor, setFillColor] = useState('white')
	const [copied, setCopied] = useState(null)

	const handleGenerate = () => {
		let randomstring = randomString(passwordLen, '')
		setPassword(randomstring)
	}

	const onHandleCopy = () => {
		navigator.clipboard.writeText(password)
		setCopied(true)
		setTimeout(() => {
			setCopied(false)
		}, 2000)
	}

	return (
		<div className={style.main}>
			<h1 className='text-4xl py-6 text-white mt-5 text-center'>{passwordLen}</h1>

			<div style={{ display: 'inline-flex' }}>
				<h1 className='text-1xl text-semibold py-6 text-white mt-5 '>Password Length :</h1>
				<input
					className='accent-blue-400 mt-5 ml-3 w-80'
					type='range'
					min='1'
					max='20'
					value={passwordLen}
					onChange={(e) => {
						setPasswordLen(e.target.value)
					}}
				/>
			</div>

			<br />
			<button
				className='border border-blue-400 py-2 ml-20 text-blue-400 w-80'
				onClick={() => {
					handleGenerate()
				}}
			>
				Generate
			</button>

			{password && (
				<div className=' py-5 ml-20 text-white w-80  justify-center inline-flex '>
					{' '}
					{password}
					<SvgCopy
						className='justify-center mx-2'
						fill={fillColor}
						onMouseEnter={() => setFillColor('#60a5fa')}
						onClick={() => onHandleCopy()}
						onMouseLeave={() => setFillColor('white')}
					/>
				</div>
			)}
			{copied && (
				<div className=' py-2 ml-20 text-white w-80  justify-center inline-flex '>
					{' '}
					Copied to clipboard! 👌
				</div>
			)}
		</div>
	)
}

export default PasswordGenerator
