import React, { useState } from 'react'
import { Form } from './components/Form'
import { AppContext } from './context'

function PGApp() {
	const [state, setState] = useState({
		password: ''
	})
	return (
		<AppContext.Provider value={{ state, setState }}>
			<main className='flex justify-center items-center flex-col min-h-screen bg-[rgb(8,7,11)]'>
				<h1 className='text-white font-mono  text-center text-3xl font-semibold mb-10'>
					Password Generator
				</h1>
				<Form />
			</main>
		</AppContext.Provider>
	)
}

export default PGApp
