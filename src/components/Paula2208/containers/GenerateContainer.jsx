import { useState, useEffect } from "react";

import GenerateOptions from '../components/GenerateOptions';
import OutputOptions from '../components/OutputOptions';
import PasswordValues from '../components/PasswordValues';

import '../styles/styles.css'

const GenerateContainer = () => {

	const [value, setValue] = useState(8);
	const [abc, setAbc] = useState(true);
	const [numbers, setNumbers] = useState(true);
	const [special, setSpecial] = useState(true);

	const [password, setPassword] = useState('holiii');

	return (
		<div className="paula2208-GenerateContainer">
			<div className="paula2208-GridContainer">
				<div className="paula2208-titleContainer">
					<h1>Password Generator</h1>
				</div>

				<div className="paula2208-left-line"></div>
				<PasswordValues 
					value={value}
					setValue={setValue}
					abc={abc}
					setAbc={setAbc}
					numbers={numbers}
					setNumbers={setNumbers}
					special={special}
					setSpecial={setSpecial}
				/>
				<GenerateOptions />
				<OutputOptions 
					password={password}
				/>
			</div>

		</div>
	)
}

export default GenerateContainer;