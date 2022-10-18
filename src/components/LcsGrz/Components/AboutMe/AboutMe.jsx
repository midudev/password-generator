// @vendors
import React, { useCallback, useState } from 'react'
// @media
import Email from './Media/Email'
import Linkedin from './Media/Linkedin'
import Github from './Media/Github'
import Instagram from './Media/Instagram'
// @styles
import './AboutMe.css'

// ─────────────── ∞ ───────────────

export default function AboutMe() {
	return (
		<div className='ccontainer'>
			LCSGRZ
			<div className='icon-container'>
				<Email />
				<Linkedin />
				<Github />
				<Instagram />
			</div>
		</div>
	)
}
