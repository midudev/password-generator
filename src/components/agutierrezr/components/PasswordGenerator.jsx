import React from 'react'
import { generatePassword } from '../helpes/generatePassword'

const PasswordGenerator = () => {
	return (
		<div className='h-screen bg-white flex flex-col items-center p-10 space-y-4 text-black'>
			<div>
				{generatePassword({ lower: true, upper: true, symbol: true, number: true, length: 10 })}
			</div>
		</div>
	)
}

export default PasswordGenerator
