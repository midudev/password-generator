import neumorphism from './styles/neumorphism.module.css'
import styles from './styles/range.module.css'

function Range({ min = 5, max, current = 5, handleChange }) {
	return (
		<>
			<label className={`text-gray-700 font-light rounded-full p-4 ${neumorphism.neuActive}`}>
				Tamaño de contraseña: <span className='font-bold'>{current}</span>
			</label>
			<input
				type='range'
				className={`appearance-none p-4 rounded-full ${styles.rangeInput} ${neumorphism.neuNormal}`}
				min={min}
				max={max}
				step={1}
				value={current}
				onChange={(e) => handleChange(e.target.value)}
			/>
		</>
	)
}

export default Range
