import style from './select.module.css'

export default function SelectPasswordType({ label, name, value, onChange }) {
	return (
		<div className='flex justify-between items-center py-4'>
			<label htmlFor={name} className='mr-2 font-semibold'>
				{label}
			</label>
			<select
				id={name}
				name={name}
				className={`w-1/2 py-2 px-4 text-left text-white bg-neutral-900 ring-1 ring-zinc-600/70 rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 focus:ring-offset-neutral-800 focus:outline-none ${style['select-pass-type']}`}
				value={value}
				onChange={onChange}
			>
				<option>Smart Password</option>
				<option>Random Password</option>
				<option>PIN Code</option>
			</select>
		</div>
	)
}
