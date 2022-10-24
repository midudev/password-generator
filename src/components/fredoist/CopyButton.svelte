<script lang="ts">
	import { usePassword } from '@hooks/fredoist/use-password'

	const password = usePassword()

	async function copyPassword(e: Event) {
		e.preventDefault()
		await navigator.clipboard.writeText($password)
	}
</script>

<button
	type="button"
	class="relative bg-[#f8ef00] text-black font-semibold uppercase py-5 px-10 border-r-2 border-[#ff003c] inline-flex items-center justify-between gap-x-16 [clip-path:polygon(100%_0,100%_25%,100%_100%,6%_100%,0%_70%,0_0)]"
	on:click={copyPassword}
>
	<span>Copy Password_</span>
	<span class="absolute bg-black right-5 -bottom-px text-xs font-normal font-[Barlow,sans-serif] leading-none pl-2 pr-5 text-[#fafafa] border-l-2 border-[#ff003c]">R25</span>
	<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 512 512">
		<path
			fill="none"
			stroke="currentColor"
			stroke-linecap="square"
			stroke-miterlimit="10"
			stroke-width="48"
			d="M268 112l144 144-144 144M392 256H100"
		/>
	</svg>
</button>
