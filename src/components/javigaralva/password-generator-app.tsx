import { Button } from './components/button'
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
									<GenerateButton onClick={generatePassword} />
									<CopyButton onClick={handleCopy} />
								</div>
								<PasswordLengthSlider
									passwordLength={passwordLength}
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

function PasswordLengthSlider({ passwordLength, onChange }) {
	return (
		<input
			className='w-60 h-1 outline-2 rounded-lg outline-dotted outline-offset-8 outline-slate-50/25 appearance-none cursor-pointer bg-yellow-600/50 accent-yellow-600'
			type='range'
			min={MIN_PASSWORD_LENGTH}
			max={MAX_PASSWORD_LENGTH}
			value={passwordLength}
			onChange={onChange}
		/>
	)
}
function GenerateButton({ onClick }) {
	return (
		<Button
			className='w-44 bg-yellow-600 hover:shadow-yellow-400/25 hover:bg-yellow-500'
			onClick={onClick}
		>
			{' '}
			Generate{' '}
		</Button>
	)
}

function CopyButton({ onClick }) {
	return (
		<Button
			className='w-20 bg-zinc-400 hover:shadow-zinc-200/25 hover:bg-zinc-300'
			onClick={onClick}
		>
			{' '}
			Copy{' '}
		</Button>
	)
}
