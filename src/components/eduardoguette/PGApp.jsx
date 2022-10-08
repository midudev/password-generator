import React, { useState } from 'react'
import { Form } from './components/Form'

function PGApp() {
	const [pass, setPass] = useState('')
	return (
		<main className='grid place-content-center min-h-screen'>
			<h1 className='text-white font-mono mb-8 text-center text-xl '>Genere una contraseña segura</h1>
			<Form pass={pass} setPass={setPass}/>
		</main>
	)
}

export default PGApp
