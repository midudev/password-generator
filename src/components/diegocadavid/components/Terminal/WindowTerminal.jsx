import React from 'react'
import TitleWindow from '../TitleWindow'
import Terminal from './Terminal'

const WindowTerminal = () => {
  return (
	<div className='bg-[#111111] h-full rounded-lg overflow-hidden'>
		<TitleWindow name="Terminal"/>
		<Terminal />
	</div>
  )
}

export default WindowTerminal