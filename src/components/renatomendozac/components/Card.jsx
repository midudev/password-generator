import React from 'react'

const Card = ({ className = '', children }) => (
	<div className={`bg-slate-800 p-4 text-slate-50 rounded-sm ${className}`}>
		{children}
	</div>
)

export default Card
