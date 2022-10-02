import React, { useState } from 'react'
import './style.css'

const PassWordGenerateApp = () => {
	const [rangeCharacters, setRangeCharacters] = useState(10)

	const onChangeCharacters = (e) => {
		setRangeCharacters(e.target.value)
	}
	return (
		<main>
			<div className='relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12'>
				<div className='relative w-full bg-slate-800 px-6 pt-10 pb-8 shadow-xl ring-1 ring-slate-600 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10'>
					<div className='mx-auto max-w-md'>
						<h1 className='text-white text-center uppercase font-bold'>GENERATE PASSWORD</h1>
						<div className='space-y-6 py-8 text-base leading-7 text-white'>
							<div className='flex w-full h-10 bg-white rounded justify-between'>
								<p className='text-black my-auto mx-6 uppercase font-special tracking-widest'>
									Hola
								</p>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-8 mr-3 my-auto cursor-pointer'
									viewBox='0 0 115.77 122.88'
								>
									<path
										className='st0'
										d='M89.62,13.96v7.73h12.19h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02v0.02 v73.27v0.01h-0.02c-0.01,3.84-1.57,7.33-4.1,9.86c-2.51,2.5-5.98,4.06-9.82,4.07v0.02h-0.02h-61.7H40.1v-0.02 c-3.84-0.01-7.34-1.57-9.86-4.1c-2.5-2.51-4.06-5.98-4.07-9.82h-0.02v-0.02V92.51H13.96h-0.01v-0.02c-3.84-0.01-7.34-1.57-9.86-4.1 c-2.5-2.51-4.06-5.98-4.07-9.82H0v-0.02V13.96v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07V0h0.02h61.7 h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02V13.96L89.62,13.96z M79.04,21.69v-7.73v-0.02h0.02 c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v64.59v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h12.19V35.65 v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07v-0.02h0.02H79.04L79.04,21.69z M105.18,108.92V35.65v-0.02 h0.02c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v73.27v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h61.7h0.02 v0.02c0.91,0,1.75-0.39,2.37-1.01c0.61-0.61,1-1.46,1-2.37h-0.02V108.92L105.18,108.92z'
									/>
								</svg>
							</div>
							<div>
								<div className='flex justify-between'>
									<label htmlFor='characterLength' className='mb-2 text-sm'>
										Character length
									</label>
									<label>{rangeCharacters}</label>
								</div>
								<input
									className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'
									id='characterLength'
									type='range'
									min='4'
									max='16'
									name='characterLength'
									value={rangeCharacters}
									onChange={onChangeCharacters}
								/>
							</div>
							<button
								type='button'
								className='inline-block px-6 py-2.5 w-full bg-purple-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-900 hover:shadow-lg focus:bg-purple-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-900 active:shadow-lg transition duration-150 ease-in-out'
							>
								Generate
							</button>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}

export default PassWordGenerateApp
