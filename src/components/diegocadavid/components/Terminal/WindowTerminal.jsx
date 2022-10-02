import React from 'react'
import TitleWindow from '../TitleWindow'
import Terminal from './Terminal'

const WindowTerminal = ({ addCommand, commands }) => {
  return (
	<div className='bg-[#111111] h-full rounded-lg overflow-hidden'>
		<TitleWindow name="Terminal"/>
		<Terminal addCommand={addCommand} commands={commands} />
	</div>
  )
}

export default WindowTerminal