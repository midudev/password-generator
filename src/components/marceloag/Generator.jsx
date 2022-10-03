import { useState, useEffect } from 'react'

function Generator() {
	const [password, setPassword] = useState('')
	const [passLength, setPassLength] = useState(6)
	const inputStyle = {
		fontFamily: 'Anonymous Pro'
	}

	useEffect(() => {
		return () => {
			generatePass()
		}
	}, [passLength])

	// Copiar al portapapeles
	async function copyClipboard() {
		if ('clipboard' in navigator) {
			return await navigator.clipboard.writeText(password)
		} else {
			return document.execCommand('copy', true, password)
		}
	}

	function generatePass() {
		let generatedPass = ''
		const chars = '0123456789abcdefghijklmnñopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ'
		for (let i = 0; i < passLength; i++) {
			const randomNumber = Math.floor(Math.random() * chars.length)
			generatedPass += chars.substring(randomNumber, randomNumber + 1)
		}
		setPassword(generatedPass)
	}

	function checkStrength(password) {
		// ((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))
	}

	return (
		<div
			id='container'
			className='shadow-2xl shadow-gray-300 p-10 flex flex-col gap-4 lg:w-4/12 w-11/12 rounded-xl bg-white'
		>
			<div id='generator' className='flex flex-row gap-2 items-end justify-around'>
				<input
					value={password}
					className='flex-1 border-b-2 border-gray-200 py-2 text-gray-700 font-bold text-lg'
					placeholder='Your Password'
					id='generatedPass'
					onChange={(e) => setPassword(e.target.value)}
					style={inputStyle}
				/>
				<a
					id='copy'
					class='bg-indigo-700 p-2 rounded-md cursor-pointer'
					onClick={() => copyClipboard()}
				>
					<svg class='svg-icon' viewBox='0 0 20 20' fill='white' width={20} height={30}>
						<path d='M17.391,2.406H7.266c-0.232,0-0.422,0.19-0.422,0.422v3.797H3.047c-0.232,0-0.422,0.19-0.422,0.422v10.125c0,0.232,0.19,0.422,0.422,0.422h10.125c0.231,0,0.422-0.189,0.422-0.422v-3.797h3.797c0.232,0,0.422-0.19,0.422-0.422V2.828C17.812,2.596,17.623,2.406,17.391,2.406 M12.749,16.75h-9.28V7.469h3.375v5.484c0,0.231,0.19,0.422,0.422,0.422h5.483V16.75zM16.969,12.531H7.688V3.25h9.281V12.531z'></path>
					</svg>
				</a>
			</div>
			<div id='range'>
				<label
					for='minmax-range'
					className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
				>
					Password Length {passLength}
				</label>
				<input
					id='minmax-range'
					type='range'
					min={6}
					max={22}
					value={passLength}
					onChange={(event) => setPassLength(event.target.value)}
					className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer'
				/>
			</div>
			<button class='bg-indigo-600 text-white px-10 py-3 rounded-xl' onClick={() => generatePass()}>
				Generate Password
			</button>
		</div>
	)
}

export default Generator
