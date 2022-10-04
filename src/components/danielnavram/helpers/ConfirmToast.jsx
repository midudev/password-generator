import React, { useEffect } from 'react'

const ConfirmToast = ({ isOpen, setOpen }) => {
	useEffect(() => {
		setTimeout(() => {
			setOpen(false)
		}, 3000)
	}, [isOpen])

	return (
		isOpen && (
			<div
				id='modal'
				tabIndex='-1'
				className='overflow-y-auto overflow-x-hidden fixed top-10 right-0 left-0 z-50 md:inset-0 md:h-full transition-all'
			>
				<div className='relative mx-auto p-4 w-full max-w-md h-full md:h-auto'>
					<div className='relative bg-white rounded-lg shadow dark:bg-green-700'>
						<div className='p-4 text-center'>
							<h3 className='text-lg font-normal text-white'>Copied !</h3>
						</div>
					</div>
				</div>
			</div>
		)
	)
}

export default ConfirmToast
