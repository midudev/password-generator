<script lang="ts">
	export let disabled = false
</script>

<button
	{disabled}
	on:click|preventDefault
	class="p-2 rounded-lg bg-white/5 border border-white/5 text-zinc-400 transition-all disabled:opacity-50 enabled:hover:bg-white/10 enabled:active:scale-x-90 enabled:active:scale-90"
>
	<slot />
</button>
