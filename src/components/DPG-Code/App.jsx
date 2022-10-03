import React from 'react'
import Form from './components/Form'
import Instructions from './components/Instructions'
import './index.css'

function App () {
	return (
		<main id='dpg-code' className='m-auto py-10 flex flex-col gap-6 items-center justify-center   md:py-16 md:flex-row md:gap-12 md:items-start   2xl:py-32 2xl:gap-24'>
			<Instructions />
			<Form />
		</main>
	)
}
export default App
