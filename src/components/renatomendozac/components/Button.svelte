<script>
	import { passwordStore, formStore } from '@components/renatomendozac/store'

	const onClick = () => {
		let paramsForm
		formStore.subscribe(newParams => paramsForm = newParams)
		passwordStore.generate(paramsForm)
	}
</script>

<button
	on:click={onClick}
	class="bg-green-400 opacity-90 hover:opacity-100 text-slate-900 font-bold uppercase text-xs p-2 w-full"
>
	<slot />
</button>