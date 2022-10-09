import { Settings } from './Settings'
import { InputPassword } from './InputPassword'

export const CustomPassword = () => {
	return (
		<div className='flex flex-col items-center'>
			<InputPassword />
			<Settings />
		</div>
	)
}
