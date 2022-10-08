import { Fragment } from 'react'
import useGeneratePassword from './hooks/useGeneratePassword'

import ArrowBack from './icons/ArrowBack'
import PadLock from './icons/PadLock'
import Clipboard from './icons/Clipboard'

import Counter from './Counter'
import Slider from './Slider'
import LevelIndicator from './LevelIndicator'

function Generator() {
	const {
		password,
		generatePassword,
		generationParams,
		changeGenerationParam,
		maxCharactersReached,
		copyToClipboard
	} = useGeneratePassword()

	const { characters, digits, capitals, symbols } = generationParams

	/**
	 * Hi manteiners and Midu!
	 * I am using an image (didn't know if we can use images)
	 * I added it in a folder with my Github name inside the public directory
	 * Gretings from Argentina!
	 * @returns love 🤍
	 */

	return (
		<Fragment>
			<section className='h-full p-8 text-white md:h-screen md:flex md:flex-col md:justify-center md:w-1/2 xl:pl-20 2xl:pl-60 '>
				<nav className='flex justify-between'>
					<a
						href='https://hacktoberfest-2022.vercel.app/'
						className='transiton-all duration-300 hover:-translate-x-1'
					>
						<ArrowBack />
					</a>
					<LevelIndicator length={generationParams.characters} />
				</nav>
				<header className='mt-6 leading-normal font-medium  text-xl'>
					<h1>Create</h1>
					<h2 className='text-white/40'>a solid password by</h2>
					<h2 className='text-white/40'>choosing custom properties</h2>
				</header>

				<div className='font-medium text-md text-white/60'>
					{/* Generation params */}
					<div className='mt-8'>
						<h3>Total characters</h3>
						<div className='flex gap-4 items-center'>
							<span className='text-2xl text-white'>{characters}</span>
							<Slider
								name='characters'
								value={characters}
								changeGenerationParam={changeGenerationParam}
							/>
						</div>
					</div>

					<div className='grid grid-cols-1 gap-5 md:grid-cols-2 2xl:grid-cols-1'>
						<div className='mt-8'>
							<h3>Number digits</h3>
							<div className='flex justify-between items-center'>
								<span className='text-2xl text-white'>{digits}</span>
								<Counter
									name='digits'
									value={digits}
									disabled={maxCharactersReached}
									changeGenerationParam={changeGenerationParam}
								/>
							</div>
						</div>
						<div className='mt-8 2xl:mt-2'>
							<h3>Capital letters</h3>
							<div className='flex justify-between items-center'>
								<span className='text-2xl text-white'>{capitals}</span>
								<Counter
									name='capitals'
									value={capitals}
									disabled={maxCharactersReached}
									changeGenerationParam={changeGenerationParam}
								/>
							</div>
						</div>

						<div className='mt-8 md:mt-2'>
							<h3>Symbols</h3>
							<div className='flex justify-between items-center'>
								<span className='text-2xl text-white'>{symbols}</span>
								<Counter
									name='symbols'
									value={symbols}
									disabled={maxCharactersReached}
									changeGenerationParam={changeGenerationParam}
								/>
							</div>
						</div>
					</div>

					<div className='mt-8'>
						<button
							onClick={generatePassword}
							className='transition-all duration-300 bg-spark w-full flex items-center justify-center gap-2 py-4 rounded-lg text-black font-semibold hover:opacity-75'
						>
							Generate password
							<PadLock />
						</button>
					</div>
				</div>
			</section>

			{/* Show section */}
			<section className='h-full  px-8 pb-8 pt-4 md:relative md:w-1/2 md:bg-transparent md:flex md:items-center md:justify-center md:h-screen xl:pr-20 2xl:pr-60 '>
				<img
					src='/galfrevn/bgpattern.png'
					className='hidden fixed right-0 top-0 object-contain w-1/3 md:block '
				/>
				{/* Password box */}
				{password && (
					<div className='flex flex-col w-full z-10'>
						<p className='text-sm text-white mb-2 '>Your generated password: </p>
						<div className='bg-black/20 backdrop-blur-lg rounded-xl p-5 flex justify-between md:w-full'>
							<div
								className={`${
									password.length > 16 ? 'text-md' : 'text-lg'
								} text-white font-medium `}
							>
								{password}
							</div>
							<button
								className='transition-all duration-300 hover:-translate-y-1'
								onClick={copyToClipboard}
							>
								<Clipboard />
							</button>
						</div>
						<div className='flex gap-2 mt-2 items-center text-white '>
							<p className='text-sm z-10 '>Security level: </p>
							<LevelIndicator length={password.length} />
						</div>
					</div>
				)}
			</section>
		</Fragment>
	)
}

export default Generator
