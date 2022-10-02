
export const GenerateButton = ({ onSubmitGeneratePassword }) => {
	return (
		<button
			onClick={onSubmitGeneratePassword}
			type='button'
			className='inline-block px-6 py-2.5 w-full bg-purple-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-900 hover:shadow-lg focus:bg-purple-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-900 active:shadow-lg transition duration-150 ease-in-out'
		>
			Generate
		</button>
	)
}
