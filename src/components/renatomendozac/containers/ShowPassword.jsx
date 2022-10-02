import { useEffect, useState } from 'react'
import Card from '@components/renatomendozac/components/Card'
import { passwordStore } from '@components/renatomendozac/store'
import { copyToClipboard } from '@components/renatomendozac/utils/copy-to-clipboard'

const ShowPassword = () => {
	const [password, setPassword] = useState()

	useEffect(() => {
		passwordStore.subscribe((value) => setPassword(value))
	}, [])

	return (
		<Card>
			<span>{password}</span>
			<span className='text-[8px] cursor-pointer' onClick={() => copyToClipboard(password)}>
				COPY
			</span>
		</Card>
	)
}

export default ShowPassword
