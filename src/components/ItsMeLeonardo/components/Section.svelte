<script lang="ts">
	export let title: string = ''
</script>

<section class="flex flex-col gap-2 w-full items-start">
	<header>
		<h2 class="text-slate-400 font-bold text-xs uppercase">
			<slot name="title">{title}</slot>
		</h2>
	</header>
	<div class="w-full flex flex-col gap-2">
		<slot />
	</div>
</section>
