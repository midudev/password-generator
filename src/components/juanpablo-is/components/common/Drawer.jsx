const Drawer = ({ onClose }) => {
	return (
		<>
			<div
				className='fixed z-40 w-full p-4 overflow-y-auto bg-white dark:bg-gray-800 left-0 bottom-0 right-0'
				tabIndex='-1'
				aria-labelledby='drawer-bottom-label'
			>
				<h5 className='inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400'>
					<svg
						className='w-5 h-5 mr-2'
						aria-hidden='true'
						fill='currentColor'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							fillRule='evenodd'
							d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
							clipRule='evenodd'
						></path>
					</svg>
					Bottom drawer
				</h5>
				<button
					type='button'
					data-drawer-dismiss='drawer-bottom-example'
					aria-controls='drawer-bottom-example'
					className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
					onClick={onClose}
				>
					<svg
						aria-hidden='true'
						className='w-5 h-5'
						fill='currentColor'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							fillRule='evenodd'
							d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
							clipRule='evenodd'
						></path>
					</svg>
					<span className='sr-only'>Close menu</span>
				</button>
				<p className='max-w-lg mb-6 text-sm text-gray-500 dark:text-gray-400'>
					Supercharge your hiring by taking advantage of our{' '}
					<a href='#' className='text-blue-600 underline dark:text-blue-500 hover:no-underline'>
						limited-time sale
					</a>{' '}
					for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the
					#1 design job board.
				</p>
				<a
					href='#'
					className='px-4 py-2 mr-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
				>
					Learn more
				</a>
				<a
					href='#'
					className='inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
				>
					Get access{' '}
					<svg
						className='w-4 h-4 ml-2'
						aria-hidden='true'
						fill='currentColor'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							fillRule='evenodd'
							d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
							clipRule='evenodd'
						></path>
					</svg>
				</a>
			</div>
			<div
				className='bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30'
				onClick={onClose}
			></div>
		</>
	)
}

export default Drawer
