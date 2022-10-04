import React, { useState } from 'react'
import { Card } from '@components/devenapuros/Card'
import { ToggleSwitch } from '@components/devenapuros/ToggleSwitch'
import { MainSection } from '@components/devenapuros/MainSection'
import { Brand } from '@components/devenapuros/Brand'
import { PassField } from '@components/devenapuros/PassField'
import { PasswordQuality } from '@components/devenapuros/PasswordQuality'

const MiduPassPage = () => {
	const [active, setActive] = useState(false)
	return (
		<MainSection>
			<Card>
				<Brand />
				<PassField />
				<PasswordQuality />

				<ToggleSwitch active={active} handleClick={() => setActive(!active)} />
			</Card>
		</MainSection>
	)
}

export default MiduPassPage
