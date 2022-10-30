<script lang ts>
	import { onMount } from 'svelte'

	export let width: number, height: number

	let canvas: HTMLCanvasElement
	let currentMousePos
	let seed: string = ''

	onMount(() => {
		const ctx = canvas.getContext('2d')
		canvas.height = height
		canvas.width = width
		ctx.fillStyle = '#000'
		ctx.fillRect(0, 0, height, width)

		function getMousePos(canvas, evt) {
			var rect = canvas.getBoundingClientRect()
			return {
				x: evt.clientX - rect.left,
				y: evt.clientY - rect.top
			}
		}

		canvas.addEventListener(
			'mousemove',
			function (evt) {
				currentMousePos = getMousePos(canvas, evt)
				let randomNumber = Math.random()

				if (seed.length < 36 && randomNumber > 0.8) {
					seed += String.fromCharCode(currentMousePos.x)
				} else if (seed.length < 36 && randomNumber > 0.6) {
					seed += String.fromCharCode(currentMousePos.y)
				} else {
					return
				}
			},
			false
		)
	})
</script>

<canvas bind:this={canvas} />

<br />

<span>Seed: {seed}</span>
