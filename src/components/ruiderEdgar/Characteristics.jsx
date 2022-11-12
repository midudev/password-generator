import React, { useState } from 'react'
import './styles/caracteristics.css'

const Characteristics = ({ getLenght, handleSubmit }) => {
	const [lenght, setLenght] = useState(12)
	getLenght(lenght)
	return (
		<article className='containerOptions'>
			<h3 className='text-neutral-50 text-center my-4'>Options</h3>
			<h4 className='text-neutral-50 my-2 ml-4'>Character lenght: {lenght}</h4>
			<form className='containerInput' onSubmit={(e) => {
				e.preventDefault()
				handleSubmit()
			}}>
				<label htmlFor='lenght'>
					<span className='text-neutral-50 mr-2'>6</span>
					<input type='range' value={lenght} min={6} max={20} name='range' id='lenght' className='lenght' onChange={(e) => {
						setLenght(e.target.value)
					}} />
					<span className='text-neutral-50 ml-2'>20</span>
				</label>
				{/* <button className='btnGenerate transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 '>
					Generar
				</button> */}
			</form>
		</article>
	)
}

export default Characteristics