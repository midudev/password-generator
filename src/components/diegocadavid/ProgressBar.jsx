import React, { useEffect, useState } from 'react'

const ProgressBar = ({ handleFinish = () => {} }) => {
	const [progressBar, setProgressBar] = useState(0) //max 15
	const [stringBar, setStringBar] = useState('')

	useEffect(() => {
		const loadingProgressInterval = setInterval(() => {
			setProgressBar((prev) => {
				if (prev > 14) {
					return 15
				}

				return prev + 1
			})
		}, 50)

		return () => {
			clearInterval(loadingProgressInterval)
		}
	}, [])

	useEffect(() => {
		setStringBar((prev) => {
			const strBar = '#'.repeat(progressBar)
			const strBarEmpty = '-'.repeat(15 - progressBar)
			return `${strBar}${strBarEmpty}`
		})

		if (progressBar == 15) {
			handleFinish()
		}
	}, [progressBar])

	return (
		<div>
			<p>
				Generando... {progressBar < 15 && <span className='text-zinc-700'>¿Lento? Click aqui</span>}
			</p>
			<p> [{stringBar}] % </p>
		</div>
	)
}

export default ProgressBar
