import React, { useState } from 'react'

export const PasswordGenerator = () => {
	const [passwordLength, setPasswordLength] = useState(8)
	console.log({ passwordLength });

	function handleChangeLength (e) {
		console.log("---")

	}

	return (
		<div className="grid justify-items-center  gap-2">
			<ul>Agregar:
				<li>Mayusculas: <input type='checkbox' name='uppercase' /></li>
				<li>Minúsculas: <input type='checkbox' name='lowercase' /></li>
				<li>Números: <input type='checkbox' name='numbers' /></li>
				<li>Símbolos: <input type='checkbox' name='symbols' /></li>
			</ul>

			<span><input type='range' name='length' min='8' max='64' onChange={handleChangeLength()} />{passwordLength}</span>
			<button className="bg-sky-500 hover:bg-sky-700 rounded-md p-1 ">Generate</button>
		</div>
	)
}