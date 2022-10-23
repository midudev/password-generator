import React from 'react'

export function createContext(rootName, defaultContext) {
	const Ctx = React.createContext(defaultContext)

	function Provider(props) {
		const { children, ...context } = props

		const value = React.useMemo(() => context, Object.values(context))

		return <Ctx.Provider value={value}>{children}</Ctx.Provider>
	}

	function useContext(childName) {
		const context = React.useContext(Ctx)

		if (context) {
			return context
		}

		if (defaultContext) {
			return defaultContext
		}

		throw Error(`${childName} must be rendered inside of a ${rootName} component.`)
	}

	Ctx.displayName = `${rootName}Context`
	Provider.displayName = `${rootName}Provider`
	return [Provider, useContext]
}
