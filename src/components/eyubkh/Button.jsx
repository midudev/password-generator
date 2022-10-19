import './style/generate.css'

export const Button = ({ handler, children }) => {
	return (
		<div onClick={handler} id='eyubkh-generate'>
			{children}
		</div>
	)
}
