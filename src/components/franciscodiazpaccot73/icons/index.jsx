import React from "react";

import RedoIcon from "./redo";
import CopyIcon from "./copy";
import CheckIcon from "./check";

const Icons = ({ type, callback }) => {
	const icons = {
		redo: RedoIcon,
		copy: CopyIcon,
		check: CheckIcon
	}

	const Icon = icons[type];

	return (
		<span className="mx-2 cursor-pointer z-100" onClick={callback}>
			<Icon />
		</span>
	)
}

Icons.defaultProps = {
	type: 'redo',
	callback: () => {}
}

export default Icons
