<script>
	export let length = 8
</script>

<div class=" mb-6 bg-slate-700 p-3 rounded-md">
	<p class="mb-2">
		length: <span>{length}</span>
	</p>
	<div class=" flex items-center gap-3">
		<p
			class=" text-white font-bold grid place-content-center bg-blue-500 w-12 h-6 text-[12px] rounded-full"
		>
			<span>4</span>
		</p>
		<input
			type="range"
			bind:value={length}
			class="w-full h-1  bg-blue-500 rounded-md appearance-none cursor-pointer accent-blue-200"
			min="4"
			max="20"
		/>
		<p
			class="font-bold text-white grid place-content-center bg-blue-500 w-12 h-6 text-[12px] rounded-full"
		>
			<span>20</span>
		</p>
	</div>
</div>
