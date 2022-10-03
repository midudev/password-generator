import globalState from '../utils/globalState'

const useGlobal = globalState(8)

export const useNumberCharacters = () => {
	return useGlobal()
}
