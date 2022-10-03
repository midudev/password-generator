/** @jsxImportSource solid-js */
import type { Component } from 'solid-js'
import { createSignal } from 'solid-js'

interface CounterProps {
	initial?: number
	title?: string
	color?: string
}

export const SolidCounter: Component<CounterProps> = ({ title, initial, color }) => {
	const [count, setCount] = createSignal(initial ?? 0)
	const add = () => setCount(count() + 1)
	const subtract = () => setCount(count() - 1)

	return (
		<div class='container'>
			{title && <h4 class='counter-title'>{title}</h4>}
			<div class='counter' style={{ 'background-color': color }}>
				<button onClick={subtract}>-</button>
				<pre>{count()}</pre>
				<button onClick={add}>+</button>
			</div>
		</div>
	)
}
