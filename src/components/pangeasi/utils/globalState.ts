import { useState } from 'react'
import { IHookStateSetAction, resolveHookState } from '../hooks/hookState'
import useEffectOnce from '../hooks/useEffectOnce'
import { useIsomorphicLayoutEffect } from '../hooks/useIsoLayoutEffect'

/*
export function globalState<S = any>(
	initialState: IHookStateInitAction<S>
): () => [S, (state: IHookStateSetAction<S>) => void]

export function globalState<S = undefined>(): () => [S, (state: IHookStateSetAction<S>) => void]
*/

export function globalState<S> (initialState?: S) {
	const store: {
		state: S
		setState: (state: IHookStateSetAction<S>) => void
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		setters: any[]
	} = {
		state: initialState instanceof Function ? initialState() : initialState,
		setState (nextState: IHookStateSetAction<S>) {
			store.state = resolveHookState(nextState, store.state)
			store.setters.forEach((setter) => setter(store.state))
		},
		setters: []
	}

	return () => {
		const [globalState, stateSetter] = useState<S | undefined>(store.state)

		useEffectOnce(() => () => {
			store.setters = store.setters.filter((setter) => setter !== stateSetter)
		})

		useIsomorphicLayoutEffect(() => {
			if (!store.setters.includes(stateSetter)) {
				store.setters.push(stateSetter)
			}
		})

		return [globalState, store.setState]
	}
}

export default globalState
