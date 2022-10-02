import { useState } from 'react'
import { NUMS, LETTERS, SYMBOLS } from './data.js'
import gameboy from '../img/gameboy.png'
import button from '../img/button.png'
import startButton from '../img/button-start.png'

export default function Form () {
  const [password, setPassword] = useState('P$zkl5#0')
  const [range, setRange] = useState(8)

  const [start, setStart] = useState(true)
  const [label, setLabel] = useState(false)

  const getRandomValues = (range) => {
    const newPassword = []

    for (let r = 0; r < range; r++) {
      const type = Math.floor(Math.random() * 3)

      switch (type) {
        case 0:
          newPassword.push(NUMS[Math.floor(Math.random() * NUMS.length)])
          break
        case 1:
          newPassword.push(LETTERS[Math.floor(Math.random() * LETTERS.length)])
          break
        case 2:
          newPassword.push(SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)])
          break
        default:
          break
      }
    }

    return newPassword.join('')
  }

  const generatePassword = (e) => {
    e.preventDefault()
    setPassword(() => getRandomValues(range))
  }

  const copyToClipboard = (e) => {
    navigator.clipboard.writeText(password)
    setLabel(true)
    setTimeout(() => {
      setLabel(false)
    }, 2500)
  }

  const sumRange = () => {
    if(range >= 8 && range < 20) setRange(prev => prev + 1)
    return
  }
  const restRange = () => {
    if(range > 8 && range <= 20) setRange(prev => prev - 1)
    return
  }

  return (
    <div className='h-[480px] flex items-center justify-center relative   sm:h-[600px]'>
      <form
        onSubmit={generatePassword}
        className='w-[280px] h-[400px] z-10 flex flex-col items-center justify-start absolute top-[64px]   sm:w-[360px] sm:h-[450px] sm:top-[80px]'
      >
        {
          start
          ? <div className='z-10 w-[208px] h-[144px] flex items-center justify-center absolute top-0   sm:w-[260px] sm:h-[180px]'>
              <span className='start text-sm text-[#294409]   sm:text-lg'>&#62;</span>
            <h2 className='ml-2 text-sm text-[#294409]   sm:text-lg'>start game</h2>
          </div>
          : <>
            <h1 className='mt-3 mb-5 text-xs text-[#294409] text-center   sm:text-base'>Password Generator</h1>
            {
              label
                ? <div className='z-10 text-lime-800 text-[10px] absolute top-[30px] right-[68.8px]   sm:top-[38px] sm:right-[86px] sm:text-xs'>Copied!</div>
                : ''
            }
            <input
              type='text'
              value={password}
              readOnly
              className='w-[160px] py-0.5 px-2 bg-transparent text-[10px] text-lime-800 rounded border-2 border-solid border-lime-800 outline-none   sm:w-[200px] sm:text-sm sm:py-1 sm:px-4'
            />
            <h3 className='mt-2 mb-3 w-[160px] text-[10px] text-lime-800 text-center   sm:w-[200px] sm:text-sm sm:mb-5'>
              Passsword length:
              <span className='ml-2 text-lime-900'>{range}</span>
            </h3>
            <div className='w-[160px] flex items-center justify-center gap-6   sm:w-[200px]'>
              <div className='barril'></div>
              <div className='mario-bros'></div>
            </div>
          </>
        }

        <a
          onClick={restRange}
          className='buttons w-[27.2px] h-[24px] flex items-center justify-center absolute bottom-[124px] left-[16px] cursor-pointer   sm:w-[34px] sm:h-[30px] sm:bottom-[104px] sm:left-[24px]'
        >
          <span className='text-lg text-white'>&#60;</span>
        </a>
        <a
          onClick={sumRange}
          className='buttons w-[27.2px] h-[24px] flex items-center justify-center absolute bottom-[124px] left-[64px] cursor-pointer   sm:w-[34px] sm:h-[30px] sm:bottom-[104px] sm:left-[86px]'
        >
          <span className='text-lg text-white'>&#62;</span>
        </a>

        <a
          onClick={copyToClipboard}
          className='buttons w-9 h-9 flex items-center justify-center absolute bottom-[134px] right-[18px] cursor-pointer   sm:w-10 sm:h-10 sm:bottom-[120px] sm:right-[28px]'
        >
          <span className='z-10 text-white'>A</span>
          <img
            src={button}
            alt='button'
            className='w-full h-full absolute'
          />
        </a>
        <button
          id='button-generate'
          type='submit'
          className='buttons w-9 h-9 flex items-center justify-center absolute bottom-[110px] right-[62px]   sm:w-10 sm:h-10 sm:bottom-[90px] sm:right-[85px]'
        >
          <span className='z-10 text-white'>B</span>
          <img
            src={button}
            alt='button'
            className='w-full h-full absolute'
          />
        </button>

        <a
          onClick={() => setStart(true)}
          className='buttons w-[44px] h-[28px] absolute bottom-[48px] right-[156px] cursor-pointer   sm:w-[56px] sm:h-[36px] sm:bottom-[12px] sm:right-[200px]'
        >
          <img
            src={startButton}
            alt='start'
            className='w-full h-full absolute'
          />
        </a>
        <a
          onClick={() => setStart(false)}
          className='buttons w-[44px] h-[28px] absolute bottom-[48px] right-[102px] cursor-pointer   sm:w-[56px] sm:h-[36px] sm:bottom-[12px] sm:right-[136px]'
        >
          <img
            src={startButton}
            alt='start'
            className='w-full h-full absolute'
          />
        </a>
      </form>
      <img src={gameboy} alt='game-boy' className='h-full'/>
    </div>
  )
}
