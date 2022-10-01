import { useState } from "react";
import Card from "./Card";

const Password = () => {
	const [length, setPasswordLength] = useState(12)
	const numeric = "0123456789";
	const alpha = "abcdefghijklmnopqrstuvwxyz"
	const alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	const special = "!@#$%^&"

	const allChars = numeric + alpha + special + alphaUpper;

	return (
		<section className="relative p-8 flex flex-col items-center">
			<Card height="h-16" type='password' chars={allChars} length={length} />
			<Card setPasswordLength={setPasswordLength} sliderValue={length} />
		</section>
	)
}

export default Password;
