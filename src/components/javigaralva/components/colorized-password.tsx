import { ColorizedCharacter } from './colorized-character'

type OnClickCharacterHandlerParams = {
	character: string
	index: number
}
export type OnClickCharacterHandler = (
	onClickCharacterHandlerParams: OnClickCharacterHandlerParams
) => void

interface ColorizedPasswordProps {
	password: string
	onClickCharacter?: OnClickCharacterHandler
}
export function ColorizedPassword({ password, onClickCharacter }: ColorizedPasswordProps) {
	const handleOnClickCharacter: OnClickCharacterHandler = ({ character, index }) => {
		onClickCharacter?.({ character, index })
	}
	return (
		<div className='font-mono font-black text-4xl min-h-min tracking-widest cursor-pointer'>
			{password.split('').map((character, i) => (
				<ColorizedCharacter
					key={i}
					character={character}
					onClick={() => handleOnClickCharacter({ character, index: i })}
				/>
			))}
		</div>
	)
}
