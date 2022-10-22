import React, { useState } from 'react'
import { Card } from '@components/devenapuros/Card'
import { ToggleSwitch } from '@components/devenapuros/ToggleSwitch'
import { MainSection } from '@components/devenapuros/MainSection'
import { Brand } from '@components/devenapuros/Brand'
import { PassField } from '@components/devenapuros/PassField'
import { PasswordQuality } from '@components/devenapuros/PasswordQuality'
import { PassLengthLabel } from '@components/devenapuros/PassLengthLabel'
import { Slider } from '@components/devenapuros/Slider'
import { PrimaryButton } from '@components/devenapuros/PrimaryButton'
import { ReloadIcon } from '@components/devenapuros/icons/ReloadIcon'

const MiduPassPage = () => {
	const [lowercase, setLowercase] = useState(true)
	const [uppercase, setUppercase] = useState(false)
	const [numbers, setNumbers] = useState(true)
	const [symbols, setSymbols] = useState(false)

	return (
		<MainSection>
			<Card>
				<Brand />
				<div className='flex flex-col gap-2'>
					<div className='flex gap-2'>
						<PassField value='nj23n42jn3kjn43k2j' />
						<PrimaryButton>
							<ReloadIcon />
						</PrimaryButton>
					</div>
					<PasswordQuality />
				</div>
				<div className='flex flex-col gap-2'>
					<PassLengthLabel />
					<Slider value={23} />
				</div>
				<div className='flex flex-col gap-5'>
					<div className='flex justify-between items-center'>
						<span>Include lowercase characters</span>
						<ToggleSwitch active={lowercase} handleClick={() => setLowercase(!lowercase)} />
					</div>
					<div className='flex justify-between items-center'>
						<span>Include uppercase characters</span>
						<ToggleSwitch active={uppercase} handleClick={() => setUppercase(!uppercase)} />
					</div>
					<div className='flex justify-between items-center'>
						<span>Include numbers</span>
						<ToggleSwitch active={numbers} handleClick={() => setNumbers(!numbers)} />
					</div>
					<div className='flex justify-between items-center'>
						<span>Include symbols</span>
						<ToggleSwitch active={symbols} handleClick={() => setSymbols(!symbols)} />
					</div>
				</div>
			</Card>
		</MainSection>
	)
}

export default MiduPassPage
