import React from 'react'
import { usePasswordGenerator } from '../../hooks/angelograngetto/usePasswordGenerator'

/*
	TODO:
		- Agregar estilos
		- Agregar aviso de contraseña copiada
		- Refactor code
*/

const Card = () => {
	const { pass, generatePass, length, onSetLength, onCopy } = usePasswordGenerator()
	return <section className='flex flex-col'>
		<button onClick={() => onCopy()}>Copy</button>
		<input value={pass} readOnly />
		<button onClick={() => generatePass()}>Generate</button>
		<input type='range' min='8' max='128' step='1' value={length} onChange={onSetLength} />
		<p>{length} characters</p>
	</section>
}

export default Card