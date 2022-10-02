import React from 'react'
import TitleWindow from '../TitleWindow'
import CliForm from './CliForm'

const CliTerminal = ({addCommand}) => {
  return (
	<div className='block sm:top-5 sm:right-5 md:top-32 md:right-32 sm:w-52 md:w-64 sm:absolute rounded-lg overflow-hidden ring-2 ring-slate-400'>
		<TitleWindow name='Password CLI' dark={false}/>
		<CliForm addCommand={addCommand}/>
	</div>
  )
}

export default CliTerminal