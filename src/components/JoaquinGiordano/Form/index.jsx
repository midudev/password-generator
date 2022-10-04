import { useEffect, useState, useRef } from 'react'
import CopyIcon from '@components/JoaquinGiordano/CopyIcon.jsx'
import styles from '../Styles.module.css'
const Form = () => {
	const [password, setPassword] = useState()
	const [passLength, setPassLength] = useState(16)
	const passInput = useRef(null)
	const handleLengthChange = (newLength) => {
		setPassLength(newLength)
	}

	const generatePassword = (length) => {
		const charSet = new Set('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@#$%?')
		const charArr = [...charSet]
		let newPass = ''

		for (let i = 0; i < length; i++) {
			const randNum = Math.floor(Math.random() * (charArr.length - 5)) + 4
			newPass += charArr[randNum]
		}
		return newPass
	}

	const handleNewPassword = () => {
		setPassword(generatePassword(passLength))
		document.querySelector('#JoaquinGiordano_main').style.filter = ` hue-rotate(${
			(passLength - 16) * 12
		}deg)`
	}

	const handleCopy = () => {
		navigator.clipboard.writeText(password)
		alert('Password Copied')
	}

	useEffect(() => {
		handleNewPassword()
	}, [passLength])

	return (
		<div
			id='container'
			className='w-full sm:w-4/6 xl:w-2/6 p-10 text-white flex flex-col gap-5 font-[system-ui]'
		>
			<div>
				<h1 className='font-bold text-blue-500 text-2xl text-left'>Password Generator</h1>
				<h2 className='text-blue-400 text-xl'>by Joaquin Giordano</h2>
			</div>
			<div className='flex gap-2 w-full'>
				<input
					className='w-full font-bold bg-blue-500 px-3 py-2 rounded outline-none'
					ref={passInput}
					defaultValue={password}
					type='text'
					disabled
				/>
				<button
					className='bg-blue-500 hover:bg-blue-600 duration-500 px-3 rounded outline-none'
					onClick={handleCopy}
				>
					<CopyIcon />
				</button>
			</div>
			<input
				type='range'
				className={styles['jg-range']}
				defaultValue={16}
				min={4}
				max={28}
				onChange={(e) => {
					handleLengthChange(e.target.value)
				}}
			/>

			<button
				className='bg-blue-500 hover:bg-blue-600 duration-500 py-3 rounded outline-none'
				onClick={handleNewPassword}
			>
				Generate
			</button>
		</div>
	)
}

export default Form
