import * as React from 'react'

const GrinningFace = (props) => (
	<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 60' width='1em' height='1em' {...props}>
		<circle cx={36} cy={36} r={23} fill='#fcea2b' />
		<path
			fill='#fff'
			d='M50.595 41.64a11.555 11.555 0 0 1-.87 4.49c-12.49 3.03-25.43.34-27.49-.13a11.435 11.435 0 0 1-.83-4.36h.11s14.8 3.59 28.89.07Z'
		/>
		<path
			fill='#ea5a47'
			d='M49.725 46.13c-1.79 4.27-6.35 7.23-13.69 7.23-7.41 0-12.03-3.03-13.8-7.36 2.06.47 15 3.16 27.49.13Z'
		/>
		<g fill='none' stroke='#000' strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}>
			<path d='m25.168 27.413 6.587 4.014-6.587 3.738M46.832 27.413l-6.587 4.014 6.587 3.738' />
			<circle cx={36} cy={36} r={23} />
			<path d='M50.595 41.64a11.555 11.555 0 0 1-.87 4.49c-12.49 3.03-25.43.34-27.49-.13a11.435 11.435 0 0 1-.83-4.36h.11s14.8 3.59 28.89.07Z' />
			<path d='M49.725 46.13c-1.79 4.27-6.35 7.23-13.69 7.23-7.41 0-12.03-3.03-13.8-7.36 2.06.47 15 3.16 27.49.13Z' />
		</g>
	</svg>
)

export default GrinningFace
