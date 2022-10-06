import React from 'react'

export const Icon = ({ state }) => (
	<img
		className={'icon ' + (state ? 'icon-success' : 'icon-default')}
		src='https://img.icons8.com/material-rounded/24/000000/copy.png'
	/>
)
