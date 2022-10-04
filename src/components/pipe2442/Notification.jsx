const Notification = ({ handleNotification }) => {
	return (
		<div className='flex w-96 shadow-lg rounded-lg absolute r-0 bottom-14 hover:animate-pulse'>
			<div className='bg-[#B80000] py-4 px-6 rounded-l-lg flex items-center'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='text-white fill-current'
					viewBox='0 0 16 16'
					width='20'
					height='20'
				>
					<path
						fillRule='evenodd'
						d='M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z'
					></path>
				</svg>
			</div>
			<div className='px-4 py-6 bg-[#020413] rounded-r-lg flex justify-between items-center w-full '>
				<div>Your password was copied to the clipboard</div>
				<button onClick={() => handleNotification()}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='fill-current text-white'
						viewBox='0 0 16 16'
						width='20'
						height='20'
					>
						<path
							fillRule='evenodd'
							d='M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z'
						></path>
					</svg>
				</button>
			</div>
		</div>
	)
}

export default Notification
