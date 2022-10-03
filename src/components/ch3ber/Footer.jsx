export const Footer = () => {
	return (
		<footer className='mt-20 p-12 text-[#170f1e]  bg-[#E5E1E6]'>
			<div
				className='flex flex-col justify-between max-w-2xl mx-auto md:flex-row gap-10'
			>
				<section>
					<h3 className='font-bold'>Desarrollador</h3>
					<p className=''>
            Hecho con &#128153; por <strong>Eber Alejo</strong>
					</p>

				</section>

				<section>
					<h3 className='font-bold title-3'>Contacto</h3>
					<ul
						className='grid grid-cols-2 md:grid-cols-4 md:gap-1 gap-3'
					>
						<li>
							<a
								className='transition hover:text-purple-800 hover:underline'
								rel='noreferrer'
								href='https://github.com/ch3ber'
								target='_blank'
							>
                GitHub
							</a>
						</li>
						<li>
							<a
								className='transition hover:text-purple-800 hover:underline'
								rel='noreferrer'
								href='https://twitter.com/ch3ber_dev'
								target='_blank'
							>
                Twitter
							</a>
						</li>
						<li>
							<a
								className='transition hover:text-purple-800 hover:underline'
								rel='noreferrer'
								href='https://www.linkedin.com/in/eberalejo'
								target='_blank'
							>
                LinkedIn
							</a>
						</li>
					</ul>
				</section>
			</div>
		</footer>
	)
}
