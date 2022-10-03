import React, { useEffect, useState } from 'react'

const CommandMidu = ({ config = [] }) => {
	const [socialLink, setSocialLink] = useState({
		url: '#',
		name: 'null'
	})

	useEffect(() => {
		const socialConfig = config[0]?.value || 'twitch'

		switch (socialConfig) {
			case 'youtube':
				setSocialLink({
					url: 'https://www.youtube.com/c/midudev',
					name: 'Youtube'
				})
				break

			case 'twitch':
				setSocialLink({
					url: 'https://www.twitch.tv/midudev',
					name: 'Twitch'
				})
				break

			case 'instagram':
				setSocialLink({
					url: 'https://www.instagram.com/midu.dev',
					name: 'instagram'
				})
				break
			case 'facebook':
				setSocialLink({
					url: 'https://www.facebook.com/midudev.frontend/',
					name: 'facebook'
				})
				break
			case 'patreon':
				setSocialLink({
					url: 'https://www.patreon.com/midudev',
					name: 'patreon'
				})
				break
			case 'twitter':
				setSocialLink({
					url: 'https://twitter.com/midudev',
					name: 'twitter'
				})
				break

			default:
				setSocialLink({
					url: 'https://www.twitch.tv/midudev',
					name: 'Twitch'
				})
				break
		}
	}, [])

	return (
		<div>
			<p>
				{`${socialLink.name} de Midu ^^: `}{' '}
				<a href={socialLink.url} className='underline capitalize' target='_blank'>
					Click aqui
				</a>
			</p>
			<br />
		</div>
	)
}

export default CommandMidu
