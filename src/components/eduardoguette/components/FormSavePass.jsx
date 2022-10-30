import { useContext, useState } from 'react'
import { AppContext } from '../context/index'
import { useForm } from '../hooks/useForm'
import { BtnHacktober } from './BtnHacktober'
export const FormSavePass = ({ onHidden, refFocus, setState: setStateShow }) => {
	const { state, setState } = useContext(AppContext)
	const { savedPasswords, onHiddenModals } = state
	const [tpeInput, setTypeInput] = useState('password')
	const [formValues, handleInputChange] = useForm({
		url: '',
		username: '',
		password: state.password
	})
	const { url, username, password } = formValues

	const handleChangeTypeInput = () => {
		setTypeInput((p) => (p === 'password' ? 'text' : 'password'))
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		const newPassWord = {
			url,
			username,
			password,
			id: Date.now()
		}
		setState(p => ({ ...p, savedPasswords: [newPassWord, ...savedPasswords] }))
		localStorage.setItem('savedPasswords', JSON.stringify([newPassWord, ...savedPasswords]))
		onHiddenModals()
	}

	return (
		<div className='fixed inset-0 z-10 flex justify-center items-center flex-col main-eduaroguette px-4'>
			<div
				className='inset-0 fixed bg-[rgb(36,35,44)] bg-opacity-5 backdrop-blur'
				onClick={() => onHidden()}
			/>
			<div role='button' onClick={() => setStateShow(false)}>
				&times;
			</div>
			<form
				className='bg-[rgb(36,35,44)] w-[min(500px,100%)] pt-6 pb-10 px-6 z-10 rounded-md flex flex-col gap-4 border border-violet-200 shadow shadow-violet-500'
				autoComplete='off'
				onSubmit={handleSubmit}
			>
				<h3 className='text-2xl font-bold mb-2'>Save password</h3>
				<label htmlFor='url' className='w-full'>
					<span className='block mb-2 text-sm'>Site URL</span>
					<input
						required
						type='text'
						placeholder='Site'
						ref={refFocus}
						value={url}
						name='url'
						id='url'
						onChange={handleInputChange}
						className='bg-[rgb(36,35,44)] input_eduardoguette w-full border rounded-md py-2 px-4 text-gray-50 focus-visible:bg-[rgb(36,35,44)]'
						autoComplete='off'
					/>
				</label>

				<label htmlFor='username' className='w-full'>
					<span className='block mb-2 text-sm'>Username</span>
					<input
						type='text'
						placeholder='username/email'
						name='username'
						id='username'
						value={username}
						onChange={handleInputChange}
						className='bg-[rgb(36,35,44)] input_eduardoguette w-full border rounded-md py-2 px-4 text-gray-50 focus-visible:bg-[rgb(36,35,44)]'
						autoComplete='off'
					/>
				</label>

				<label htmlFor='password' className='relative  w-full'>
					<span className='block mb-2 text-sm'>Password</span>
					<div className='flex items-center'>
						<input
							type={tpeInput}
							name='password'
							id='password'
							required
							value={password}
							onChange={handleInputChange}
							className='bg-[rgb(36,35,44)] input_eduardoguette w-full border rounded-md py-2 px-4 text-gray-50 autofill:bg-transparent'
							autoComplete='off'
						/>
						<span className='absolute right-4 block' onClick={() => handleChangeTypeInput()}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-6 h-6'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
								/>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
								/>
							</svg>
						</span>
					</div>
				</label>
				<div className='mt-4'>
					<BtnHacktober text='SAVE PASSWORD' classStyle='text-sm' />
				</div>
			</form>
		</div>
	)
}
