<script lang="ts">
	import { fly } from 'svelte/transition'
	import { backOut, quadOut, quadIn } from 'svelte/easing'
	import { generate_password, type DefaultOptions } from './generate_password'
	import { copy_to_clipboard } from './copy_to_clipboard'
	import { flipboard } from './flipboard'
	import { highlight } from './highlight'

	let isCopied = false
	let animate = true
	let animation = 'fly'
	let length = 12

	let isSidebarOpen = false
	let isHistoryOpen = false

	const INCLUDE_OPTIONS = [
		{
			title: 'Lowercase',
			id: 'lowercase',
			characters: 'a-z',
			description: 'Include unicode characters from position 97 to 122.'
		},
		{
			title: 'Uppercase',
			id: 'uppercase',
			characters: 'A-Z',
			description: 'Include unicode characters from position 65 to 90.'
		},
		{
			title: 'Numbers',
			id: 'numbers',
			characters: '0-9',
			description: 'Include unicode characters from position 48 to 57.'
		},
		{
			title: 'Special',
			id: 'special',
			characters: '@#$%^&*',
			description: 'Include unicode characters from position 33 to 38, 42, 64, and 94.'
		}
	]

	const DEFAULT_OPTIONS: DefaultOptions = {
		uppercase: true,
		lowercase: true,
		numbers: true,
		symbols: true
	}

	function handleSuccessfulCopy() {
		isCopied = true
		setTimeout(() => (isCopied = false), 1000)
	}

	$: password = generate_password(length, DEFAULT_OPTIONS)
	$: highlighted_password = highlight(generate_password(length, DEFAULT_OPTIONS))
</script>

<header
	class="text-white bg-neutral-900 sticky w-full z-20 top-0 left-0 flex border-b border-gray-600"
>
	<button
		on:click={() => (isSidebarOpen = isSidebarOpen == true ? false : true)}
		class="border-r p-3 border-gray-600 flex items-center justify-center mr-auto"
	>
		<span class="sr-only">Open sidebar</span>
		<!-- phosphoricons/sidebar-simple -->
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M8.25 4.5v15m12-15H3.75a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h16.5a.75.75 0 0 0 .75-.75V5.25a.75.75 0 0 0-.75-.75Z"
				stroke="#fff"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	</button>
	<button
		on:click={() => (isHistoryOpen = isHistoryOpen == true ? false : true)}
		class="border-l p-3 border-gray-600 flex items-center justify-center ml-auto"
	>
		<span class="sr-only">Open history</span>
		<!-- phosphoricons/bookmark-simple -->
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="m18 21-6-3.75L6 21V4.5a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 .75.75V21Z"
				stroke="#fff"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	</button>
</header>

