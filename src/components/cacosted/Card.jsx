import { Header } from '@components/cacosted/Header'
import { Button } from '@components/cacosted/Button'
import { CopyIcon } from '@components/cacosted/CopyIcon'
import { Slider } from '@components/cacosted/Slider'
import { TextField } from '@components/cacosted/TextField'
import { Notification } from '@components/cacosted/Notification'
import { Container } from '@components/cacosted/Container'
import { usePassword } from '../../hooks/cacosted/usePassword'
import { useClipboard } from '../../hooks/cacosted/useClipboard'

export const Card = () => {
	const { password, setNewLength, setNewPassword } = usePassword()
	const { isCopy, copyText } = useClipboard()

	const handleChange = ({ target }) => setNewLength(target.value)
	const handleClick = () => setNewPassword()

	const copyClass = isCopy ? 'opacity-1' : 'opacity-0'

	return (
		<Container>
			<Notification copyClass={copyClass} />
			<article className='w-11/12 sm:w-1/2 bg-gray-900 rounded-xl flex flex-col gap-8 px-8 py-6 shadow-bg-gray-900 shadow-2xl'>
				<Header />
				<label htmlFor='password' className='relative block'>
					<TextField readOnly value={password} />
					<Button
						action={() => copyText(password)}
						className=' bg-gray-800 absolute top-0 right-2 min-h-full'
					>
						<CopyIcon className='text-amber-400 hover:text-amber-500 active:text-amber-700 ' />
					</Button>
				</label>

				<label htmlFor='password-length' className='flex gap-5'>
					<Slider action={handleChange} value={password} />
				</label>
				<Button
					className='bg-slate-800 px-4 py-3 rounded-lg hover:bg-slate-700'
					action={handleClick}
				>
					Generate
				</Button>
			</article>
		</Container>
	)
}
