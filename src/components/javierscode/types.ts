/* eslint-disable no-unused-vars */
export type Options = 'includeLetters' | 'includeNumbers' | 'includeSymbols' | 'includeUppercase'

export type OptionsMapper = {
	[key in Options]: string
}

export type SettingsState = {
	[key in Options]: boolean
}
