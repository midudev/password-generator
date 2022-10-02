import './style.css'
import React, { useState } from 'react'
import CheckboxCustom from './CheckboxCustom'
import Level from './Level'
import IconCopy from './IconCopy'

const CardKevin = () => {
	const [Range, setRange] = useState(10)
	const [Password, setPassword] = useState('Password')
	const [Options, setOptions] = useState({
		upperCase: false,
		lowerCase: false,
		numbers: false,
		symbols: false
	})

	const createPassword = () => {
		if (
			Options.upperCase === false &&
			Options.lowerCase === false &&
			Options.numbers === false &&
			Options.symbols === false
		) {
			alert('You must select at least one option')
			return
		}
		const numbers = Options.numbers ? '0123456789' : ''
		const lowerCase = Options.lowerCase ? 'abcdefghijklmnopqrstuvwxyz' : ''
		const upperCase = Options.upperCase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : ''
		const symbols = Options.symbols ? '!@#$%^&*_-+=' : ''
		const all = numbers + lowerCase + upperCase + symbols
		let password = ''
		for (let i = 0; i < Range; i++) {
			password += all[Math.floor(Math.random() * all.length)]
		}
		setPassword(password)
	}

	return (
		<div className='min-h-screen p-2   flex flex-col justify-center items-center font-sans '>
			<h2 className=' text-lg mb-5 text-[#61606c] text-center'>Password Generator</h2>
			<div className='flex w-full  sm:w-1/2 lg:w-1/3  justify-between bg-[#24232b] px-5 py-3'>
				<h4 className='text-white'>{Password}</h4>
				<button
					className='text-[#a3ffae] mr-5'
					onClick={async () => {
						await navigator.clipboard.writeText(Password)
						alert('Password copied to clipboard: ' + Password)
					}}
				>
					<IconCopy color={'#a3ffae'} />
				</button>
			</div>

			<div className='mt-5 w-full sm:w-1/2 lg:w-1/3  bg-[#24232b] px-5 py-3'>
				<div className='flex justify-between'>
					<p className='text-white'>Cantidad de caracteres</p>
					<h4 className='text-xl font-semibold text-[#a3ffae] '>{Range}</h4>
				</div>
				<input
					onChange={(e) => {
						setRange(parseFloat(e.target.value))
						const value = (e.target.value / 20) * 100

						e.target.style.background = `linear-gradient(
						to right,
						#a3ffae 0%,
						#a3ffae ${value}%,
						#17161f ${value}%,
						#17161f 100%
					)`
					}}
					className='w-full my-5 appearance-none rounded-lg h-2 slider '
					type={'range'}
					value={Range}
					max={20}
					min={0}
					step={1}
				></input>
				<ul>
					<li className='w-full'>
						<CheckboxCustom
							id={'[Options.upperCase]'}
							activate={Options.upperCase}
							onClick={() => setOptions({ ...Options, upperCase: !Options.upperCase })}
							title={'Include Uppercase Letter'}
						/>
					</li>
					<li className=' w-full'>
						<CheckboxCustom
							id={'[Options.lowercase]'}
							activate={Options.lowerCase}
							onClick={() => setOptions({ ...Options, lowerCase: !Options.lowerCase })}
							title={'Include Lowercase Letter'}
						/>
					</li>
					<li className=' w-full'>
						<CheckboxCustom
							id={'[Options.number]'}
							activate={Options.numbers}
							onClick={() => setOptions({ ...Options, numbers: !Options.numbers })}
							title={'Include Numbers'}
						/>
					</li>
					<li className=' w-full'>
						<CheckboxCustom
							id={'[Options.symbols]'}
							activate={Options.symbols}
							onClick={() => setOptions({ ...Options, symbols: !Options.symbols })}
							title={'Include Symbols'}
						/>
					</li>
				</ul>
				<div className='flex justify-between items-center bg-[#18171f] py-3 px-3 mt-5'>
					<h4 className='text-[#a29fa8]'>STRENGTH</h4>
					<Level
						nivel={
							Object.entries(Options).filter((d) => d[1] === true).length <= 1
								? 'LOW'
								: Object.entries(Options).filter((d) => d[1] === true).length === 4
									? 'HIGH'
									: 'MEDIUM'
						}
						quantity={Object.entries(Options).filter((d) => d[1] === true).length}
					></Level>
				</div>
				<button onClick={createPassword} className='w-full mt-5 text-[#18171f] bg-[#a3ffae] py-3 '>
					GENERATE +
				</button>
			</div>
		</div>
	)
}

export default CardKevin
