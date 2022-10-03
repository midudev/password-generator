
export const Notification = ({ copyClass }) => {
	return (
		<div
			className={`absolute top-5 mx-auto text-center border-amber-500 border-2 rounded-lg transition-opacity duration-500 ${copyClass}`}
		>
			<span className='text-white p-5 relative block'>Copied to clipboard</span>
		</div>
	)
}
