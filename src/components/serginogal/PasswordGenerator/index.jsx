import styles from './styles.module.css'
import Button from '../components/Button'
import TextInput from '../components/TextInput'

export default function PasswordGenerator() {
	return (
		<div className={styles.generatorWrapper}>
			<h2>Password Generator</h2>
			<TextInput />
			<div className={styles.optionsWrapper}>
				<label>Operational opt-ins</label>
				<label className=''>
					<div>
						<input type='checkbox' name='operational-holopin' />
						<p>Uppercase</p>
					</div>
					<p>Include uppercase characters in your password</p>
				</label>
				<label className=''>
					<div>
						<input type='checkbox' name='operational-holopin' />
						<p>Lowercase</p>
					</div>
					<p>Include lowercase characters in your password</p>
				</label>
				<label className=''>
					<div>
						<input type='checkbox' name='operational-holopin' />
						<p>Special Characters</p>
					</div>
					<p>Include special characters in your password</p>
				</label>
				<label className=''>
					<div>
						<input type='checkbox' name='operational-holopin' />
						<p>Numbers</p>
					</div>
					<p>Include numbers characters in your password</p>
				</label>
			</div>
			<Button>Generate Password</Button>
		</div>
	)
}
