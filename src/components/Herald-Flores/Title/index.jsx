import React from 'react'

const Title = ({ title }) => {
	return (
		<h1 className='font-bold font-special uppercase text-transparent text-4xl bg-clip-text bg-gradient-to-r from-gray-600 via-gray-700 to-gray-900 dark:from-yellow-400 dark:via-cyan-400 dark:to-cyan-500 mb-4'>
			{title}
		</h1>
	)
}

export default Title
