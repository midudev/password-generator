import { useState } from "react"

export const Card = () => {
	const [passLength, setPassLength] = useState(0)

	const handleChange = ({target}) => {
		setPassLength(target.value)
	}
	return (
		<main class="text-white flex justify-center items-center">
			<article class="bg-yellow-400 rounded-xl">
				<h1 class="font-bold text-2xl">Password Generator</h1>
				<input onChange={handleChange} type="range" name="password-length" id="password-length" min="0" max="20" value={passLength}/>
				<span class="block bg-slate-400 p-5">{passLength}</span>
				<button>Generate</button>
			</article>
		</main>
	)
}