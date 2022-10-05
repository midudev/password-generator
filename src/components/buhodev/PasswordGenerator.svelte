<script lang="ts">
  	import { onMount } from "svelte"
	import { fly } from 'svelte/transition'
	import { backOut } from 'svelte/easing'
	import { generate_password, type DefaultOptions } from "./generate_password"
	import {copy_to_clipboard} from "./copy_to_clipboard"

	let password = ""
	let isCopied = false;
	let animate = true
	
	const DEFAULT_OPTIONS: DefaultOptions = {
		uppercase: true,
		lowercase: true,
		numbers: true,
		symbols: false
	}
	
	function handleSuccessfulCopy() {
		isCopied = true
		setTimeout(() => isCopied = false, 1000)
	}
	
	onMount(() => password = generate_password(8, DEFAULT_OPTIONS))
</script>

<div class="absolute border-gray-600/20 border-2 p-6 bg-gray-800/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white rounded-lg">
	<!-- Title -->
	<h1 class="text-5xl font-bold text-center">Password Generator</h1>

	<!-- Password -->
	<div class="flex items-center justify-center mt-8 w-full">
		<span class="flex font-bold text-3xl mr-auto">
			{#if !animate}
				{password}
			{:else}
				{#key password}
					{#each password.split("") as char, i}
						{#if !isNaN(Number(char))}
							<span
								class="block text-pink-400"
								in:fly={{
									y: -5,
									delay: 15 * i,
									easing: backOut
								}}
							>
								{char}
							</span>
						{:else if /[^a-zA-Z]/.test(char)}
							<span
								class="block text-blue-400"
								in:fly={{
									y: -5,
									delay: 15 * i,
									easing: backOut
								}}
							>
								{char}
							</span>
						{:else}
							<span
								class="block"
								in:fly={{
									y: -5,
									delay: 15 * i,
									easing: backOut
								}}
							>
								{char}
							</span>
						{/if}
					{/each}
				{/key}
			{/if}
		</span>

		<button use:copy_to_clipboard={{text: password}} on:copied={handleSuccessfulCopy} on:error={() => alert("error")} title="Copy password" class="rounded-md border-2 border-slate-700 hover:border-slate-600 flex items-center justify-center py-1 px-2">
			{#if !isCopied}
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
					<path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
				</svg>
				{:else}
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
					<path stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
				</svg>			  
			{/if}
		</button>

		<button on:click={() => password = generate_password(6, DEFAULT_OPTIONS)} title="Refresh password" class="rounded-md border-2 border-slate-700 hover:border-slate-600 group flex items-center justify-center py-1 px-2">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 group-hover:-rotate-3 duration-75 transition-transform spin">
				<path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
			</svg>
		</button>
	</div>

	<!-- Generate Password Button -->
	<button on:click={() => password = generate_password(6, DEFAULT_OPTIONS)} class="relative inline-flex w-full h-12 mt-8 bg-gradient-to-tr from-blue-700 to-sky-400 cursor-pointer touch-manipulation select-none items-center justify-center whitespace-nowrap rounded-md border-0 px-4 text-lg leading-none text-white hover:-translate-y-[1px] active:translate-y-[1px]">Generate Password</button>
</div>

<style>
	.group:active .spin {
		animation: spin 0.15s linear;
	}
	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(180deg);
		}
	}
</style>