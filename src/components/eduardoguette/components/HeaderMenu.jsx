import { useState } from 'react'
import { BtnList } from './BtnList'
import { ButtonCopy } from './ButtonCopy'
import { Menu } from './Menu'

export const HeaderMenu = ({ password }) => {
	const [showMenu, setShowMenu] = useState(false)
	return (
		<div className='absolute right-3 flex items-center top-0 bottom-0 my-auto '>
			<ButtonCopy valueCopy={password} />
			<BtnList setState={setShowMenu}/>
			<Menu state={showMenu} setState={setShowMenu}/>
		</div>
	)
}
