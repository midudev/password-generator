import React, { useRef, useState } from 'react'
import './styles/style.css'
import generatorPassword from './utils/generatorPassword'

function MainContainer() {
    const [password, setPassword] = useState('')
    const [passwordLength, setPasswordLength] = useState(10)
    const rangeRef = useRef()

    const handleRange = () => {
        setPasswordLength(rangeRef.current.value)
    }

    const handleNumber = (e) => {
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            setPasswordLength(e.target.value)
        }
    }

    async function copyPassword() {
        await navigator.clipboard.writeText(password);
        alert('contraseña copiada')
    }

    return (
        <main className="flex h-screen">
            <div className="m-auto container">
                <h1 className="text-3xl title" > Genera una contraseña segura </h1>

                <div className="flex password-container">
                    <button onClick={() => copyPassword()}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3">
                            </path>
                        </svg>
                    </button>
                    <p className='password'>{password}</p>
                </div>

                <div className='button-container'>
                    <button onClick={() => generatorPassword(passwordLength, setPassword)}
                        type="button"
                        className="transition button-generator duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                        Generar contraseña
                    </button>
                </div>

                <div className='settings-container'>
                    <h4 className="text-2xl subtitle">Personaliza la contraseña</h4>
                    <p>Selecciona el número de caracteres:  </p>
                    <input
                        type='range'
                        value={passwordLength}
                        onChange={handleRange}
                        ref={rangeRef}
                        className="input-range"
                        min='8'
                        max='50'
                    />
                    <p> Número de caracteres:
                        <input
                            type="number"
                            className='input-number'
                            min="8"
                            max="50"
                            value={passwordLength}
                            onChange={(e) => handleNumber(e)}
                        />
                    </p>
                </div>
            </div>
        </main>
    )
}

export default MainContainer