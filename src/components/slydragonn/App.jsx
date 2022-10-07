import React from 'react'
import { Button, Card, Slider } from './components'
import useGenerator from './hooks'

const App = () => {
	const [password, generatePassword, Config] = useGenerator()

	return (
		<section className='flex justify-center items-center mt-16'>
			<section className='flex flex-col items-center w-full p-5'>
				<h1 className='text-white text-2xl sm:text-4xl font-bold uppercase'>
					Password Generator &#9752;
				</h1>
				<Card>{password}</Card>
				<Slider handleChange={Config.setLength} />
				<Button handleClick={generatePassword} message='Generate Password' />
			</section>
		</section>
	)
}

export default App
