import React from "react";
import Generator from "./Generator";
import Settings from "./Settings";

const Card = ({ height, type, ...others }) => {
	const wrapperClass =
		`${height} my-3 w-full roudend-md border border-amber-700 relative flex flex-col justify-center p-6 bg-transparent rounded shadow-xl hover:shadow-lg transition max-w-md md:max-w-xl md:h-full md:max-h-lg md:p-8`

	const Component = type === 'password' ? Generator : Settings;
	
	return (
		<div className={wrapperClass}>
			<Component {...others} />
		</div>
	)
}

Card.defaultProps = {
	height: "h-full",
	type: 'default'
}

export default Card;
