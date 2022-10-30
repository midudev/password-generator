import { useContext } from 'react'
import { AppContext } from '../context'
import { ButtonTimes } from './ButtonTimes'
export const ItemPassList = ({ id, url, username, password }) => {
	const icoUrl = 'https://' + url.split('://').pop().split('/').shift() + '/favicon.ico'
	const { state: { savedPasswords }, setState } = useContext(AppContext)
	const onDeleteElement = (id) => {
		const newPasswords = savedPasswords.filter((pass) => pass.id !== id)
		setState(p => ({ ...p, savedPasswords: newPasswords }))
		localStorage.setItem('savedPasswords', JSON.stringify(newPasswords))
	}
	return (
		<li
			key={id}
			className='relative flex items-center flex-1 bg-[rgb(63,61,77)] text-xs gap-4 p-3 rounded-md group'
		>
			<img
				src={icoUrl}
				alt={'Fav icon'}
				height={30}
				width={30}
				className='text-xs whitespace-nowrap text-ellipsis block'
			/>
			<div className='flex-col flex gap-1'>
				<p className='w-[200px] md:w-[300px] overflow-hidden whitespace-nowrap text-ellipsis'>
					<a href={url} target='_blank' rel='noopener noreferrer'>{url}</a>
				</p>
				<p>Username: {username}</p>
				<p>Password: {password}</p>
			</div>
			<ButtonTimes onClickEvent={onDeleteElement} params={id} classStyle='hidden group-hover:grid right-6 top-6 hover:bg-[rgb(36,35,44)]'/>
		</li>
	)
}
