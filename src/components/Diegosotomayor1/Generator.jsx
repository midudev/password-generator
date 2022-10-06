import React, { useEffect, useRef, useState } from 'react'
import SliderDigito from './Slider'
import Image from './Image'
const Generator = () => {
	const [digito, setDigito] = useState(14)
	const [checkedForm, setCheckedForm] = useState({
		letras: false,
		letrasNumeros: false,
		todo: true
	})
	const letras = 'QWERTYUIOPASDFGHJKLÑZXCVBNMqwertyuiopasdfghjklñzxcvbnm'
	const Numeros = '1234567890'
	const specialCaracters = '|°¬~^!$%&/()=?¡<>;:-_{}+¨*][^'
	const [password, setPassword] = useState('')
	const randomLetras = digitos => {
		let password = ''
		for (let i = 0; i < digitos; i++) {
			const random = Math.floor(Math.random() * 54)
			password += letras.substring(random, random + 1)
		}
		return password
	}
	const randomLetrasNumeros = digitos => {
		let password = ''
		for (let i = 0; i < digitos; i++) {
			const random = Math.floor(Math.random() * 64)
			password += (letras + Numeros).substring(random, random + 1)
		}
		return password
	}
	const randomAllCaracter = digitos => {
		let password = ''
		for (let i = 0; i < digitos; i++) {
			const random = Math.floor(Math.random() * 93)
			password += (letras + Numeros + specialCaracters).substring(random, random + 1)
		}
		return password
	}
	const HandlerLetras = e => {
		if (e.target.checked === true) {
			setCheckedForm({
				letras: true,
				letrasNumeros: false,
				todo: false
			})
			setPassword(randomLetras(digito))
		} else {
			setCheckedForm({
				letras: false,
				letrasNumeros: checkedForm.letrasNumeros,
				todo: checkedForm.todo
			})
		}
	}
	const HandlerLetrasNumeros = e => {
		if (e.target.checked === true) {
			setCheckedForm({
				letras: false,
				letrasNumeros: true,
				todo: false
			})
			setPassword(randomLetrasNumeros(digito))
		} else {
			setCheckedForm({
				letras: checkedForm.letras,
				letrasNumeros: false,
				todo: checkedForm.todo
			})
		}
	}
	const HandlerAllCaracter = e => {
		if (e.target.checked === true) {
			setCheckedForm({
				letras: false,
				letrasNumeros: false,
				todo: true
			})
			setPassword(randomAllCaracter(digito))
		} else {
			setCheckedForm({
				letras: checkedForm.letras,
				letrasNumeros: checkedForm.letrasNumeros,
				todo: false
			})
		}
	}
	const CopyPass = () => {
		navigator.clipboard.writeText(password)
		alert('Se copió tu nueva contraseña: ' + password)
	}
	useEffect(() => setPassword(randomAllCaracter(digito)), [])
	useEffect(() => {
		if (checkedForm.letras) setPassword(randomLetras(digito))
		if (checkedForm.letrasNumeros) setPassword(randomLetrasNumeros(digito))
		if (checkedForm.todo) setPassword(randomAllCaracter(digito))
	}, [digito])

	return (
		<div className=' grid md:grid-cols-2 gap-4 min-h-screen md:w-5/6 mx-auto'>
			<div className='flex flex-col m-5 justify-center gap-5'>
				<h1 className='font-bold drop-shadow-[0_0_3px_rgba(255,255,255,0.5)] w-full text-white text-7xl'>
					PASSWORD
				</h1>
				<p className='w-full mb-5 text-white text-sm drop-shadow-[0_0_3px_rgba(255,255,255,0.5)]'>
					GENERA TU CONTRASEÑA COMO DESEAS
				</p>

				<div className='flex bg-[#B8B1C4] w-full max-w-[500px] rounded-2xl mb-5 p-2 px-8 justify-between'>
					<p className='text-lg text-[#54270E] whitespace-pre-line passwordwidth'>{password}</p>
					<img
						src='../src/components/Diegosotomayor1/assets/img-02.svg'
						className='w-6 cursor-pointer'
						onClick={CopyPass}
						alt=''
					/>
				</div>
				<div>
					<h3 className='font-bold drop-shadow-[0_0_3px_rgba(255,255,255,0.5)] w-full text-white text-3xl '>
						CANTIDAD DE DIGITOS
					</h3>
					<SliderDigito digito={digito} setDigito={setDigito} />
				</div>
				<label className='flex items-center inputCheckbox'>
					<input
						type='checkbox'
						name='letras'
						onChange={HandlerLetras}
						checked={checkedForm.letras}
					/>
					<p className='ml-5 text-white text-sm drop-shadow-[0_0_3px_rgba(255,255,255,0.5)]'>
						SOLO LETRAS
					</p>
				</label>
				<label className='flex items-center inputCheckbox'>
					<input
						type='checkbox'
						name='letras'
						onChange={HandlerLetrasNumeros}
						checked={checkedForm.letrasNumeros}
					/>
					<p className='ml-5 text-white text-sm drop-shadow-[0_0_3px_rgba(255,255,255,0.5)]'>
						SOLO LETRAS Y NÚMEROS
					</p>
				</label>
				<label className='flex items-center inputCheckbox'>
					<input
						type='checkbox'
						name='letras'
						onChange={HandlerAllCaracter}
						checked={checkedForm.todo}
					/>
					<p className='ml-5 text-white text-sm drop-shadow-[0_0_3px_rgba(255,255,255,0.5)]'>
						TODO TIPO DE CARACTER
					</p>
				</label>
			</div>
			<div className='flex items-center justify-center'>
				<Image />
			</div>
		</div>
	)
}
export default Generator
