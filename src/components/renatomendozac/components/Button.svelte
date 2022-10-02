<script>
	import { passwordStore } from '@components/renatomendozac/store'
</script>

<button
	on:click={passwordStore.generate}
	class="bg-green-300 text-slate-900 font-bold uppercase text-xs px-2 py-2 w-full"
>
	<slot />
</button>