import React, { useRef } from 'react'
import styles from './style.module.css'

const Generator = () => {
	return (
		<div className={styles.container + ' flex justify-center items-center flex-col'}>
			<div className={`text-5xl font-bold mb-4 ${styles.text}`}>Password Generator</div>
			<div className='flex flex-row drop-shadow-2xl'>
				<div
					className={`flex flex-col break-all justify-center items-center text-2xl rounded bg-[#393E46] mx-2 px-3 w-60 ${styles.text}`}
				>
					<button
						className={`text-2xl font-medium w-full py-2 my-2 rounded bg-[#222831] ${styles.text} drop-shadow-2xl`}
					>
						Copy
					</button>
					<span className='mb-2 font-medium'>{'sq8>Rl^C<J~i~b&1daz('}</span>
					<input className='w-full mb-3' type='range' id='vol' name='vol' min='0' max='50' />
				</div>
				<div className='flex flex-col'>
					<div className='w-60'>
						<button
							className={`text-2xl font-medium w-full py-2 mb-2 rounded bg-[#393E46] ${styles.text} drop-shadow-2xl`}
						>
							Generate Password
						</button>
					</div>
					<div className='box-border flex space-x-2 mb-3'>
						<button
							className={`text-2xl font-medium   box-border w-1/2 line-through decoration-2 decoration-[#00ADB5] rounded bg-[#393E46] ${styles.textDisabled} drop-shadow-2xl`}
						>
							AZ
						</button>
						<button
							className={`text-2xl font-medium   box-border w-1/2 rounded bg-[#393E46] ${styles.text} drop-shadow-2xl`}
						>
							az
						</button>
					</div>
					<div className='box-border flex space-x-2'>
						<button
							className={`text-2xl font-medium  px-3 w-1/2   rounded bg-[#393E46] ${styles.text} drop-shadow-2xl`}
						>
							09
						</button>
						<button
							className={`text-2xl font-medium  px-3 w-1/2   rounded bg-[#393E46] ${styles.text} drop-shadow-2xl`}
						>
							!*
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Generator
