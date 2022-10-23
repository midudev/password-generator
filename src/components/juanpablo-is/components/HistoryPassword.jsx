import { useState } from 'react'
import Drawer from './common/Drawer'
import IconChevronsDown from './common/icons/IconChevronsDown'

const HistoryPassword = () => {
	const [showDrawer, setShowDrawer] = useState(false)

	const handlerShowDrawer = () => {
		setShowDrawer((prev) => !prev)
	}

	return (
		<>
			<div className='flex flex-col items-center py-2 text-white' onClick={handlerShowDrawer}>
				<IconChevronsDown />
				<p className='font-bold capitalize'>Show history password...</p>
			</div>
			{showDrawer && <Drawer onClose={() => setShowDrawer(false)} />}
		</>
	)
}

export default HistoryPassword
