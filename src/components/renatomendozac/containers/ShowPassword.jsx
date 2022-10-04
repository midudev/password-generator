import { useEffect, useState } from 'react'
import Card from '@components/renatomendozac/components/Card'
import { passwordStore } from '@components/renatomendozac/store'
import { copyToClipboard } from '@components/renatomendozac/utils/copy-to-clipboard'

const { initialState: initialPassword } = passwordStore

const ShowPassword = () => {
	const [password, setPassword] = useState(initialPassword)

	useEffect(() => {
		passwordStore.subscribe((value) => setPassword(value))
	}, [])

	return (
		<Card className='flex justify-between items-center'>
			<span className='text-gray-300 text-md'>{password}</span>
			<span className='text-[8px] cursor-pointer' onClick={() => copyToClipboard(password)}>
				COPY
			</span>
		</Card>
	)
}

export default ShowPassword
