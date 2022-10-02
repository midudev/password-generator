<script lang="ts">
	export let label: string = ''
	export let value: boolean = false
</script>

<label class="w-full bg-purple-900/50 flex items-center justify-between gap-2 p-3">
	<span class="text-slate-200 text-sm">
		<slot name="label">{label}</slot>
	</span>
	<input class="hidden" type="checkbox" name="includeNumbers" bind:checked={value} />
	<div
		class="toggle w-10 h-6 bg-purple-300/20 rounded-full flex items-center px-1"
		class:checked={value}
	>
		<span class="w-4 h-4 bg-purple-500 rounded-full transition duration-150" />
	</div>
</label>

<style>
	.toggle.checked {
		background-color: #a855f7;
	}
	.toggle.checked span {
		transform: translateX(1rem);
		background: white;
	}
</style>
