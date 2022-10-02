import React, { useState, useEffect } from 'react'

function App() {
	const minLength = 8
	const [length, setLength] = useState(minLength)
	const [password, setPassword] = useState('********')
	const [copyText, setCopyTest] = useState('Copy')

	useEffect(() => {
		generatePassword(minLength)
	}, [])

	const generatePassword = (length) => {
		setCopyTest('Copy')
		const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!"#$%&/()=?¡*[]{}-_'
		let result = ''
		const charactersLength = characters.length
		for (let i = 0; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength))
		}
		setPassword(result)
	}

	const onChangeLength = (e) => {
		setCopyTest('Copy')
		const length = e.target.value
		generatePassword(length)
		setLength(length)
	}

	const copyToClipboard = () => {
		setCopyTest('Copied!')
		navigator.clipboard.writeText(password)
	}

	return (
		<div className='grid h-screen place-items-center'>
			<div className='text-white flex flex-col justify-center items-center'>
				<h1 className='text-2xl my-8'>Generate a Password</h1>
				<section className='flex flex-row'>
					<input type={'range'} min={minLength} max={30} onInput={onChangeLength} defaultValue={minLength}/>
					<p className='text-md ml-5'>{length}  characters</p>
				</section>
				<section className='flex flex-row items-center my-8'>
					<p>{password}</p>
					<button onClick={copyToClipboard} className='items-center text-sm flex flex-row space-x-10 border p-2 ml-5 rounded-md hover:bg-blue-500 font-special hover:border-blue-500'>
						{copyText}
						<img src='/src/pages/entry/camilonore/assets/copy.png' alt='copy icon' className='pl-2 h-4 flex'/>
					</button>
				</section>
				<button className='text-lg bg-transparent border p-2 ml-5 rounded-md hover:bg-blue-500 font-special hover:border-blue-500' onClick={() => generatePassword(length)}> Generate New</button>
			</div>
		</div>
	)
}

export default App