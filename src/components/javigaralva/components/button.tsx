export function Button({ children, className = '', onClick }) {
	return (
		<button
			className={`${className} rounded min-w-fit font-black uppercase py-2 text-lg text-black/75 tracking-wide duration-300 scale-100 active:scale-95 shadow-2xl shadow-slate-900`}
			onClick={onClick}
		>
			{children}
		</button>
	)
}
