import React from 'react'

const Card = ({ className, children }) => (
	<div className={`bg-slate-500 p-2 text-slate-50 rounded-sm ${className}`}>
		{children}
	</div>
)

export default Card
