import { useRawPassword } from './hooks/useRawPassword'
import ThinkingFace from './ThinkinfFace'

const Hint = () => {
	const [rawPass] = useRawPassword()
	return (
		<div className='flex items-center'>
			<ThinkingFace className='text-3xl' />
			<small className='text-white'>{rawPass}</small>
		</div>
	)
}

export default Hint
