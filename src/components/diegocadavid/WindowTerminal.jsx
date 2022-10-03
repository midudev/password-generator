import React from 'react'
import TitleWindow from './TitleWindow'
import Terminal from './Terminal'

const WindowTerminal = ({ addCommand, commands }) => {
  return (
	<div className='bg-[#111111] h-[700px] w- absolute top-12 left-12 right-48 rounded-lg overflow-hidden'>
		<TitleWindow name="Terminal"/>
		<Terminal addCommand={addCommand} commands={commands} />
	</div>
  )
}

export default WindowTerminal