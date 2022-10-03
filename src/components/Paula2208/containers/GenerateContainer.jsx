import GenerateOptions from '../components/GenerateOptions';
import OutputOptions from '../components/OutputOptions';
import PasswordValues from '../components/PasswordValues';
import '../styles/styles.css'

const GenerateContainer = () => {
	return(
		<div className="paula2208-GenerateContainer">
			<div className="paula2208-GridContainer">
				<div className="paula2208-titleContainer">
					
					<h1>Password Generator</h1>
				</div>

				<div className="paula2208-left-line"></div>
				<PasswordValues />
				<OutputOptions />
				<GenerateOptions />
			</div>
			
		</div>
	)
}

export default GenerateContainer;