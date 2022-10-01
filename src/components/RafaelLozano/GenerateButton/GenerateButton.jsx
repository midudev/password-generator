import './generateButton.css'
const GenerateButton = ({ title, ...props }) => {
	return <button {...props}>{title}</button>
}

export default GenerateButton
