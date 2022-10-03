import { useToast } from './hooks/useToast'
import './styles.css'

const Toast = () => {
	const { message, closeDelay, isVisible } = useToast()

	return (
		<div className='flex justify-center w-full absolute bottom-10'>
			<div
				style={isVisible ? { animation: `fadein 0.5s, fadeout 0.5s ${closeDelay / 1000}s` } : {}}
				className={`bg-green-400 p-2 rounded-sm shadow-xl ${isVisible ? 'visible' : 'invisible'}`}
			>
				<p>{message}</p>
			</div>
		</div>
	)
}

export default Toast
