import { ChangeEvent, useState } from 'react'
import { SettingsOption } from '@hooks/cmglezpdev/useSettings'
import { ISettings, usePassword } from '@hooks/cmglezpdev'
import { ButtonComponent, RangeInputComponent, InputComponent } from './basic-components'
import { Settings } from './Settings'

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
		name: 'div_in_groups',
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
