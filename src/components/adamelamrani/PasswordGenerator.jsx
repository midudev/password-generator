import ButtonComponent from './ButtonComponent'
import './styles/passwordGenerator.css'

const PasswordGenerator = () => {
	return (
		<div>
			<h1>Generate a random password</h1>
			<h2>Password length</h2>
			<div className='input-range-box'>
				<p>6</p>
				<input type='range' min='6' max='30' value='6' />
				<p>30</p>
			</div>
			<ButtonComponent text='Generate password' onClick={() => {}} />
		</div>
	)
}

export default PasswordGenerator
