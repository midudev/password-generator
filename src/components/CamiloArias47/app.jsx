import React, { useState } from 'react'

import useGenerator from './generator'
import CopyIcon from './icons/copy'

import './styles/app-styles.css'

const MAX = 12

export default function App() {
	const [copied, setCopied] = useState(false)
	const [passwordSize, setPasswordSize] = useState(9)

	const {
		password,
		generateBySize,
		generateByBtn
	} = useGenerator()

	generateBySize(passwordSize)

	const handlerSize = e => {
		setPasswordSize(e.target.value)
		if (copied) setCopied(false)
	}

	const handlerClickBtn = () => {
		generateByBtn(passwordSize)
		if (copied) setCopied(false)
	}

	const handlerClickCopy = () => {
		if (password) {
			navigator.clipboard.writeText(password)
			setCopied(true)
		}
	}

	const bgSize = { backgroundSize: `${(passwordSize * 100) / MAX}% 100%` }

	return (
		<div id='camilo-arias-47-app' className='app'>
			<section>
				<h1>
					Random
					<span className='char char--simple'> G</span>
					<span className='char char--animated char--animatedE'></span>
					<span className='char char--simple'>n</span>
					<span className='char char--animated char--animatedE--delayed'></span>
					<span className='char char--simple'>r</span>
					<span className='char char--animated char--animatedA'></span>
					<span className='char char--animated char--animatedT'></span>
					<span className='char char--animated char--animated0'></span>
					<span className='char char--simple'>r</span>
				</h1>

				<div className='password-result'>
					<span className='password-result__offset'></span>
					<span className='password-result__password'>{ password }</span>
					<span className='password-result__copy'>
						<button
							className={`password-result__btn ${copied && 'password-result__btn--copied'}`}
							onClick={handlerClickCopy}>
							<CopyIcon/>
						</button>
					</span>
				</div>

				<input
					type='range'
					className='input-lenght'
					value={ passwordSize }
					style={ bgSize }
					onChange={ handlerSize }
					min='6'
					max={MAX}
				/>

				<button
					className='generate-btn'
					onClick={ handlerClickBtn }
				>
					Generate Password
				</button>
			</section>
		</div>
	)
}
