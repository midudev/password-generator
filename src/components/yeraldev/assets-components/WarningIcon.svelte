<span class="warning" />

<style>
	.warning {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		justify-content: center;
		align-items: center;
		padding: 0.1rem;
		width: 3rem;
		height: 3rem;
		border: 1px solid var(--color);
		border-radius: 100%;
		box-shadow: inset var(--text-shadow-hover);
	}
	.warning::before,
	.warning::after {
		content: '';
		width: 0.25rem;
		height: 1.25rem;
		box-shadow: inherit;
		border: inherit;
		background-color: var(--color);
	}
	.warning::after {
		height: 0.5rem;
		width: 0.5rem;
		border-radius: inherit;
	}
</style>
