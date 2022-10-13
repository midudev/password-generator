import { ChangeEvent, useState } from 'react'
import { usePassword } from '@hooks/cmglezpdev'
import { ButtonComponent, RangeInputComponent, InputComponent } from './basic-components'
import { Settings } from './Settings'

export const CustomPassword = () => {
	const [lengthPassword, setLenghtPassword] = useState(10)
	const { password, generatePassword, generatePasswordByPhrase } = usePassword()

	const handleLengthControl = (e:ChangeEvent<HTMLInputElement>) => {
		setLenghtPassword(parseInt(e.target.value))
	}

	const handleGenPassword = () => {
		const set = {
			length: lengthPassword,
			letters: true,
			special: true,
			numbers: true
		}
		generatePassword(set)
		// generatePasswordByPhrase('Esto es una frase', 10)
	}


	return (
		<div className='flex flex-col items-center'>
			<InputComponent
				value={password}
				// eslint-disable-next-line @typescript-eslint/no-empty-function
				onChange={() => {}}
			/>

			<RangeInputComponent
				value={lengthPassword}
				onChange={handleLengthControl}
			/>

			<ButtonComponent
				textButton='Generate Password'
				onClick={handleGenPassword}
			/>

			<Settings />
		</div>
	)
}
