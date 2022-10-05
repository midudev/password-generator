import React from 'react';

export default function Button({ passwordGenerator }) {
	return (
		<button id='primary-btn' className='font-sans w-[100%] h-[2.5rem] text-[#000000] bg-[#A4FFAF]' onClick={() => passwordGenerator()} >
				GENERATE
		</button>
	)
}