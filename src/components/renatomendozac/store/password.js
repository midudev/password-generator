import { writable } from 'svelte/store'
import { generatePassword } from '@components/renatomendozac/utils/generate-password'

const { subscribe, set } = writable('HackToBerFest-2022')
const generate = () => set(generatePassword())

export { subscribe, generate }
