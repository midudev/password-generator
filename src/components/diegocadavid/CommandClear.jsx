import React, { useEffect } from 'react'

const CommandClear = ({ handleReset }) => {

	useEffect(() => {
	  handleReset();
	}, [])
	

  return;
}

export default CommandClear