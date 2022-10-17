import { ChangeEvent, useState } from 'react'
import { ButtonComponent, InputComponent, RangeInputComponent, StrengthPassword } from './basic-components'
import { usePassword } from '@hooks/cmglezpdev'

export const AdvancedPassword = () => {
	const [lengthPassword, setLenghtPassword] = useState(10)
	const [phrase, setPhrase] = useState('')
	const { password, generatePasswordByPhrase } = usePassword()

	const handleLengthControl = (e:ChangeEvent<HTMLInputElement>) => {
		setLenghtPassword(parseInt(e.target.value))
	}

	const handleGenPassword = () => {
		generatePasswordByPhrase(phrase, lengthPassword)
	}

	return (
		<div className='flex flex-col items-center'>
			<InputComponent
				name='password'
				value={password}
				placeholder='Password'
				// eslint-disable-next-line @typescript-eslint/no-empty-function
				onChange={() => {}}
			/>

			<InputComponent
				name='phrase'
				value={phrase}
				placeholder='Enter a Recovery Phrase'
				// eslint-disable-next-line @typescript-eslint/no-empty-function
				onChange={(e) => { setPhrase(e.target.value) }}
			/>

			{/* <StrengthPassword /> */}

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
