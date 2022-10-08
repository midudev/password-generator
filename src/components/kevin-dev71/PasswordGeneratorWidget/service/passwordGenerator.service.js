import { CONFIG } from '../config/constants'
import { randomNumber } from '../utils/randomNumber'

export const generatePassword = (passwordLength) => {
	const { ASCII_CODE_START, ASCII_CODE_END } = CONFIG

	const charCodesArr = Array.from({ length: passwordLength }, () =>
		randomNumber(ASCII_CODE_START, ASCII_CODE_END)
	)

	const newPassword = String.fromCharCode(...charCodesArr)

	return newPassword
}
