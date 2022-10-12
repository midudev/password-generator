<script lang="ts">
	import { TagValue } from '../models'
	export let data: TagValue, customMethod: () => void
</script>

<button on:click={customMethod}>
	{data.tag}
	<span class:toggle={!data.value}>
		<em class:red-icon={!data.value} />
	</span>
</button>

<style>
	button {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
		height: 2rem;
		min-width: 12.5rem;
		color: inherit;
		text-shadow: inherit;
		transition: all 0.5s ease-in-out;
	}
	button:active {
		text-shadow: var(--text-shadow-hover);
	}
	button:hover {
		text-shadow: var(--text-shadow-hover);
	}
	span {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		width: 2.5rem;
		height: 1rem;
		border-radius: 1rem;
		border: 1px solid var(--green);
		box-shadow: inset var(--green) -1px -1px 1px;
		transition: all 0.5s ease-in-out;
	}
	em {
		display: grid;
		place-content: center;
		width: 1.5rem;
		height: 1.5rem;
		background-color: var(--green);
		color: white;
		border-radius: 1rem;
		transition: all 0.5s ease-in-out;
		box-shadow: var(--toggle-shadow);
	}
	.toggle {
		justify-content: flex-end;
		border: 1px solid var(--red);
		box-shadow: inset var(--red) 1px 1px 1px;
	}
	.red-icon {
		transform: translateX(10%);
		background-color: var(--red);
	}
</style>
