import React from 'react'
import { Button, Cat, Form, Slider, CopyButton } from './components'
import useGenerator from './hooks'
import './styles/App.css'

const App = () => {
	const [password, generatePassword, Config] = useGenerator()

	return (
		<section className='flex justify-center items-center'>
			<section
				id='app-slydragonn'
				className='relative flex flex-col items-center w-full min-h-[100vh] p-5 overflow-hidden'
			>
				<h1 className='text-white text-2xl sm:text-4xl font-thin uppercase underline italic'>
					Meow Generator &#9752;
				</h1>
				<Cat passwordValue={password} length={Config.length} />
				<Form>
					<Slider handleChange={Config.setLength} />
					<div className='flex items-center'>
						<Button handleClick={generatePassword} message='Generate作成する' />
						<CopyButton value={password} />
					</div>
				</Form>
				<h2 className='z-0 absolute left-10 hidden sm:block w-1 text-white text-2xl sm:text-5xl select-none transition-all duration-300'>
					猫がパスワードを作る
				</h2>
				<h2 className='z-0 absolute right-10 hidden md:block w-44 text-white font-thin text-3xl uppercase break-words italic text-end select-none'>
					cat password generator
				</h2>
				<span className='absolute bottom-2 right-2 text-white font-thin text-xs md:text-sm'>
					Made with &#10084; by{' '}
					<a href='https://github.com/slydragonn' target='_blank'>
						slydragonn
					</a>
				</span>
			</section>
		</section>
	)
}

export default App
