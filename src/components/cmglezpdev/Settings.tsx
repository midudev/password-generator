import { SettingsOption } from '@hooks/cmglezpdev/useSettings'
import { useSettings } from '../../hooks/cmglezpdev/useSettings'

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
		name: 'special_characters',
		checked: false
	}
]


export const Settings = () => {
	const { settings, handleInputChange, findByName, checkAll } = useSettings(INITIAL_STATE)

	return (
		<div className='mt-6'>
			<h2 className='text-3xl text-center mb-2 text-white font-bold'>Settings</h2>

			<div className='grid grid-cols-2 w-60'>
				<button
					className='text-cyan-600 text-xl col-span-full transition-colors outline-none hover:text-cyan-300'
					onClick={() => checkAll(true)}
				>
					Strong Password
				</button>

				<label htmlFor='letters' className='text-gray-400 text-xl' >
					<input type='checkbox' name='letters' checked={findByName('letters').checked} className='mr-2 outline-none' onChange={handleInputChange} />
					Letters
				</label>

				<label htmlFor='numbers' className='text-gray-400 text-xl'>
					<input type='checkbox' name='numbers' checked={findByName('numbers').checked} className='mr-2 outline-none' onChange={handleInputChange} />
					Numbers
				</label>

				<label htmlFor='div_in_groups' className='text-gray-400 text-xl'>
					<input type='checkbox' name='div_in_groups' checked={findByName('div_in_groups').checked} className='mr-2 outline-none' onChange={handleInputChange} />
					Divide
				</label>

				<label htmlFor='special_characters' className='text-gray-400 text-xl'>
					<input type='checkbox' name='special_characters' checked={findByName('special_characters').checked} className='mr-2 outline-none' onChange={handleInputChange} />
					#%!@
				</label>
			</div>
		</div>
	)
}
