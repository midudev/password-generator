import storage from '../bloodboy21/Options'

const optionsList = {
	numbers: 'Numbers',
	symbols: 'Symbols'
}

const Options = ({ optionHandler, options }) => {
	return Object.entries(optionsList).map(([option, title]) => {
		return (
			<li key={option} className='flex  justify-center '>
				<input
					type='checkbox'
					name={option}
					id={option}
					checked={options[option]}
					onChange={optionHandler}
					className='align-top mr-2 accent-blue-600 w-4 h-4 border-gray-300 duration-150 ease-in-out focus:ring-blue-500 inline-block mt-1 cursor-pointer'
				/>
				<label htmlFor={option} className='form-check-label inline-block '>
					{title}
				</label>
			</li>
		)
	})
}

const SizeSlider = ({ options, setLength }) => {
	return (
		<div className='w-full'>
			<label
				htmlFor='password-length'
				className='block mb-2 text-sm font-medium text-gray-900 dark:text-blue-300'
			>
				Length: {options.length}
			</label>
			<input
				id='password-length'
				type='range'
				min='8'
				max='64'
				className='w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-blue-600 '
				value={options.length}
				onChange={setLength}
			/>
		</div>
	)
}

const Alert = ({ alert, setAlert }) => {
	setTimeout(() => {
		setAlert({
			...alert,
			show: false
		})
	}, 5000)
	const alertType =
		{
			success: 'green',
			error: 'red',
			warning: 'yellow'
		}[alert.type] || 'blue'
	return (
		<div
			className={`${
				alert.show ? 'flex' : 'hidden'
			} fixed top-0 right-0 w-full h-full justify-end items-start z-50 transition-all duration-300 ease-linear`}
		>
			<div className='bg-slate-800 w-72 rounded-lg p-3 flex flex-col gap-1 align-top mt-2 mr-3 transition-all first-letter:uppercase'>
				<h3 className={`text-xl font-bold text-${alertType}-500`}>{alert.title}</h3>
				<p className='text-slate-100'>{alert.message}</p>
			</div>
		</div>
	)
}

function PasswordGenerator() {
	const { options, setOptions, createPassword, password, setPassword, alert, setAlert } = storage()
	const optionHandler = (e) => {
		const { name, checked } = e.target
		setOptions({ ...options, [name]: checked })
	}

	const passwordHandler = () => setPassword(createPassword())
	const setLength = (e) => setOptions({ ...options, length: e.target.value })
	const copyToClipboard = () => {
		navigator.clipboard.writeText(password)
		setAlert({
			show: true,
			title: 'Success',
			message: 'Password copied to clipboard',
			type: 'success'
		})
	}
	return (
		<main className='flex flex-col text-white justify-center items-center w-full gap-2'>
			<Alert alert={alert} setAlert={setAlert} />
			<h2 className='text-xl font-bold mt-3'>Password generator</h2>
			<section className='flex flex-wrap m-4  justify-center  box-border w-full lg:w-1/3 h-auto'>
				<input
					type='text'
					value={password}
					className='rounded-lg px-2 py-1 bg-transparent w-auto lg:w-full h-auto text-xl font-bold text-white border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-sans'
					readOnly
				/>
			</section>
			<section className='flex gap-2 w-full justify-center'>
				<button
					onClick={passwordHandler}
					className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded focus:shadow-outline '
				>
					Generate
				</button>
				<button
					className='bg-slate-500 hover:bg-slate-700 text-white font-bold py-1 px-2 rounded  focus:shadow-outline '
					onClick={copyToClipboard}
				>
					Copy
				</button>
			</section>
			<section className='flex justify-center w-full overflow-hidden mt-3 font-special'>
				<div className='flex flex-col w-[85%] lg:w-1/3 rounded-lg justify-center  bg-slate-800 gap-3 p-3'>
					<SizeSlider options={options} setLength={setLength} />
					<div className='w-full flex align-baseline justify-start '>
						<ul className='flex  gap-3 align-baseline items-baseline'>
							<Options options={options} optionHandler={optionHandler} />
						</ul>
					</div>
				</div>
			</section>
		</main>
	)
}

export default PasswordGenerator
