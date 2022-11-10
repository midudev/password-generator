import { ColorizedPassword } from './components/colorized-password'
import { MAX_PASSWORD_LENGTH, MIN_PASSWORD_LENGTH } from './constants/constants'
import { usePasswordGenerator } from './hooks/use-password-generator'

export default function Main() {
	const { passwordLength, setPasswordLength, password, generatePassword, replaceCharacterAt } =
		usePasswordGenerator()

	const handleCopy = () => {
		navigator.clipboard.writeText(password)
	}

	return (
		<div className='w-screen h-screen bg-stone-800 select-none'>
			<div className='flex place-content-center h-screen'>
				<div className='grid min-w-100 place-items-center justify-evenly grid-rows-1'>
					<div className='min-h-min mx-10 text-center mt-32'>
						<ColorizedPassword password={password} onClickCharacter={replaceCharacterAt} />
					</div>
					<div className='flex justify-center items-end min-w-full min-h-full'>
						<div className='mb-32 sm:mb-48'>
							<div className='flex flex-col place-items-center gap-10'>
								<div className='flex gap-3'>
									<button
										className='bg-yellow-600 rounded min-w-fit font-black uppercase py-2 w-44 text-lg text-black/75 tracking-wide duration-300 hover:shadow-yellow-400/25 scale-100 hover:bg-yellow-500 active:scale-95 shadow-2xl shadow-slate-900'
										onClick={generatePassword}
									>
										Generate
									</button>
									<button
										className='bg-yellow-600 rounded min-w-fit font-black uppercase py-2 w-20 text-lg text-black/75 tracking-wide duration-300 hover:shadow-yellow-400/25 scale-100 hover:bg-yellow-500 active:scale-95 shadow-2xl shadow-slate-900'
										onClick={handleCopy}
									>
										Copy
									</button>
								</div>
								<input
									className='w-60 h-1 outline-2 rounded-lg outline-dotted outline-offset-8 outline-slate-50/25 appearance-none cursor-pointer bg-yellow-600/50 accent-yellow-600'
									type='range'
									min={MIN_PASSWORD_LENGTH}
									max={MAX_PASSWORD_LENGTH}
									value={passwordLength}
									onChange={(e) => setPasswordLength(Number(e.target.value))}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
