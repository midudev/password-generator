import globalState from '../utils/globalState'

const useGlobal = globalState('')

export const useRawPassword = () => {
	return useGlobal()
}
