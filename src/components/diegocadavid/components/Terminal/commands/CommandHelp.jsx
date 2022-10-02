import React, { useEffect } from 'react'

const CommandHelp = ({ docs }) => {
	return (
		<div>
			{docs.map((e) => {
				return (
					<div key={e.name}>
						<div className='pl-5 grid grid-cols-[200px_1fr]'>
							<p>{e.name}</p>
							<p>{e.info}</p>
						</div>
						<div>
							{e.options.map((o) => {
								return (
									<div key={o.name} className='pl-10 grid grid-cols-[200px_1fr]'>
										<p> {`--${o.name}=<${o.type}>`} </p>
										<p> {o.info} </p>
									</div>
								)
							})}
						</div>
					</div>
				)
			})}
			<br />
		</div>
	)
}

export default CommandHelp
