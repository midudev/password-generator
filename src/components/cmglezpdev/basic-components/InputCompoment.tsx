import { ChangeEvent, FC } from 'react'
import { useClipboard } from '@hooks/cmglezpdev'

import clipboardCopy from '@components/cmglezpdev/icons/clipboard-copy.svg'
import clipboardCopied from '@components/cmglezpdev/icons/clipboard-copied.svg'

interface Props {
	value: string;
	name?: string;
	onChange: (e?:ChangeEvent<HTMLInputElement>) => void;
}

export const InputComponent:FC<Props> = ({ name = '', value, onChange }) => {
	const { refElement, copied, copyText } = useClipboard()

	return (
		<div className='flex gap-2'>
			<input
				ref={refElement}
				type='text'
				name={name}
				value={value}
				className='py-1 px-2 rounded w-96 outline-none text-gray-600 text-xl'
				// eslint-disable-next-line @typescript-eslint/no-empty-function
				onChange={onChange}
			/>
			<button
				className='flex items-center gap-1 px-2 bg-gray-400 rounded outline-none'
				onClick={() => copyText()}
			>
				<img src={!copied ? clipboardCopy : clipboardCopied} alt='clipboard' className='w-4' />
				<span
					className='uppercase text-xs font-bold'
					style={{ color: copied ? '#19770d' : '#000' }}
				>Copy</span>
			</button>
		</div>
	)
}
