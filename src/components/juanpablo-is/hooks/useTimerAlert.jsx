import { memo, useState } from 'react'

const useTimerAlert = () => {
	const [alerts, setAlerts] = useState([])
	const [refreshAlerts, setRefreshAlerts] = useState(true)

	const Alerts = memo(() => {
		return (
			<div className='m-3 pb-0 absolute top-0 left-0 flex flex-col items-center md:items-end md:justify-end md:top-auto md:left-auto md:right-0 md:bottom-0 md:flex-col-reverse'>
				{refreshAlerts &&
					alerts.map((alert) => (
						<div
							key={alert.id}
							id='toast-default'
							className='mb-2 sm:mb-2 min-w-[280px] flex items-center p-4 w-72 sm:w-full max-w-xs text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800'
							role='alert'
						>
							<div className='inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200'>
								<svg
									aria-hidden='true'
									className='w-5 h-5'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										fillRule='evenodd'
										d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z'
										clipRule='evenodd'
									></path>
								</svg>
							</div>
							<div className='ml-3 text-sm font-normal text-white'>{alert.children}</div>
						</div>
					))}
			</div>
		)
	}, [alerts])

	const generateAlert = (children, delay, type) => {
		setRefreshAlerts(false)

		class Timer {
			constructor(children, delay, type) {
				this.timerId = null
				let start
				let remaining = delay

				this.pause = function () {
					window.clearTimeout(this.timerId)

					this.timerId = null
					remaining -= Date.now() - start
				}

				this.resume = function () {
					if (this.timerId) {
						return
					}

					start = Date.now()

					this.timerId = window.setTimeout(
						() => setAlerts((prev) => prev.filter((alert) => alert.id !== this.timerId) || []),
						remaining
					)

					setAlerts((prev) => {
						const findSameType = prev.findIndex((alert) => alert.type === type)
						const newAlert = { id: this.timerId, children, type }

						if (findSameType >= 0) {
							const newPrev = prev
							newPrev.splice(findSameType, 1)

							return [...newPrev, newAlert]
						}

						return [...prev, newAlert]
					})

					setRefreshAlerts(true)
				}

				this.resume()
			}
		}

		/* eslint-disable no-new */
		new Timer(children, delay, type)
	}

	return {
		Alerts,
		generateAlert
	}
}

export default useTimerAlert
