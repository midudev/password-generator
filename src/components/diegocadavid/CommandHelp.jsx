import React, { useEffect } from 'react'

const CommandHelp = ({ docs }) => {
	return (
		<div>
			{docs.map((e) => {
				return (
					<div key={e.name}>
						<div className='pl-2 lg:pl-5 grid grid-cols-[100px_1fr] lg:grid-cols-[200px_1fr]'>
							<p>{e.name}</p>
							<p>{e.info}</p>
						</div>
						<div>
							{e.options.map((o) => {
								return (
									<div
										key={o.name}
										className='pl-5 lg:pl-10 block lg:grid lg:grid-cols-[200px_1fr] mb-2 lg:mb-0'
									>
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
