<script lang="ts">
	import { TagValue } from '../models'
	import { generatorAlert } from '../store'
	export let data: TagValue
	export let customMethod: (e: number) => void
	let min = 4
	let max = 20
	let items: number[] = []
	for (let i = min; i <= max; i++) {
		items = [...items, i]
	}
</script>

<section>
	<div>
		{#each items as item}
			<span
				class:added={data.value >= item}
				on:mouseenter={() => customMethod(item)}
				on:touchstart={() => customMethod(item)}
			/>
		{/each}
	</div>
	<p>{data.tag}: {data.value}</p>
</section>

<style>
	section {
		display: grid;
		gap: 1rem;
		transition: all 0.5s ease-in-out;
		text-shadow: var(--text-shadow-base);
	}
	div {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 1.5rem;
		overflow: hidden;
	}
	div:hover + p {
		text-shadow: var(--text-shadow-hover);
	}
	span {
		height: 1rem;
		width: 1rem;
		box-shadow: inset var(--red) -1px -1px 3px;
		border: 1px solid var(--red);
		border-radius: 0.25rem;
	}
	.added {
		background-color: var(--green);
		box-shadow: inset var(--text-shadow-hover);
		transform: scale(1.1);
	}
</style>
