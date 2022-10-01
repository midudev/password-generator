import React from 'react'
import { Button } from '@components/cacosted/Button'
import {OutlineIcon} from '@components/cacosted/OutlineIcon'
const useClipBoard = () => {
	const [clipBoard, setClipoard] = useState('')
	const [copied, setCopied] = useState(false)
	
	const copyText = (string) => {
		setClipoard(string)
	}

	return {clipBoard}
}
export const CopyButton = () => {
	console.log('trick')
	return (
		<Button className=" bg-gray-800 absolute top-0 right-2 min-h-full">
			<OutlineIcon className="text-pink-600" />
		</Button>
	)
}


