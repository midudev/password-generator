<script lang="ts">
	import { onMount } from 'svelte'

	export let width: number, height: number, seed: string

	let canvas: HTMLCanvasElement
	let currentMousePos

	onMount(() => {
		const ctx = canvas.getContext('2d')
		canvas.height = height
		canvas.width = width
		ctx.fillStyle = '#000'
		ctx.fillRect(0, 0, height, width)

		const cols = Math.floor(width / 20) + 1
		const ypos = Array(cols).fill(0)

		function matrix() {
			ctx.fillStyle = '#0001'
			ctx.fillRect(0, 0, width, height)

			ctx.fillStyle = '#0f0'
			ctx.font = '15pt monospace'

			ypos.forEach((y, index) => {
				const text = String.fromCharCode(Math.random() * 128)
				const x = index * 20
				ctx.fillText(text, x, y)
				if (y > 100 + Math.random() * 10000) ypos[index] = 0
				else ypos[index] = y + 20
			})
		}

		setInterval(matrix, 50)

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
