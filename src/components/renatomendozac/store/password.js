import { writable } from 'svelte/store'
import { generatePassword } from '@components/renatomendozac/utils/generate-password'

const initialState = "HackToBerFest-2022"

const { subscribe, set } = writable(initialState)
const generate = (params) => set(generatePassword(params))

export { initialState, subscribe, generate }
