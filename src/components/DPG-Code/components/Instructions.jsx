export default function Instructions() {
	return (
		<div className='flex flex-col items-start justify-start'>
			<h2 className='mb-4 text-2xl text-white   lg:mb-8 lg:text-3xl   2xl:text-6xl'>
				Instructions:
			</h2>
			<ul className='text-xs text-white   lg:text-base   2xl:text-3xl'>
				<li className='mb-2 flex items-center justify-start   2xl:mb-6'>
					<div className='button-home mr-2 w-5 h-5   lg:w-8 lg:h-8   2xl:w-12 2xl:h-12'></div>
					<p>Home</p>
				</li>

				<li className='mb-2 flex items-center justify-start   2xl:mb-6'>
					<div className='button-start mr-2 w-5 h-5   lg:w-8 lg:h-8   2xl:w-12 2xl:h-12'></div>
					<p>Start</p>
				</li>

				<li className='mb-2 flex items-center justify-start   2xl:mb-6'>
					<a className='mr-2 w-5 h-5 flex items-center justify-center relative   lg:w-8 lg:h-8   2xl:w-12 2xl:h-12'>
						<span className='z-10 text-white'>B</span>
						<div className='button-red w-full h-full absolute'></div>
					</a>
					<p>Generate a password</p>
				</li>

				<li className='mb-2 flex items-center justify-start   2xl:mb-6'>
					<a className='mr-2 w-5 h-5 flex items-center justify-center relative   lg:w-8 lg:h-8   2xl:w-12 2xl:h-12'>
						<span className='z-10 text-white'>A</span>
						<div className='button-red w-full h-full absolute'></div>
					</a>
					<p>Copy password</p>
				</li>

				<li className='mb-0 flex items-center justify-start   lg:mb-2   2xl:mb-6'>
					<span className='mr-2 text-lg text-white'>&#60;</span>
					<p>Decrease length</p>
				</li>

				<li className='mb-0 flex items-center justify-start   lg:mb-2   2xl:mb-6'>
					<span className='mr-2 text-lg text-white'>&#62;</span>
					<p>Increase length</p>
				</li>
			</ul>
		</div>
	)
}
