import React from "react";

import { getCheckboxLabel } from "../utils";

import './styles.css'

const Checkbox = ({ id, checked, onCheck }) =>
	<div className="flex items-center">
		<input onChange={() => {}} type="checkbox" className="checkbox-input hidden" checked={checked} />
		<label>
			<span onClick={() => onCheck(id)} style={{ border: '1px solid #d97706' }} className="h-4 w-4 checkbox cursor-pointer rounded inline-block relative" />
		</label>
		<span onClick={() => onCheck(id)} className="cursor-pointer text-sm text-amber-600 h-6 ml-2">{getCheckboxLabel[id]}</span>
	</div>
	
export default Checkbox;
