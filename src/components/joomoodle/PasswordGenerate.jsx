import React, { useCallback, useState } from 'react'

export const useTimeoutState = (defaultState) => {
	const [state, _setState] = useState(defaultState)
	const [currentTimeoutId, setCurrentTimeoutId] = useState()

	const setState = useCallback(
		(action, opts) => {
			if (currentTimeoutId != null) {
				clearTimeout(currentTimeoutId)
			}

			_setState(action)
			const id = setTimeout(() => _setState(defaultState), opts?.timeout)
			setCurrentTimeoutId(id)
		},
		[currentTimeoutId, defaultState]
	)
	return [state, setState]
}

const generatePwd = (length) => {
	let pass = ''
	const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz0123456789@#$'

	for (let i = 1; i <= length; i++) {
		const char = Math.floor(Math.random() * str.length + 1)
		pass += str.charAt(char)
	}
	return pass
}

const ButtonIcon = ({ onClick }) => {
	return (
		<button
			className={'bg-[#6D676E] w-[10%] h-20 rounded-r-lg flex items-center justify-center'}
			title='Copiar'
			onClick={onClick}
		>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 24 24'
				fill='none'
				height={20}
				width={20}
				stroke='currentColor'
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
				class='feather feather-clipboard'
			>
				<path d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'></path>
				<rect x='8' y='2' width='8' height='4' rx='1' ry='1'></rect>
			</svg>
		</button>
	)
}
export default function PasswordGenerate() {
	const [rangeNumber, setRangeNumber] = useState(10)
	const [password, setPassword] = useState()
	const [showLoading, setShowLoading] = useTimeoutState(false)

	return (
		<div className='flex flex-col justify-center items-center p-10 h-full gap-5'>
			<h1 className='text-white font-bold text-[30px] font-mono'>
				Generador de contraseñas ramdom
			</h1>

			<div className='bg-[#FAA916] rounded-10 w-[500px] min-h-[200px]'>
				<div className='flex flex-col w-full py-4 px-5'>
					<label className='font-mono text-[#222] font-bold text-[20px] font-[Jet Brains Mono] flex flex-row justify-between items-center'>
						Estable el numero de caracteres
						<span className='font-[#222] text-[30px]'>{rangeNumber}</span>
					</label>
					<input
						type='range'
						step={1}
						min={8}
						max={30}
						onChange={({ target: { value } }) => setRangeNumber(value)}
						value={rangeNumber}
					/>
				</div>
				<div className='flex flex-col w-full py-4 px-5'>
					<button
						className='w-full p-2  bg-[#1B1B1E] text-white font-bold font-mono'
						onClick={() => {
							const pwdGenerate = generatePwd(rangeNumber)
							if (pwdGenerate) setPassword(pwdGenerate)
						}}
					>
						Generar Contraseña
					</button>
				</div>
				<div className='flex flex-row w-full py-4 px-5'>
					<input
						readOnly
						value={password}
						className={
							'border-t-2 border-b-2 border-l-2 border-[#6D676E] text-[#222] text-bold text-[38px] text-center w-[90%] h-20 rounded-l-lg'
						}
					/>
					<ButtonIcon
						onClick={() => {
							navigator.clipboard.writeText(password || '')
							setShowLoading(true, { timeout: 3000 })
						}}
					/>
				</div>
			</div>
			{showLoading && (
				<div className='bg-[#FAA916] absolute top-[10%] left-[80%] py-4 px-5 rounded-lg z-10'>
					<span className='text-[18px] text-[#222] font-700'>Contraseña copiada</span>
				</div>
			)}
		</div>
	)
}
