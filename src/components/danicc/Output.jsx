import React from 'react'
import CopyIcon from '@components/danicc/CopyIcon'
import colors from 'tailwindcss/colors'

function Output({ value, placeholder }) {
	const textColor = value ? 'text-inherit' : 'text-slate-700'

	function handleOnCopy() {
		navigator.clipboard.writeText(value).then(() => {
			//TODO: shsow success copy to clipboard message
		})
	}

	return (
		<div className='flex gap-x-2'>
			<p className={`flex-1 ${textColor} break-all`}>{value || placeholder}</p>
			<button onClick={handleOnCopy}>
				<CopyIcon fill={colors.gray[200]} />
			</button>
		</div>
	)
}

export default Output
