import { useContext, useEffect, useRef, useState } from 'react'
import { AppContext } from '../context'
import { FormSavePass } from './FormSavePass'
import { ListPasswords } from './ListPasswords'

export const Menu = ({ state: stateMenu, setState: setStateMenu }) => {
	const {
		setState,
		state: { savedPasswords }
	} = useContext(AppContext)
	const [showSaveNewPass, setShowSaveNewPass] = useState(false)
	const [showSavedPasswords, setSavedPasswords] = useState(false)

	const refSavedPass = useRef(null)
	const onHiddenModals = () => {
		setStateMenu(false)
		setShowSaveNewPass(false)
		setSavedPasswords(false)
	}

	useEffect(() => {
		setState((p) => ({ ...p, onHiddenModals }))
		if (showSaveNewPass) {
			refSavedPass.current.focus()
		}
	}, [showSaveNewPass, showSavedPasswords])

	const handleDownloadFile = () => {
		let dataDownloaded = ''
		savedPasswords.forEach((pass) => {
			const elem = `
Site: ${pass.url}
Username: ${pass.username}
Passsword: ${pass.password}
			`
			dataDownloaded += elem
		})
		const data = new Blob([dataDownloaded], { type: 'text/plain' })
		const a = document.createElement('a')
		a.href = window.URL.createObjectURL(data)
		a.target = '_blank'
		a.download = `BackupPass-${new Date().toISOString()}.txt`
		a.click()
		onHiddenModals()
	}

	if (typeof window !== 'undefined') {
		window.addEventListener('keydown', (e) => e.key === 'Escape' && onHiddenModals())
	}
	if (stateMenu) {
		return (
			<>
				<div className='inset-0 fixed' onClick={onHiddenModals} />
				<ul className='z-10 right-0 top-[75%] text-sm border rounded-md bg-[rgb(36,35,44)] absolute flex flex-col  border-[#8e7f9f] p-2 drop-shadow-md'>
					<li>
						<button
							onClick={() => setShowSaveNewPass(true)}
							className='text-left  py-2 px-3 hover:bg-[rgb(124,127,255,.3)] hover:text-[rgb(124,127,255)] rounded-md whitespace-nowrap w-full'
						>
							Save new password
						</button>
					</li>
					<li>
						<button
							onClick={() => setSavedPasswords(true)}
							className='text-left whitespace-nowrap w-full py-2 px-3 hover:bg-[rgb(124,127,255,.3)] hover:text-[rgb(124,127,255)] rounded-md '
						>
							View recents passwords
						</button>
					</li>
					<li>
						<button
							onClick={handleDownloadFile}
							className='text-left whitespace-nowrap w-full py-2 px-3 hover:bg-[rgb(124,127,255,.3)] hover:text-[rgb(124,127,255)] rounded-md '
						>
							Download file passwords
						</button>
					</li>
				</ul>
				{showSaveNewPass && (
					<FormSavePass
						onHidden={onHiddenModals}
						refFocus={refSavedPass}
						setState={setShowSaveNewPass}
					/>
				)}
				{showSavedPasswords && <ListPasswords onHidden={onHiddenModals} />}
			</>
		)
	}
}
