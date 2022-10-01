<script>
	let password = ""
</script>

<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white rounded-lg">
	<!-- Title -->
	<h1 class="text-5xl font-bold text-center">Password Generator</h1>

	<!-- Password -->
	<div class="flex items-center justify-center mt-8 w-full">
		<span class="flex font-bold text-3xl">
			{password}
		</span>
	</div>

	<!-- Generate Password Button -->
	<button on:click={() => password = "Jfksj9j20"} class="relative inline-flex w-full h-12 mt-8 bg-gradient-to-tr from-blue-700 to-sky-400 cursor-pointer touch-manipulation select-none items-center justify-center whitespace-nowrap rounded-md border-0 px-4 text-lg leading-none text-white hover:-translate-y-[1px] active:translate-y-[1px]">Generate Password</button>
</div>