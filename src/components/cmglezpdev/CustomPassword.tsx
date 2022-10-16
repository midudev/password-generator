import { ChangeEvent, useState } from 'react'
import { ISettings, SettingsOption, usePassword } from '@hooks/cmglezpdev'
import { Settings } from '@components/cmglezpdev/Settings'
import { ButtonComponent, RangeInputComponent, InputComponent } from '@components/cmglezpdev/basic-components'

const INITIAL_STATE: SettingsOption[] = [
	{
		name: 'letters',
		checked: true
	},
	{
		name: 'numbers',
		checked: false
	},
	{
		name: 'divide',
		checked: false
	},
	{
		name: 'special',
		checked: false
	}
]

export const CustomPassword = () => {
	const [lengthPassword, setLenghtPassword] = useState(10)
	const [settings, setSettings] = useState<SettingsOption[]>(INITIAL_STATE)
	const { password, generatePassword } = usePassword()

	const handleLengthControl = (e:ChangeEvent<HTMLInputElement>) => {
		setLenghtPassword(parseInt(e.target.value))
	}

	const handleGenPassword = () => {
		const set = {}

		for (let i = 0; i < settings.length; i++) {
			const config = settings[i]
			set[config.name] = config.checked
		}
		generatePassword(set as ISettings, lengthPassword)
	}


	return (
		<div className='flex flex-col items-center'>
			<InputComponent
				value={password}
				name='password'
				placeholder={'Password'}
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

			<Settings
				initalSettings={INITIAL_STATE}
				getValues={setSettings}
			/>
		</div>
	)
}
