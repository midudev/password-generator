import GenerateButton from './GenerateButton/GenerateButton'

const Solution = () => {
	return (
		<GenerateButton
			title={'Generar contraseña'}
			onClick={() => console.log('click generate pass')}
		/>
	)
}

export default Solution
