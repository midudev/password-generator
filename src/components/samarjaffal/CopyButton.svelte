<script>
	export let copied
</script>
<button type="button" id="copy-button" on:click>
	{#if copied}
		<svg width="48px" height="48px" stroke-width="1.72" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M1.5 12.5l4.076 4.076a.6.6 0 00.848 0L9 14M16 7l-4 4" stroke="#ffffff" stroke-width="1.72" stroke-linecap="round"></path><path d="M7 12l4.576 4.576a.6.6 0 00.848 0L22 7" stroke="#ffffff" stroke-width="1.72" stroke-linecap="round"></path>
		</svg>
	{:else}
		<svg width="48px" height="48px" stroke-width="1.72" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path d="M19.4 20H9.6a.6.6 0 01-.6-.6V9.6a.6.6 0 01.6-.6h9.8a.6.6 0 01.6.6v9.8a.6.6 0 01-.6.6z" stroke="#ffffff" stroke-width="1.72" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15 9V4.6a.6.6 0 00-.6-.6H4.6a.6.6 0 00-.6.6v9.8a.6.6 0 00.6.6H9" stroke="#ffffff" stroke-width="1.72" stroke-linecap="round" stroke-linejoin="round"></path>
		</svg>
	{/if}
</button>