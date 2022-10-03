import { usePasswordLogic } from './hooks/usePasswordLogic'
import { useFiltersLogic } from './hooks/useFiltersLogic'
import { SettingsSwitchItem } from './components/SettingsSwitchItem'
import { SLIDER_VALUES, FILTERS_VALUES } from './constants/defaultValues'

import './styles/index.css'

export const PassWordGenerator = () => {
	const { lowercase, numbers, symbols, uppercase } = FILTERS_VALUES
	const { onFilterChane, filters, passwordLength, onSliderChange } = useFiltersLogic()
	const { password, generatePassword, copyPassword, tooltipRef } = usePasswordLogic({
		passwordLength,
		filters
	})
	return (
		<div className='bg-[#1F232B] rounded-md p-4'>
			<div className='w-full flex bg-[#353940] justify-between items-center gap-4 mb-4 rounded-md'>
				<input
					type='text'
					disabled
					value={password}
					className='w-full h-9 px-2 bg-[#353940] py-1 font-semibold text-[#DDDDDD] border-none outline-none rounded-md'
				/>
				<button
					onClick={copyPassword}
					className='relative bg-[#353940] w-9 h-9 p-2 rounded-tr-md rounded-br-md cursor-pointer hover:bg-[#4b4c52]'
				>
					<span ref={tooltipRef} className='tooltip'>
						Copied!
					</span>
					<img
						className='w-5 h-5'
						src='https://icongr.am/fontawesome/clone.svg?size=128&color=DDDDDD'
						alt='copy-icon'
					/>
				</button>
			</div>
			<button
				onClick={generatePassword}
				className='w-full h-9 bg-[#353940] rounded-md mb-4 cursor-pointer hover:bg-[#4b4c52]'
			>
				Generate password
			</button>
			<div className='w-80 flex flex-col items-center'>
				<div className='w-full flex flex-col justify-start gap-2 mt-2'>
					<p>Settings:</p>
					<SettingsSwitchItem type={lowercase} filters={filters} onFilterChane={onFilterChane} />
					<SettingsSwitchItem type={uppercase} filters={filters} onFilterChane={onFilterChane} />
					<SettingsSwitchItem type={numbers} filters={filters} onFilterChane={onFilterChane} />
					<SettingsSwitchItem type={symbols} filters={filters} onFilterChane={onFilterChane} />
					<div className='flex gap-2'>
						<p>Length:</p>
						<span className='font-bold text-[#8671ff]'>{passwordLength}</span>
					</div>
					<div className='w-auto flex items-center justify-between'>
						<p>{SLIDER_VALUES.minLength}</p>
						<input
							className='input-range w-full mx-4'
							type='range'
							min={SLIDER_VALUES.minLength}
							max={SLIDER_VALUES.maxLength}
							value={passwordLength}
							onChange={onSliderChange}
						/>
						<p>{SLIDER_VALUES.maxLength}</p>
					</div>
				</div>
			</div>
		</div>
	)
}
