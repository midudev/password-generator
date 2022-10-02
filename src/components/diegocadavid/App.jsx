import React from 'react'

import CliTerminal from './components/cli/CliTerminal'
import WindowTerminal from './components/Terminal/WindowTerminal'


const App = () => {
	return (
		<div className='p-12 bg-[#3F3F46] h-screen font-sans relative'>
			<WindowTerminal />
			<CliTerminal />
		</div>
	)
}

export default App