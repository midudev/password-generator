import { FC } from 'react'

interface PasswordProps {
	value: string
	blurred?: boolean
}

export const Password: FC<PasswordProps> = ({
	value,
	blurred = false
}) => {
	const classes = [
		'josel95-password-generator-password',
		blurred ? 'josel95-blurred' : ''
	]
	return <input className={classes.join(' ')} type='text' value={value} placeholder='Generate a new password' />
}