import React from 'react'

export const Container = ({children}) => {
	return (
		<main className="min-h-screen w-full text-white flex justify-center items-center bg-slate-800">
			{children}
		</main>
	)
}
