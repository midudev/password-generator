import React from 'react'
import PasswordProvider from './hooks/usePassword'
import GeneratePassword from '@components/danielnavram/GeneratePassword'

const Wrapper = () => {
	return (
		<PasswordProvider>
			<GeneratePassword />
		</PasswordProvider>
	)
}

export default Wrapper
