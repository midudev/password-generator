import React from 'react'
import { CheckSVG } from './CheckSVG'
import CopySVG from './CopySVG'
import { useClipBoard } from './useClipBoard'
import { usePasswordGenerator } from './usePasswordGenerator'

const PasswordGenerator = () => {
	const { state, dispatch } = usePasswordGenerator()
	const { isCopied, handleCopy, setIsCopied } = useClipBoard()

	const handleOnchagerLength = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch({ type: 'setLength', payload: event.target.value })
	}

	return (
		<div className=' flex flex-col p-3 gap-5  min-w-[350px]'>
			<label htmlFor='password' className='w-full text-lg'>
				Strong password 💪
			</label>
			<div className=' flex flex-row flex-nowrap gap-2 content-center justify-between'>
				<input
					type='text'
					id='password'
					className=' text-gray-800 text-center font-medium p-1 rounded-md grow'
					value={state.password}
					readonly
				/>
				<button
					className='bg-[#122944] rounded-md p-2 w-min shadow-xl hover:bg-[#122944]/[0.8] active:shadow'
					onClick={() => handleCopy(state.password)}
				>
					{isCopied ? <CheckSVG /> : <CopySVG />}
				</button>
			</div>
			<label>Password length: {state.length}</label>
			<input
				type='range'
				min={6}
				max={20}
				value={state.length}
				onChange={handleOnchagerLength}
				className='w-full accent-[#122944]'
			/>

			<button
				className='w-full bg-[#122944] p-2 rounded-md shadow-xl hover:bg-[#122944]/[0.8] active:shadow'
				onClick={() => {
					setIsCopied(false)
					dispatch({ type: 'generate' })
				}}
			>
				Generate
			</button>
		</div>
	)
}

export default PasswordGenerator
