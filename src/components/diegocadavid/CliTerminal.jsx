import React from 'react'
import TitleWindow from './TitleWindow'
import CliForm from './CliForm'

const CliTerminal = ({ addCommand }) => {
	return (
		<div className='block sm:w-40  md:top-2 md:right-2 lg:top-32 lg:right-24 md:w-52 lg:w-64 md:absolute rounded-lg overflow-hidden ring-2 ring-slate-400'>
			<TitleWindow name='Password CLI' dark={false} />
			<CliForm addCommand={addCommand} />
		</div>
	)
}

export default CliTerminal
