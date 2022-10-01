import React, {useState, useEffect} from 'react'
import { BotonAumentar, BotonDisminuir, BotonCheck, BotonGenerar} from './miniComponents/buttons'
import GeneratePassword from './functions/GeneratePassword'


const Page = ()=>{
  const [configuracion, setConfiguracion] = useState({
	numerosDeCaracteres: 7,
	simbols: true,
	capitalLetters: true,
	numbers: true,
  })	

  const [passwordGenerada, cambiarPasswordGenerada] = useState('');

  useEffect(()=>{
	cambiarPasswordGenerada(GeneratePassword(configuracion));
  }, [configuracion])

  const incrementarNumeroCaracteres = ()=>{
	setConfiguracion((configuracionAnterior)=>{
		const nueveConfiguracion = {...configuracionAnterior};
		nueveConfiguracion.numerosDeCaracteres += 1;
		return nueveConfiguracion;
	});
  }

  const disminuirNumeroCaracteres = () => {
	if(configuracion.numeroDeCaracteres > 1){
		cambiarConfiguracion((configuracionAnterior) => {
			const nuevaConfiguracion = {...configuracionAnterior};
			nuevaConfiguracion.numeroDeCaracteres -= 1;
			return nuevaConfiguracion; 
		});
	}
  }

  	const toggleSimbolos = () => {
		cambiarConfiguracion((configuracionAnterior) => {
			const nuevaConfiguracion = {...configuracionAnterior};
			nuevaConfiguracion.simbolos = !nuevaConfiguracion.simbolos;
			return nuevaConfiguracion; 
		});
	}

	const toggleNumeros = () => {
		cambiarConfiguracion((configuracionAnterior) => {
			const nuevaConfiguracion = {...configuracionAnterior};
			nuevaConfiguracion.numeros = !nuevaConfiguracion.numeros;
			return nuevaConfiguracion; 
		});
	}

	const toggleMayusculas = () => {
		cambiarConfiguracion((configuracionAnterior) => {
			const nuevaConfiguracion = {...configuracionAnterior};
			nuevaConfiguracion.mayusculas = !nuevaConfiguracion.mayusculas;
			return nuevaConfiguracion; 
		});
	}

	const onSubmit = (e) =>{
		e.preventDefault();
		cambiarPasswordGenerada(GeneratePassword(configuracion));
	}

  return (
	<div className='container'>
		<h1 className='title'>Generador de contraseñas</h1>

		<form onSubmit={onSubmit}>
			<div>
				<label>Número de caracteres:</label>
				<div className='controles'>
					<BotonDisminuir click={disminuirNumeroCaracteres}/>
					<span>{configuracion.numerosDeCaracteres}</span>
					<BotonAumentar click={incrementarNumeroCaracteres}/>
				</div>
			</div>
			<div>
				<label>¿Incluir Símbolos?</label>
				<BotonCheck seleccionado={configuracion.simbols} click={toggleSimbolos}/>
			</div>
			<div>
				<label>¿Incluir Numeros?</label>
				<BotonCheck seleccionado={configuracion.numbers} click={toggleNumeros} />
			</div>
			<div>
				<label>¿Incluir Mayusculas?</label>
				<BotonCheck seleccionado={configuracion.capitalLetters} click={toggleMayusculas} />
			</div>
			<div>
				<BotonGenerar />
				<input type="text" readOnly={true} value={passwordGenerada} />
			</div>
		</form>
	</div>
  )
}

export default Page
