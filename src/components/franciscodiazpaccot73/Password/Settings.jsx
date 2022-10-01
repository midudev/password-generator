import React from 'react';

import './slider.css';

const Settings = ({ setPasswordLength, sliderValue }) => {
	return (
		<div>
			<div style={{ borderBottom: "1px solid #d9770694" }} className="text-amber-600 font-semibold pb-2">
				CONFIGURACION
			</div>
			<div className="text-amber-600 text-sm mt-3 mb-2">Longitud</div>
			<div className="slider flex items-center">
				<input onInput={e => setPasswordLength(e.target.value)} type="range" min="8" max="32" value={sliderValue} />
				<p className="w-10 p-2 rounded-md text-sm text-center text-amber-600">{sliderValue}</p>
			</div>
		</div>
	)
}

export default Settings;
