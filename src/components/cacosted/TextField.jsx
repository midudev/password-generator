import React from "react";

export const TextField = ({readOnly, value}) => {
	return (
		<input 
			className="text-slate-400 w-full px-5 py-3 bg-gray-800 rounded-lg" 
			name="password" 
			id="password" 
			type="text" 
			readOnly={readOnly}
			value={value}
		/>
	)
}