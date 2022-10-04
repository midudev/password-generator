import { createSignal } from 'solid-js'

function PasswordGenerator() {
	const [passwordLength, setPasswordLength] = createSignal(12)
	const [password, setPassword] = createSignal('xxXxxXxxxxXXXX')

	const onRangeChange = (event) => {
		const lengthChosen = event.target.value
		setPasswordLength(lengthChosen)
	}

	return (
		<>
			<div class='bg-slate-200 w-1/4 h-auto rounded-xl p-4'>
				<div class='flex flex-col items-center justify-center gap-1'>
					<h2 class='text-md font-bold text-slate-900 uppercase my-4'>Generador de Contraseñas</h2>
					<label for='passwordLenght' class='block mb-2 text-sm font-medium text-gray-900'>
						Longitud de Contraseña
					</label>
					<input
						id='passwordLenght'
						class='w-11/12'
						type='range'
						min={6}
						max={20}
						value={passwordLength()}
						step={2}
						onChange={(evt) => onRangeChange(evt)}
					/>
					{passwordLength()}
					<span class='flex flex-col items-start gap-2 w-11/12'>
						<label for='uppercase' class='inline-flex relative items-center cursor-pointer'>
							<input type='checkbox' value='' id='uppercase' class='sr-only peer' />
							<div class="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
							<span class='ml-3 text-sm font-medium text-gray-900'>Mayúsculas</span>
						</label>
						<label for='lowercase' class='inline-flex relative items-center cursor-pointer'>
							<input type='checkbox' value='' id='lowercase' class='sr-only peer' />
							<div class="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
							<span class='ml-3 text-sm font-medium text-gray-900'>Minúsculas</span>
						</label>
						<label for='specialchars' class='inline-flex relative items-center cursor-pointer'>
							<input type='checkbox' value='' id='specialchars' class='sr-only peer' />
							<div class="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
							<span class='ml-3 text-sm font-medium text-gray-900'>Simbolos Especiales</span>
						</label>
						<label for='numbers' class='inline-flex relative items-center cursor-pointer'>
							<input type='checkbox' value='' id='numbers' class='sr-only peer' />
							<div class="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
							<span class='ml-3 text-sm font-medium text-gray-900'>Números</span>
						</label>
					</span>
					<input
						class='my-4 w-full h-[30px] rounded-md text-slate-700 px-2'
						type='text'
						value={password()}
						readOnly
					/>
					<button class='bg-blue-900 text-slate-100 w-full my-2 rounded-lg px-4 py-2'>
						Generar Contraseña
					</button>
				</div>
			</div>
		</>
	)
}

export default PasswordGenerator
