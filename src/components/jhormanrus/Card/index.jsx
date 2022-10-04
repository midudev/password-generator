import './style.css'

const Card = ({ children, ...props }) => (
	<div {...props}>
		<div className='card'>
			<div className='card-bg'>{children}</div>
		</div>
	</div>
)

export default Card
