import React from 'react'
import { Card } from '.'
import './styles/index.css'

const PassWordGenerateApp = () => {
	return (
		<main>
			<div className='relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12'>
				<div className='relative w-full bg-slate-800 px-6 pt-10 pb-8 shadow-xl ring-1 ring-slate-600 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10'>
					<Card />
				</div>
			</div>
		</main>
	)
}

export default PassWordGenerateApp
