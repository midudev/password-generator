
const OutputOptions = (props) => {

	const {password} = props;

	return(
		<div className="paula2208-OutputOptionsContainer">
			<input type="password" value={password}/>
			<button>
				Copy
			</button>
			<button>
				See
			</button>
		</div>
	)
}

export default OutputOptions;