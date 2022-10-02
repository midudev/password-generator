import { useEffect, useLayoutEffect } from 'react'
import { isBrowser } from '../utils/util'

export const useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect
