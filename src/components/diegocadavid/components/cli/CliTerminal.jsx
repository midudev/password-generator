import React from 'react'
import TitleWindow from '../TitleWindow'
import CliForm from './CliForm'

const CliTerminal = () => {
  return (
	<div className='top-32 right-32 w-64 absolute rounded-lg overflow-hidden ring-2 ring-slate-400'>
		<TitleWindow name='Password CLI' dark={false}/>
		<CliForm />
	</div>
  )
}

export default CliTerminal