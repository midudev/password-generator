export const Header = () => {
	return (
		<div className='grid gap-2 text-center pb-4'>
			<a href='/'>
				<img
					className='w-40 h-auto mx-auto absolute top-8 left-4'
					src='/logo.svg'
					alt='Hacktoberfest logo'
				/>
			</a>
			<h1 className='font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#ffe27d] via-[#64e2ff] to-[#b4ff39]'>
				Generador de
			</h1>
			<h1 className='font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#b4ff39] via-[#e5e1e6] to-[#9092ff]'>
				Contraseñas
			</h1>
		</div>
	)
}
