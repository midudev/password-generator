import { useState, useEffect } from 'react'

export default function Navbar() {
	const username = 'luisfalconmx'
	const [avatar, setAvatar] = useState('')

	useEffect(() => {
		const main = async () => {
			const response = await fetch('https://api.github.com/users/luisfalconmx')
			console.log(response)
			const data = await response.json()
			setAvatar(data.avatar_url)
		}

		main()
	}, [])

	return (
		<header className='text-white flex justify-between pb-4 px-8 mb-6 items-center'>
			<a href='https://hacktoberfest.com/'>
				<div className='flex items-center'>
					<img
						width='48px'
						src='https://user-images.githubusercontent.com/57654255/193474041-238402ed-d897-4079-834f-96075a5315d0.svg'
						alt='Hacktoberfest 2022 logo'
						className='mr-4'
					/>
					<strong className='font-special font-light uppercase text-shadow'>Hacktoberfest</strong>
				</div>
			</a>
			<a href='https://github.com/luisfalconmx'>
				<div className='flex items-center justify-center'>
					<img
						src={avatar}
						alt={`${username} profile picture`}
						className='rounded-full w-12 object-fill mr-4'
					/>
					<b className='font-special font-light text-shadow'>{username}</b>
				</div>
			</a>
		</header>
	)
}
