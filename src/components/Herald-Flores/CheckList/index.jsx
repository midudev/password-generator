import React, { useState } from 'react'
import Check from '../Check/index'

const List = () => {
	const checks = [
		{
			id: 'checkLowercase',
			text: 'Lowercase'
		},
		{
			id: 'checkUppercase',
			text: 'UpperCase'
		},
		{
			id: 'checkNumber',
			text: 'Numbers'
		},
		{
			id: 'checkSymbols',
			text: 'Special characters'
		}
	]

	return (
		<div className='grid gap-3 grid-cols-2 py-4'>
			{checks.map((check) => (
				<Check {...check} key={`check-item-${check.id}`} />
			))}
		</div>
	)
}

export default List
