import { copyText } from './helpers/copyText'

const PasswordInput = ({ password }) => {
	return <div className='password-input flex'>
		<input
			type='text'
			defaultValue={password}
			readOnly
			placeholder='#G7goC9<x='
			className='wid-100'
		/>
		<button className='btn btn-primary' onClick={() => copyText(password)}>
			<i className='fa-regular fa-copy'></i>
		</button>
	</div>
}

export default PasswordInput