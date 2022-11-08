import React from 'react'

import '../../styles/Tooltip.css'
const Tooltip = (props) => {
	const { message, position, displayTooltip } = props

	return (
		<>
			{displayTooltip
				? (
					<div className={`tooltip-bubble tooltip-${position}`}>
						<div className='tooltip-message'>{message}</div>
					</div>
				)
				: (
					''
				)}
		</>
	)
}

export default Tooltip
