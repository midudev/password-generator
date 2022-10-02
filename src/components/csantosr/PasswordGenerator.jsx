import React, { useEffect, useMemo, useRef, useState } from 'react';

const NUMBERS = '0123456789'
const LOWER_CASE = 'abcdefghijklmnopqrstuvwxyz';
const UPPER_CASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const SPECIAL = ' !#$%&()*+,-./:;<=>?@[]^_`{|}~';

const PasswordGenerator = () => {
  const [generatedPassword, setGeneratedPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(23);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useLower, setUseLower] = useState(true);
  const [useUpper, setUseUpper] = useState(true);
  const [useSpecial, setUseSpecial] = useState(true);

  const onlyOne = useMemo(() => [useNumbers, useLower, useUpper, useSpecial].filter((a) => a).length === 1, [useNumbers, useLower, useUpper, useSpecial])
  const sliderRef = useRef();

  const handleOnClickCopy = () => {
    navigator.clipboard.writeText(generatedPassword);
  }

  const handleOnSlide = (e) => {
    e.preventDefault();
    setPasswordLength(sliderRef.current.value)
  }

  const generatePassword = (e) => {
    e.preventDefault();
    let alphabet = '';

    if (useNumbers) alphabet += NUMBERS;
    if (useLower) alphabet += LOWER_CASE;
    if (useUpper) alphabet += UPPER_CASE;
    if (useSpecial) alphabet += SPECIAL;

    let generated = '';

    for (let i = 0; i < passwordLength; i++) {
      generated += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }

    setGeneratedPassword(generated)
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-5 bg-gray-600 rounded-lg w-1/3">
        <h1 className='text-center my-2 text-white'>GENERADOR DE CONTRASEÑAS</h1>
        <div className="flex my-2">
          <input
            value={generatedPassword}
            type="text"
            className="rounded-none rounded-l-lg bg-gray-700 border placeholder:text-gray-800 text-white block flex-1 min-w-0 w-full text-sm border-none outline-none p-2.5"
            placeholder="qwerty"
            disabled
          />
          <button className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-800 rounded-r-md" type="button" onClick={handleOnClickCopy}>
            <svg width="24" height="24" xmlns='http://www.w3.org/2000/svg' fill='gray'>
              <path
                fillRule='evenodd'
                d='M7.024 3.75c0-.966.784-1.75 1.75-1.75H20.25c.966 0 1.75.784 1.75 1.75v11.498a1.75 1.75 0 0 1-1.75 1.75H8.774a1.75 1.75 0 0 1-1.75-1.75V3.75zm1.75-.25a.25.25 0 0 0-.25.25v11.498c0 .139.112.25.25.25H20.25a.25.25 0 0 0 .25-.25V3.75a.25.25 0 0 0-.25-.25H8.774z'
              />
              <path d='M1.995 10.749a1.75 1.75 0 0 1 1.75-1.751H5.25a.75.75 0 1 1 0 1.5H3.745a.25.25 0 0 0-.25.25L3.5 20.25c0 .138.111.25.25.25h9.5a.25.25 0 0 0 .25-.25v-1.51a.75.75 0 1 1 1.5 0v1.51A1.75 1.75 0 0 1 13.25 22h-9.5A1.75 1.75 0 0 1 2 20.25l-.005-9.501z' />
            </svg>
          </button>
        </div>
        <div className="flex flex-row items-center my-2">
          {passwordLength}
          <input
            type="range"
            min="1"
            max="30"
            value={passwordLength}
            ref={sliderRef}
            onChange={handleOnSlide}
            className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-700 ml-2"
          />
        </div>
        <div className="w-full flex flex-row justify-between my-2">
          <div className='flex flex-row items-center'>
            <input
              type="checkbox"
              className='w-5 h-5 mr-1'
              checked={useNumbers}
              onChange={() => setUseNumbers(!useNumbers)}
              disabled={onlyOne && useNumbers}
            />
            <label htmlFor="">123</label>
          </div>
          <div className='flex flex-row items-center'>
            <input
              type="checkbox"
              className='w-5 h-5 mr-1'
              checked={useLower}
              onChange={() => setUseLower(!useLower)}
              disabled={onlyOne && useLower}
            />
            <label htmlFor="">abc</label>
          </div>
          <div className='flex flex-row items-center'>
            <input
              type="checkbox"
              className='w-5 h-5 mr-1'
              checked={useUpper}
              onChange={() => setUseUpper(!useUpper)}
              disabled={onlyOne && useUpper}
            />
            <label htmlFor="">ABC</label>
          </div>
          <div className='flex flex-row items-center'>
            <input
              type="checkbox"
              className='w-5 h-5 mr-1'
              checked={useSpecial}
              onChange={() => setUseSpecial(!useSpecial)}
              disabled={onlyOne && useSpecial}
            />
            <label htmlFor="">&$%</label>
          </div>
        </div>
        <button
          type='button'
          className='w-full bg-blue-600 hover:bg-blue-700 mt-2 rounded-md text-white p-2'
          onClick={generatePassword}
        >
          Generar
        </button>
      </div>
    </div>
  )
}

export default PasswordGenerator;