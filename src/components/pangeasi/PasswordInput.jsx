import React, { useMemo } from 'react'
import CopyIcon from './CopyIcon'
import { useRawPassword } from './hooks/useRawPassword'
import { securePassword } from './utils/generatePassword'
import { useCopyToClipboard } from './hooks/useCopyToClipboard'

const PasswordInput = () => {
	const [rawPass] = useRawPassword()
	const [, setCopyToClipboard] = useCopyToClipboard()
	const securePass = useMemo(() => securePassword(rawPass), [rawPass]) 
	return (
		<div className='flex'>
			<input
				type="text"
				placeholder="..."
				className='py-2 pl-4 text-lg rounded-l-xl font-[monospace] text-center'
				value={securePass}
				readOnly
			/>
			<button
				className='bg-green-400 text-white p-2 rounded-r-xl hover:brightness-125
				'
				onClick={() => setCopyToClipboard(securePass)}
			>
				<CopyIcon className="text-xl" />
			</button>
		</div>
	);
}

export default PasswordInput
