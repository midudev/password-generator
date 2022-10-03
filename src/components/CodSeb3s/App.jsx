import './style/style.css'
import { useState, useEffect } from 'react'

export default function App () {
  // Globals values - Avl = Availables
  const uppercaseAvl = 'ABCDEFHIJKLMNOPQRSTUVWXYZ'
  const lowercaseAvl= 'abcdefghijklmnopqrstuvwxyz'
  const numbersAvl = '0123456789'
  const symbolsAvl = '@_*/.'

  // Importants states to track - Password / Length / Options selecteds
  const [password, setPassword] = useState('')
  const [passwordLength, setPasswordLength] = useState(8)
  const [options, setOptions] = useState({
    'uppercase': true,
    'lowercase': false,
    'numbers': false,
    'symbols': false
  })

  // Make an random uppercase password when the user enter the first time
  useEffect(() => {
    passwordGenerator()
  }, [])

  // Evaluate if there is at leats one true option selected by the user
  let allOptions = Object.values(options).some(val => val === true)
  
  // Setting the options selected by the user
  const handleOptions = (e) => {
    setOptions({ 
      ...options, 
      [e.target.value]: e.target.checked,
    })
  }

  // Function to handle the state of the slider
  const handleSlide = (e) => {
    
	  const bgSize = e.target.value
	  setPasswordLength(bgSize)

    // FIX
    if(allOptions === false) return console.log('Plis enter at least one option')

    passwordGenerator()
  }

  // Function to generate the random password
  const passwordGenerator = () => {
    // FIX
    if(allOptions === false) return console.log('Please enter at least one option')

    const uppercase = options.uppercase ? uppercaseAvl : ''
    const lowercase = options.lowercase ? lowercaseAvl : ''
    const numbers = options.numbers ? numbersAvl : ''
    const symbols = options.symbols ? symbolsAvl : ''
    const strOptionsSelected = uppercase + lowercase + numbers + symbols
    let password = ''
    for (let i = 0; i <= passwordLength; i++) {
      const randomNumber = Math.floor(Math.random() * strOptionsSelected.length)
      password += strOptionsSelected.charAt(randomNumber)
    }
    setPassword(password)
  }

	return (
		<>
      <main className='relative flex justify-center min-w-[300px] h-screen bg-[#191D24] overflow-auto'>
        {/* Title Container */}
        <div className='absolute left-0 mt-4 ml-[.313rem]'>
          <h5 className='text-white'>Password Only</h5>
          <h6 className='text-[#817D92]'>Simple Password Generator</h6>
        </div>
        {/* Password Container */}
        <div className='min-w-[300px] min-h-[540px] m-auto pt-20'>
          {/* Password Generated */}
          <div className='flex w-[100%] p-4 bg-[#1F232B] mb-3'>
            <div className='max-w-[240px] text-center text-[1.25rem] tracking-[0.156rem] my-auto mr-auto bg-[#1F232B] break-words'>
              {password}
            </div>
            <button className='cursor-pointer'>
              {/* Fix viewBox / width / height */}
              <svg className='fill-transparent' role='img' width='16' height='16' viewBox='0 0 18 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <title id='button-label'>Copy</title>
                <path xmlns='http://www.w3.org/2000/svg' fillRule='evenodd' clipRule='evenodd' d='M14.9242 0.54918L16.9508 2.57582C17.3025 2.92745 17.5 3.40436 17.5 3.90164V14.375C17.5 15.4105 16.6605 16.25 15.625 16.25H12.5V18.125C12.5 19.1605 11.6605 20 10.625 20H1.875C0.839453 20 0 19.1605 0 18.125V5.625C0 4.58945 0.839453 3.75 1.875 3.75H5V1.875C5 0.839453 5.83945 0 6.875 0H13.5984C14.0956 2.6003e-06 14.5726 0.197548 14.9242 0.54918ZM2.10938 18.125H10.3906C10.4528 18.125 10.5124 18.1003 10.5564 18.0564C10.6003 18.0124 10.625 17.9528 10.625 17.8906V16.25H6.875C5.83945 16.25 5 15.4105 5 14.375V5.625H2.10938C2.04721 5.625 1.9876 5.64969 1.94365 5.69365C1.89969 5.7376 1.875 5.79721 1.875 5.85938V17.8906C1.875 17.9528 1.89969 18.0124 1.94365 18.0564C1.9876 18.1003 2.04721 18.125 2.10938 18.125ZM15.3906 14.375H7.10938C7.04721 14.375 6.9876 14.3503 6.94365 14.3064C6.89969 14.2624 6.875 14.2028 6.875 14.1406V2.10938C6.875 2.04721 6.89969 1.9876 6.94365 1.94365C6.9876 1.89969 7.04721 1.875 7.10938 1.875H11.25V5.3125C11.25 5.83027 11.6697 6.25 12.1875 6.25H15.625V14.1406C15.625 14.2028 15.6003 14.2624 15.5564 14.3064C15.5124 14.3503 15.4528 14.375 15.3906 14.375ZM13.125 4.375H15.625V3.99875C15.625 3.96797 15.6189 3.93749 15.6072 3.90905C15.5954 3.88061 15.5781 3.85477 15.5564 3.83301L13.667 1.94363C13.623 1.89969 13.5634 1.875 13.5012 1.875H13.125V4.375Z' fill='#A4FFAF'/>
              </svg>
            </button>
          </div>
          {/* Password Properties Container */}
          <div className='mb-7'>
            {/* PW Length Container */}
            <div className='p-4 mb-3 bg-[#1F232B]'>
              <h1 className='mb-1 text-[1.25rem] text-white'>Length</h1>
              <div className='flex mb-3'>
                <p className='my-auto mr-auto'>Character Length</p>
                <p className='text-[1.25rem] text-[#A4FFAF]'>
                  {passwordLength}
                </p>
              </div>
              {/* Slider Option 2*/}
              <div className='relative w-[100%] h-[8px] mb-3 bg-[#18171F]'>
                <div className='max-w-[100%] w-[10px] h-[100%] bg-white'></div>
                <button className='absolute w-[32px] h-[32px] top-[-13px] left-[-16px] border-none rounded-full bg-white hover:bg-[#A4FFAF]  hover:transition-colors'></button>
              </div>
              {/* Original Slider */}
              <div className='mb-5'>
                <input id='slider' className='w-[100%]' type='range' min='8' max='60' defaultValue={passwordLength} onChange={(e) => handleSlide(e)} />
              </div>
            </div>
            {/* PW Custom Container */}
            <div className='p-4 bg-[#1F232B]'>
              <h1 className='mb-1 text-[1.25rem] text-white'>Custom</h1>
              <p className='mt-2 mb-3'>Make custom password</p>
              {/* <!-- Optionals Checkbox for the PW --> */}
              <div className='mb-3'>
                <div className='mb-2'>
                  <input onChange={(e) => handleOptions(e)} type='checkbox' value='uppercase' defaultChecked/>
                  <label htmlFor='uppercase'>Uppercase Letters</label>
                </div>
                <div className='mb-2'>
                  <input onChange={(e) => handleOptions(e)} type='checkbox' value='lowercase'/>
                  <label htmlFor='lowercase'>Lowercase Letters</label>
                </div>
                <div className='mb-2'>
                  <input onChange={(e) => handleOptions(e)} type='checkbox' value='numbers'/>
                  <label htmlFor='numbers'>Numbers</label>
                </div>
                <div className='mb-2'>
                  <input onChange={(e) => handleOptions(e)} type='checkbox' value='symbols'/>
                  <label htmlFor='symbols'>Symbols</label>
                </div>
              </div>
              {/* <!-- Strength of the PW --> */}
              <div className='flex p-3 bg-[#18171F]'>
                <p className='mr-auto text-[#817D92]'>STRENGTH</p>
                <div>
                  <label>D MEDIUM</label>
                  <input className='ml-2' type='checkbox' value='easy'/>
                  <input type='checkbox' value='easy'/>
                  <input type='checkbox' value='medium'/>
                  <input type='checkbox' value='hard'/>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Button to generate PW --> */}
          <button onClick={() => passwordGenerator()} className='w-[100%] h-[2.5rem] mb-10 text-[#000000] bg-[#A4FFAF]'>
            GENERATE
          </button>
        </div>
      </main>
		</>
	)
}