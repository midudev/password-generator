<script lang="ts">
	export let length: number
</script>

<fieldset class="flex flex-col gap-2 my-4">
	<div class="flex items-center justify-between gap-4">
		<label for="" class="text-zinc-400">Longitud</label>
		<span class="text-indigo-300 drop-shadow-md shadow-indigo-100 font-medium font-sans text-xl">
			{length}
		</span>
	</div>
	<input
		min="8"
		step="2"
		max="128"
		type="range"
		bind:value={length}
		class="appearance-none rounded-md bg-white/10 h-2 accent-zinc-300 active:accent-zinc-600 hover:accent-zinc-400"
	/>
</fieldset>
