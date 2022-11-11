import { useState } from 'react'
import PasswordConfig from './PasswordConfig'
import PasswordInput from './PasswordInput'
import './styles.css'

const App = () => {
	const [password, setPassword] = useState('')
	return <div className='password-box'>
		<PasswordInput password={password}/>
		<PasswordConfig onSubmit={(password) => () => setPassword(password)}/>
	</div>
}

export default App