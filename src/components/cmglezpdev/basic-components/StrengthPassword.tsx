import { useEffect, useState, FC } from 'react'


interface Props {
	strength: number
}

const initialColors = ['bg-white', 'bg-white', 'bg-white', 'bg-white']

const fillWithColor = (array: string[], end:number, color:string) => {
	for (let i = 0; i < array.length; i++) {
		array[i] = (i < end) ? color : 'bg-white'
	}

	return array
}

export const StrengthPassword:FC<Props> = ({ strength }) => {
	const [colors, setColors] = useState<string[]>(initialColors)

	useEffect(() => {
		if (!strength) return
		const newColors = getColors(strength)
		setColors(newColors)
	}, [strength])

	const getColors = (strength:number) => {
		if (strength <= 49) return fillWithColor(colors, 1, 'bg-red-600')
		if (strength >= 50 && strength <= 69) return fillWithColor(colors, 2, 'bg-orange-400')
		if (strength >= 70 && strength <= 84) return fillWithColor(colors, 3, 'bg-yellow-400')
		if (strength >= 85) return fillWithColor(colors, colors.length, 'bg-green-600')
	}

	if (!colors) { return null }

	return (
		<div className='w-8/12 flex flex-row'>
			<div className={`w-1/4 h-1 ${colors[0]} m-1`}></div>
			<div className={`w-1/4 h-1 ${colors[1]} m-1`}></div>
			<div className={`w-1/4 h-1 ${colors[2]} m-1`}></div>
			<div className={`w-1/4 h-1 ${colors[3]} m-1`}></div>
		</div>
	)
}
