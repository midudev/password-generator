import React from 'react'
import TitleWindow from '../TitleWindow'
import Terminal from './Terminal'

const WindowTerminal = ({ addCommand, commands }) => {
  return (
	<div className='bg-[#111111] h-[calc(100%-250px)] mb-3 md:mb-0  md:h-full rounded-lg overflow-hidden'>
		<TitleWindow name="Terminal"/>
		<Terminal addCommand={addCommand} commands={commands} />
	</div>
  )
}

export default WindowTerminal