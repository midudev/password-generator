/** @jsxImportSource solid-js */
import { Component, JSX } from 'solid-js'
import { usePassword } from '@components/marsidev/components/PasswordContext'

export const PasswordLength: Component = () => {
	const { length, onChangeLength } = usePassword()

	const onInput: JSX.EventHandler<HTMLInputElement, InputEvent> = (event) => {
		onChangeLength(event.currentTarget.value)
	}

	return (
		<div class='flex w-full flex-col items-start justify-center gap-2 text-lg font-semibold text-black'>
			<label for='marsidev-pwd-length' class='text-[1rem]'>
				Longitud de la contraseña
			</label>

			<div class='flex w-full flex-row items-center justify-start gap-2 text-[1rem] text-black'>
				<input
					class='h-[40px] w-[60px] rounded-md border border-[#c8c8c8] p-2 text-center text-[16px] shadow-[inset_0_1px_2px_0_rgba(0,0,0,0.25)] outline-[#9F7AEA]'
					type='number'
					step='1'
					min='4'
					max='50'
					name='length'
					id='marsidev-pwd-length'
					value={length()}
					// onChange={onChange}
					onInput={onInput}
				/>

				<input
					class='marsidev-slider w-full cursor-pointer accent-[#9F7AEA]'
					type='range'
					step='1'
					min='4'
					max='50'
					id='marsidev-pwd-range'
					value={length()}
					// onChange={onChange}
					onInput={onInput}
				/>
			</div>
		</div>
	)
}
