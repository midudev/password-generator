import React from 'react'

const Button = ({ children, onClick }) => {
	return (
		<button onClick={onClick}
      className='md:w-[29.75rem] w-[19.43rem] h-[3.5rem] md:h-[4rem] bg-[#A4FFAF] hover:bg-[#24232C] hover:border-2 border-[#A4FFAF] flex justify-center items-center hover:text-[#A4FFAF] text-[#24232C] fill-[#24232C] hover:fill-[#A4FFAF] disabled:cursor-not-allowed disabled:bg-[#e6e5ea] disabled:hover:border-red-500 disabled:hover:text-red-500 disabled:hover:fill-red-500'
    >
      <div className='mr-[1.5rem]'>{children}</div>
      <svg width='12' height='12' xmlns='http://www.w3.org/2000/svg'>
        <path d='m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z' />
      </svg>
    </button>
	)
}

export default Button