<div class="relative">
	<main class="max-w-md flex flex-col mx-auto text-white">
		<!-- Password -->
		<button
			use:copy_to_clipboard={{ text: password }}
			on:copied={handleSuccessfulCopy}
			on:error={() => alert('error')}
			title="Copy password"
			class="relative flex items-center justify-start font-bold group font-mono text-3xl mt-8 h-12 py-1 pl-2 pr-10 bg-gray-900/60 border border-white/30 rounded-md w-full"
		>
			{#if !animate}
				{password}
			{:else if animation == 'fly'}
				{#key password}
					{#each password.split('') as char, i}
						{#if !isNaN(Number(char))}
							<span
								class="block text-pink-400 leading-none"
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
								class="block text-blue-400 leading-none"
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
								class="block leading-none"
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
			{:else if animation == 'flipboard'}
				{#key highlighted_password}
					<span class="leading-none" in:flipboard={{ duration: 300 }}>
						{@html highlighted_password}
					</span>
				{/key}
			{/if}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="absolute right-2 top-3 w-6 h-6 group-hover:-rotate-6 duration-75 transition-transform"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					class:text-blue-400={isCopied}
					d={!isCopied
						? 'M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z'
						: 'M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75'}
				/>
			</svg>
		</button>

		<!-- <button
			on:click={() => (password = generate_password(length, DEFAULT_OPTIONS))}
			title="Refresh password"
			class="rounded-md border border-white/30 hover:border-white/60 active:bg-gray-400/20 group flex items-center justify-center p-2.5"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6 group-hover:-rotate-6 duration-75 transition-transform spin"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
				/>
			</svg>
		</button> -->

		<label for="length" class="mt-8 inline-block w-full">
			<span class="text-lg">Length: {length}</span>
			<div class="flex items-center justify-center mt-2 gap-2">
				<span>4</span>
				<input type="range" min="4" max="32" class="w-full" bind:value={length} />
				<span>32</span>
			</div>
		</label>
		<div class="flex flex-col gap-6 w-full mt-4">
			{#each INCLUDE_OPTIONS as { title, id, characters, description } (id)}
				<label
					for={id}
					class="border-lg flex w-full cursor-pointer rounded border border-gray-400/20 bg-gray-800/20 p-4 pl-4 text-white transition hover:bg-gray-500/20 hover:text-gray-100"
				>
					<input
						{id}
						type="checkbox"
						value=""
						name="id"
						bind:checked={DEFAULT_OPTIONS[id]}
						class="w-4 h-4 rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-2"
					/>
					<div class="flex flex-col">
						<div>
							<span class="font-semibold">{title}</span>
							<span class="text-gray-200">{characters}</span>
						</div>
						<span class="text-gray-200">{description}</span>
					</div>
				</label>
			{/each}
		</div>

		<!-- Generate Password Button -->
		<button
			on:click={() => (password = generate_password(length, DEFAULT_OPTIONS))}
			class="generate-password relative inline-flex w-full h-12 mt-8 bg-gradient-to-tr from-blue-700 to-sky-400 cursor-pointer touch-manipulation select-none items-center justify-center whitespace-nowrap rounded-md border-0 px-4 text-lg leading-none text-white active:translate-y-[1px]"
			>Generate Password</button
		>
	</main>

	{#if isSidebarOpen}
		<aside
			in:fly={{ x: -250, opacity: 1, easing: quadOut, duration: 100 }}
			out:fly={{ x: -250, opacity: 1, easing: quadIn, duration: 100 }}
			class="fixed top-0 bottom-0 left-0 mt-12 flex w-60 flex-col bg-neutral-900 border-r border-r-gray-600 text-white"
		>
			Sidebar
		</aside>
	{/if}

	{#if isHistoryOpen}
		<aside
			in:fly={{ x: 250, opacity: 1, easing: quadOut, duration: 100 }}
			out:fly={{ x: 250, opacity: 1, easing: quadIn, duration: 100 }}
			class="fixed top-0 right-0 bottom-0 mt-12 flex w-60 flex-col bg-neutral-900 border-l border-l-gray-600 text-white"
		>
			History
		</aside>
	{/if}
</div>

<style>
	:global(body) {
		background: rgb(23 23 23);
	}
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
	.generate-password {
		box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
			rgba(58, 65, 111, 0.5) 0 -3px 0 inset;
		transition: box-shadow 0.05s, transform 0.05s;
		will-change: box-shadow, transform;
	}

	.generate-password:focus {
		box-shadow: #3c4fe0 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
			rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
	}

	.generate-password:hover {
		box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
			#3c4fe0 0 -3px 0 inset;
	}

	.generate-password:active {
		box-shadow: #3c4fe0 0 3px 7px inset;
	}

	.bg-noise {
		background: linear-gradient(to bottom, rgba(17, 24, 39, 0.6), rgba(0, 0, 0, 0.8)),
			url(/grain-dark.png);
	}

	label:has(input:checked) {
		box-shadow: 0 0 0 2px rgb(59 130 246);
	}

	label:has(input[type='checkbox']:focus-visible),
	label:has(input[type='checkbox']:hover) {
		transform: scaleX(1.01) scaleY(1.01);
	}

	.bg-dots {
		background-color: #080808;
		background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%231d1d1d' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
	}

	.bg-texture {
		background-color: #080808;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23272727' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
	}
</style>
