import { useState } from 'react'
import './style.css'
import CopySVG from './svg/CopySVG'
import ArrowSVG from './svg/ArrowSVG'
import LogoHack from './svg/LogoHack'
import randomPassword from './randomPassword'

export default function PassGen() {
	const [input, setInput] = useState(12)
	const [password, setPassword] = useState('')

	function myFunction() {
		const copyText = document.getElementById('myInput')
		copyText.select()
		copyText.setSelectionRange(0, 99999)
		navigator.clipboard.writeText(copyText.value)
		alert('Copied password: ' + copyText.value)
	}
	return (
		<div className='containerPassGen'>
			<header className='headerContainer'>
				<a href='https://hacktoberfest.com/' target='_blank'>
					<LogoHack />
				</a>
			</header>
			<h1 className='title'>Password generator</h1>
			<div className='containerInputPass'>
				<input
					className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cyan-600 inputCont'
					type='text'
					id='myInput'
					defaultValue={password} />
				<button className='svgCopy' onClick={() => myFunction()}>
					<CopySVG />
				</button>
				<button className='svgGenerate' onClick={() => setPassword(randomPassword(input))}>
					<ArrowSVG />
				</button>
			</div>
			<div className='containerRange'>
				<input
					className='inputRange'
					type='range'
					min='1'
					max='25'
					value={input}
					onChange={(e) => setInput(e.target.value)} />
				<label className='labelRange'>{input}</label>
			</div>
			<div className='containerButton'>
				<button className='button' onClick={() => setPassword(randomPassword(input))}>
				Generate
				</button>
				<button className='button' onClick={() => myFunction()}>
				Copy
				</button>
			</div>
		</div>
	)
}