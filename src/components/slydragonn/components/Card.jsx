import CopyButton from './Copy'

const Card = ({ children }) => {
	return (
		<div className='w-full sm:w-96 h-20 bg-black text-white border border-white rounded p-2 mt-10'>
			<div className='relative flex justify-center items-center w-full h-full bg-transparent border border-white rounded'>
				<span>{children}</span>
				<CopyButton value={children} />
			</div>
		</div>
	)
}

export default Card
