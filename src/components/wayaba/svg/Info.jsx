const Info = (props) => {
	return (
		<svg
			className='w-6 h-6'
			{...props}
			stroke='currentColor'
			viewBox='0 0 24 24'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='2'
				d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
			></path>
		</svg>
	)
}

export default Info
