import { ChangeEvent, useState } from 'react'
import { usePassword } from '@hooks/cmglezpdev'
import { ButtonComponent, InputComponent, RangeInputComponent } from './basic-components'

export const AdvancedPassword = () => {
	const [lengthPassword, setLenghtPassword] = useState(10)
	const [phrase, setPhrase] = useState('')
	const { password, generatePassword } = usePassword()

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

			<InputComponent
				value={phrase}
				// eslint-disable-next-line @typescript-eslint/no-empty-function
				onChange={(e) => { setPhrase(e.target.value) }}
			/>

			<RangeInputComponent
				value={lengthPassword}
				onChange={handleLengthControl}
			/>

			<ButtonComponent
				textButton='Generate Password'
				onClick={handleGenPassword}
			/>
		</div>
	)
}
