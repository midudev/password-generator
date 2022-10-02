import { useState} from 'react'
import Container from '@components/chrislarasaa/Container'
import Slider from '@components/chrislarasaa/Slider'
import Button from '@components/chrislarasaa/Button'
import PasswordInput from '@components/chrislarasaa/PasswordInput'
import './style.css'


const PasswordGenerator = () => {

	const [sliderValue, setSliderValue] = useState(6)
	const [password, setPassword] = useState('')
	
	const handleGeneratePassword = () => {
		const numbers = "0123456789";
		const lowerCase = "abcdefghijklmnopqrstuvwxyz"
		const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
		const specialChar = ""
		var pwdLen = sliderValue;

		const randomPassword = Array(pwdLen).fill(numbers + lowerCase + upperCase + specialChar).map( x => x[Math.floor(Math.random() * x.length)]).join('');
		setPassword(randomPassword)
	}
	
	return (
		<Container title="Password Generator">
			<PasswordInput 
				placeholder="Password generated"
				password={password}
			/>

			<h1 className='char-lenght'>Password Length: {sliderValue}</h1>
			<Slider
				sliderValue={sliderValue}
				setSliderValue={setSliderValue}
			/>
			<Button 
				handleGeneratePassword={handleGeneratePassword}
				buttonText="Generate Random Password"
			/>
		</Container>
	)
}

export default PasswordGenerator