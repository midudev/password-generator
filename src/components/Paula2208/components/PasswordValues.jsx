

const PasswordValues = (props) => {

	const {value, 
		   setValue, 
		   abc, 
		   setAbc, 
		   numbers, 
		   setNumbers, 
		   special, 
		   setSpecial} = props;

	const changeCheckboxes = (type) => {

	}

	return(
		<div className="paula2208-PasswordValuesContainer">

			<div className="paula2208-Checkboxes">
				<input type="checkbox" 
					   className="paula2208-Checkbox"
					   checked={abc}
					   onChange={() => changeCheckboxes('abc')}
				/>
				<label>
					AaBbCc
				</label>
			</div>
			
			<div className="paula2208-Checkboxes">
				<input type="checkbox" 
					   className="paula2208-Checkbox"
					   checked={numbers}
					   onChange={() => changeCheckboxes('numbers')}
				/>
				<label>
					123456
				</label>
			</div>

			<div className="paula2208-Checkboxes">
				<input type="checkbox" 
					   className="paula2208-Checkbox"
					   checked={special}
					   onChange={() => changeCheckboxes('special')}
				/>
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