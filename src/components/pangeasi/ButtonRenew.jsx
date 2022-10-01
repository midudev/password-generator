import React from "react";
import { useNumberCharacters } from "./hooks/useNumberCharacters";
import { useRawPassword } from "./hooks/useRawPassword";
import RenewIcon from "./RenewIcon";
import { randomWords } from './utils/generatePassword'


const ButtonRenew = () => {
	const [value] = useNumberCharacters()
	const [, setRawPass] = useRawPassword()

	const handleClickRenew = () => {
		setRawPass(randomWords(value))
	}

	return (
		<div>
			<button
			className="rounded-full bg-green-400 w-fit hover:brightness-125"
				onClick={handleClickRenew}
			>
				<RenewIcon className="text-4xl" />
			</button>
		</div>
	);
}

export default ButtonRenew
