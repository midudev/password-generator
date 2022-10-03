import { useState, useEffect } from "react";

const PasswordValues = () => {

	const[value, setValue] = useState(8);

	useEffect(() => {
		console.log(value);
	}, [value])

	return(
		<div className="paula2208-PasswordValuesContainer">

			<div className="paula2208-Checkboxes">
				<input type="checkbox" className="paula2208-Checkbox"/>
				<label>
					AaBbCc
				</label>
			</div>
			
			<div className="paula2208-Checkboxes">
				<input type="checkbox" 
					   className="paula2208-Checkbox"
				/>
				<label>
					123456
				</label>
			</div>

			<div className="paula2208-Checkboxes">
				<input type="checkbox" className="paula2208-Checkbox"/>
				<label>
					* _ / % @
				</label>
			</div>
			<div className="paula2208-rangeComplete">
				<label>
					{value}
				</label>
				<input type="range" 
					min="1" 
					max="15" 
					steps="15"
					value={value}
					className="paula2208-Range"
					onChange={(e) => setValue(e.target.value)}
				/>
			</div>

			
			
		</div>
	)
}

export default PasswordValues;