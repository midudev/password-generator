<script lang="ts">
	export let label: string = ''
</script>

<button class="w-full cursor-pointer py-3 bg-gradient-to-r from-purple-700 to-purple-900" on:click>
	<span class="text-slate-200">
		<slot>{label}</slot>
	</span>
</button>
