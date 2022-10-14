const PasswordGenerator = () => {
	return (
		<>
			<div className='md:container md:mx-auto h-full flex flex-col items-center justify-evenly'>
				<section>
					<h1 className='text-white uppercase text-center'>Password Generator</h1>
				</section>
				<section className='bg-slate-900 h-48 w-80 flex flex-col items-center justify-evenly rounded drop-shadow-md'>
					<div className=''>
						<input type='text' className='' />
						<button className='text-white'>Copy</button>
					</div>
					<input type='range' className='' />
				</section>
				<section>
					<button className='bg-cyan-900 w-32 rounded drop-shadow-md py-2 text-white'>
						Generator
					</button>
				</section>
			</div>
		</>
	)
}

export default PasswordGenerator
