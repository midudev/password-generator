import usePasswordGenerator from 'src/hooks/javierscode/usePasswordGenerator'
import InputRange from './RangeInput'
import SwitchInput from './SwitchInput'
import type { Options, OptionsMapper } from './types'
import './PasswordGenerator.css'

const sentenceOptionsMapper: OptionsMapper = {
	includeNumbers: 'Include numbers',
	includeLetters: 'Include letters',
	includeSymbols: 'Include symbols',
	includeUppercase: 'Include uppercase'
}

export default function PasswordGenerator() {
	const {
		password,
		generatePassword,
		length,
		handleLengthChange,
		settings,
		handleSettingsChange
	} = usePasswordGenerator()

	const options = Object.keys(settings) as Options[]

	return (
		<section className='generator'>
			<label htmlFor='password' className='generator-title' >
                Generated password
			</label>
			<input type='text' id='password' value={password} readOnly className='generator-password'/>
			<p className='generator-title'>
                Lenght: {length}
			</p>
			<div className='generator-card'>
				{4}<InputRange value={length} handleChange={handleLengthChange} />{32}
			</div>
			<p className='generator-title'>
                Settings
			</p>
			{options.map(option =>
				<div key={option} className='generator-card'>
					{sentenceOptionsMapper[option]}
					<SwitchInput name={option} checked={settings[option]} handleChange={handleSettingsChange} />
				</div>)}
			<button className='generator-button' onClick={generatePassword}>Generate password</button>
		</section>
	)
}