<script lang="ts">
	import { fly } from 'svelte/transition'
	import { backOut } from 'svelte/easing'
	import { generate_password, type DefaultOptions } from './generate_password'
	import { copy_to_clipboard } from './copy_to_clipboard'
	import UltraGradientBackground from './UltraGradientBackground.svelte'
	import { flipboard } from './flipboard'
	import { highlight } from './highlight'

	let isCopied = false
	let animate = true
	let animation = 'fly'
	let length = 6

	const TITLES = {
		uppercase: 'A-Z',
		lowercase: 'a-z',
		numbers: '0-9',
		symbols: '!@#$%^&*'
	}

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

<UltraGradientBackground />

<div
	class="bg-noise absolute border-white/20 border p-6 backdrop-blur-sm top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white rounded-lg"
>
	<!-- Title -->
	<div class="flex justify-center items-center">
		<svg class="w-96" viewBox="0 0 320 40" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g filter="url(#a)" fill="#fff" clip-path="url(#b)">
				<path
					d="M6.1 30h1.8c.2 0 .3-.1.3-.4V11.3c0-.8.5-1.2 1.3-1.2h10.2c.7 0 1.2.4 1.2 1.2v4l-4.1 4h-6.2c-.2 0-.3.2-.3.4v1.8c0 .2 0 .3.3.3h6.8c.3 0 .4 0 .6-.2l5.2-5.2.2-.6v-4c0-.2 0-.3-.3-.5l-3.4-3.5c-.2-.2-.3-.2-.6-.2h-9c-.3 0-.5 0-.6.2L6 11.3c-.2.1-.2.3-.2.6v17.7c0 .3.1.4.3.4Zm33.4-12.2L36 14.3a.7.7 0 0 0-.6-.2h-5.7c-.3 0-.4 0-.6.2l-3.5 3.5c-.2.2-.2.4-.2.6v1c0 .3.1.4.3.4h1.8c.2 0 .4-.1.4-.3v-1.7c0-.7.4-1.2 1.2-1.2h7c.7 0 1.1.5 1.1 1.2v4.6l-1.7-1.6a.7.7 0 0 0-.6-.3h-5.5c-.2 0-.3 0-.5.3l-3.5 3.4c-.2.2-.2.4-.2.6v1c0 .2 0 .3.2.5l3.5 3.5.5.2h4.8c.2 0 .4 0 .6-.2l1.5-1.6c.3-.3.2-.7-.2-.7h-7.3c-.7 0-1.1-.4-1.1-1.2v-2c0-.8.4-1.3 1.1-1.3H36c.8 0 1.2.3 1.2 1.2v5.4c0 .3.2.4.4.4h1.8c.2 0 .3-.1.3-.4V18.4c0-.2 0-.4-.2-.6Zm8 12.2h5.3c.3 0 .5 0 .6-.2l3.6-3.6c.2-.2.3-.3.3-.5V25c0-.3-.1-.4-.3-.6L53.5 21a.7.7 0 0 0-.6-.2h-6c-.6 0-1-.5-1-1.2v-1.8c0-.7.4-1.2 1-1.2h6.4c.8 0 1.2.5 1.2 1.2v1.7c0 .2.2.3.4.3h1.8c.2 0 .3-.1.3-.3v-1.1c0-.2 0-.4-.2-.6l-3.5-3.5a.7.7 0 0 0-.6-.2h-5.1c-.3 0-.4 0-.5.2l-3.5 3.5c-.2.2-.3.3-.3.6v.6c0 .2 0 .4.3.6L47 23c.1.1.2.2.5.2h6c.7 0 1.2.4 1.2 1.2v.8l-2.2 2.2H47c-.7 0-1.2-.4-1.2-1.2v-1.7c0-.2-.1-.3-.3-.3h-1.8c-.2 0-.4.1-.4.3v1.1l.3.6 3.5 3.5.5.2Zm16.3 0H69c.2 0 .4 0 .6-.2l3.6-3.6.2-.5V25c0-.3 0-.4-.2-.6L69.8 21a.7.7 0 0 0-.6-.2h-6c-.7 0-1.1-.5-1.1-1.2v-1.8c0-.7.4-1.2 1.1-1.2h6.4c.7 0 1.2.5 1.2 1.2v1.7c0 .2.2.3.3.3H73c.2 0 .4-.1.4-.3v-1.1c0-.2 0-.4-.3-.6l-3.5-3.5a.7.7 0 0 0-.5-.2h-5.2c-.2 0-.3 0-.5.2l-3.5 3.5c-.2.2-.2.3-.2.6v.6c0 .2 0 .4.2.6l3.5 3.5.5.2h6c.8 0 1.2.4 1.2 1.2v.8L69 27.5h-5.7c-.8 0-1.2-.4-1.2-1.2v-1.7c0-.2-.2-.3-.4-.3h-1.8c-.2 0-.3.1-.3.3v1.1c0 .2 0 .4.2.6l3.5 3.5.6.2Zm17.4 0h2.2c.2 0 .4 0 .5-.2l4.5-4.5.2-.5V14.4c0-.1-.1-.3-.3-.3h-1.8c-.2 0-.4.2-.4.3v9.7l-3.3 3.4h-2.2c-.8 0-1.2-.4-1.2-1.2V14.4c0-.1-.2-.3-.4-.3h-1.7c-.3 0-.4.2-.4.3v11.3c0 .2 0 .4.2.6l3.5 3.5.6.2Zm8.5 0h3.9c.2 0 .4 0 .6-.2l3.4-3.5.3-.6V14.4c0-.1-.2-.3-.4-.3h-1.8c-.2 0-.3.2-.3.3v12c0 .7-.5 1.1-1.2 1.1h-6.4c-.4 0-.5.4-.2.7l1.6 1.6.5.2Zm16.6 0h5.5c.2 0 .4 0 .6-.3l3.9-3.8.2-.6v-7c0-.2 0-.3-.2-.5l-3.5-3.5a.8.8 0 0 0-.6-.2h-6c-.2 0-.3 0-.5.2l-3.5 3.5c-.2.2-.2.4-.2.6v7.3c0 .2 0 .4.2.6l3.5 3.5.6.2Zm-.6-2.5c-.8 0-1.2-.4-1.2-1.2v-8.5c0-.7.4-1.2 1.2-1.2h7.1c.8 0 1.2.5 1.2 1.2v6.9l-2.8 2.8h-5.5Zm15.4 2.5h1.8c.2 0 .3-.1.3-.4V14.4c0-.1-.1-.3-.3-.3H121c-.2 0-.4.2-.4.3v15.2c0 .3.2.4.4.4Zm9.4-8.4h1.8c.2 0 .3-.2.3-.4v-2.8c0-.2 0-.4-.2-.6l-3.5-3.5a.8.8 0 0 0-.6-.2h-2c-.3 0-.4 0-.6.2L124 16c-.3.3-.1.7.3.7h4.5c.7 0 1.2.5 1.2 1.2v3.4c0 .2.2.4.4.4Zm18.9-14h-1.8c-.2 0-.3.1-.3.4v8l-1.7-1.7a.7.7 0 0 0-.6-.2h-5.5c-.2 0-.4 0-.6.2l-3.4 3.5c-.2.2-.3.3-.3.6v7.3c0 .3 0 .4.3.6l3.4 3.5.6.2h4.8c.2 0 .3 0 .5-.2l1.6-1.6c.3-.3.1-.7-.3-.7H139c-.7 0-1.2-.4-1.2-1.2v-8.5c0-.7.5-1.2 1.2-1.2h7.2c.7 0 1.2.3 1.2 1.1v12c0 .2.1.3.3.3h1.8c.2 0 .4-.1.4-.4V8c0-.3-.2-.4-.4-.4ZM167 30h8.7c.3 0 .4 0 .6-.2l5.3-5.3c.2-.2.2-.4.2-.6v-2.1c0-.2 0-.4-.2-.6l-3.5-3.5-.6-.2h-4.7c-.2 0-.3.1-.3.3v1.8c0 .2.1.4.3.4h5.3c.8 0 1.3.4 1.3 1.2v2l-4.3 4.3h-8.6c-.8 0-1.2-.4-1.2-1.2v-12l4.2-4.2h8.4c.7 0 1.2.4 1.2 1.2v3.3c0 .2.2.3.4.3h1.7c.3 0 .4-.1.4-.3v-2.7l-.3-.6-3.4-3.5a.7.7 0 0 0-.6-.2H169c-.3 0-.4 0-.6.2l-5.3 5.3-.2.6v12c0 .2 0 .4.2.6l3.5 3.5.6.2Zm24.1-6.5h4.3c.3 0 .4 0 .6-.3l3.8-3.7.3-.6v-.5c0-.3 0-.4-.3-.6l-3.4-3.5a.8.8 0 0 0-.6-.2h-6c-.2 0-.4 0-.5.2l-3.5 3.5-.3.6v7.3c0 .3.1.4.3.6l3.5 3.5.5.2h5.9c.2 0 .4 0 .6-.2l3.4-3.5.3-.6v-1c0-.3-.2-.4-.3-.4h-1.8c-.3 0-.4.1-.4.3v1.7c0 .8-.5 1.2-1.2 1.2h-7c-.8 0-1.3-.4-1.3-1.2v-8.5c0-.7.5-1.2 1.2-1.2h7.2c.7 0 1.2.5 1.2 1.2v.7L195 21h-5.8c-.5 0-.6.4-.3.7l1.5 1.6.6.2Zm13.3 6.5h1.8c.2 0 .3-.1.3-.4V14.4c0-.1-.1-.3-.3-.3h-1.8c-.2 0-.3.2-.3.3v15.2c0 .3 0 .4.3.4Zm11.6 0h1.8c.2 0 .3-.1.3-.4V18.4c0-.2 0-.4-.2-.6l-3.5-3.5a.8.8 0 0 0-.5-.2h-4.3c-.3 0-.4 0-.6.2l-1.5 1.6c-.4.3-.2.7.2.7h6.7c.8 0 1.2.5 1.2 1.2v11.8c0 .3.2.4.4.4Zm11.8-6.5h4.3c.2 0 .4 0 .6-.3l3.8-3.7.3-.6v-.5c0-.3-.1-.4-.3-.6l-3.5-3.5a.8.8 0 0 0-.5-.2h-6c-.2 0-.4 0-.5.2l-3.5 3.5-.3.6v7.3c0 .3 0 .4.3.6l3.4 3.5.6.2h5.9c.2 0 .4 0 .5-.2l3.5-3.5.3-.6v-1c0-.3-.2-.4-.4-.4h-1.8c-.2 0-.3.1-.3.3v1.7c0 .8-.5 1.2-1.2 1.2h-7c-.8 0-1.3-.4-1.3-1.2v-8.5c0-.7.5-1.2 1.2-1.2h7.2c.7 0 1.2.5 1.2 1.2v.7l-2.5 2.5h-5.9c-.4 0-.5.4-.2.7l1.5 1.6.6.2Zm13.3 6.5h1.8c.2 0 .3-.1.3-.4V14.4c0-.1-.1-.3-.3-.3H241c-.2 0-.4.2-.4.3v15.2c0 .3.2.4.4.4Zm9.4-8.4h1.8c.2 0 .3-.2.3-.4v-2.8c0-.2 0-.4-.2-.6l-3.5-3.5a.8.8 0 0 0-.6-.2h-2c-.3 0-.4 0-.6.2L244 16c-.3.3-.1.7.3.7h4.5c.7 0 1.2.5 1.2 1.2v3.4c0 .2.2.4.4.4Zm18.5-3.8-3.4-3.5a.7.7 0 0 0-.5-.2h-5.8c-.2 0-.4 0-.6.2l-3.4 3.5-.3.6v1c0 .3.2.4.4.4h1.7c.2 0 .4-.1.4-.3v-1.7c0-.7.4-1.2 1.2-1.2h7c.7 0 1.1.5 1.1 1.2v4.6l-1.7-1.6a.7.7 0 0 0-.5-.3H259c-.3 0-.4 0-.6.3l-3.5 3.4c-.2.2-.2.4-.2.6v1c0 .2 0 .3.2.5l3.5 3.5.6.2h4.7c.3 0 .4 0 .6-.2l1.6-1.6c.3-.3.1-.7-.3-.7h-7.2c-.8 0-1.2-.4-1.2-1.2v-2c0-.8.4-1.3 1.2-1.3h7.2c.7 0 1.1.3 1.1 1.2v5.4c0 .3.2.4.4.4h1.8c.2 0 .3-.1.3-.4V18.4c0-.2 0-.4-.2-.6Zm15.6 7.6-1.3-1.2c0-.2-.3-.2-.5 0l-3.3 3.3h-1.4c-.7 0-1.2-.4-1.2-1.2v-16c0-.2-.1-.3-.3-.3h-1.8c-.2 0-.4.1-.4.3v3.8h-2c-.3 0-.4.2-.4.3v1.8c0 .2.1.4.3.4h2.1v9.1l.3.6 3.5 3.5.6.2h1.3c.3 0 .4 0 .6-.3l3.9-3.8v-.5Zm-6.5-8.8h5.8c.2 0 .3-.2.3-.4v-1.8c0-.1 0-.3-.3-.3h-4c-.2 0-.3 0-.5.2l-1.6 1.6c-.3.3-.1.7.3.7ZM290.8 30h5.5c.3 0 .5 0 .6-.3l4-3.8.2-.6v-7c0-.2 0-.3-.3-.5l-3.4-3.5a.8.8 0 0 0-.6-.2h-6c-.2 0-.4 0-.5.2l-3.5 3.5-.3.6v7.3l.3.6 3.5 3.5.5.2Zm-.6-2.5c-.7 0-1.2-.4-1.2-1.2v-8.5c0-.7.5-1.2 1.2-1.2h7.2c.7 0 1.2.5 1.2 1.2v6.9l-2.8 2.8h-5.6Zm15.5 2.5h1.8c.1 0 .3-.1.3-.4V14.4l-.3-.3h-1.8c-.3 0-.4.2-.4.3v15.2c0 .3.1.4.4.4Zm9.3-8.4h1.8c.2 0 .4-.2.4-.4v-2.8c0-.2 0-.4-.3-.6l-3.4-3.5a.8.8 0 0 0-.6-.2h-2c-.3 0-.5 0-.7.2l-1.5 1.6c-.3.3-.2.7.3.7h4.5c.7 0 1.2.5 1.2 1.2v3.4c0 .2.1.4.3.4Z"
				/>
			</g>
			<defs>
				<clipPath id="b">
					<path fill="#fff" d="M0 0h320v40H0z" />
				</clipPath>
				<filter
					id="a"
					x="-.2"
					y="1.6"
					width="323.4"
					height="34.4"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB"
				>
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset />
					<feGaussianBlur stdDeviation="3" />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0" />
					<feBlend in2="BackgroundImageFix" result="effect1_dropShadow_41_2" />
					<feBlend in="SourceGraphic" in2="effect1_dropShadow_41_2" result="shape" />
				</filter>
			</defs>
		</svg>
	</div>
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
		<input type="range" min="4" max="32" class="w-full mt-2" bind:value={length} />
	</label>
	<ul class="grid gap-6 w-full grid-cols-2 lg:grid-cols-4">
		{#each Object.keys(DEFAULT_OPTIONS) as option}
			<li>
				<input
					type="checkbox"
					id={option}
					value=""
					bind:checked={DEFAULT_OPTIONS[option]}
					class="sr-only peer"
				/>
				<label
					for={option}
					class="inline-flex justify-between items-center p-4 text-center w-full text-white bg-gray-800/20 rounded-lg border-2 border-gray-400/20 cursor-pointer peer-checked:border-sky-600 hover:text-gray-100 peer-checked:text-white peer-focus:bg-gray-500/20 peer-focus:scale-105 transition hover:bg-gray-500/20"
				>
					<div class="w-full text-lg font-semibold">{TITLES[option]}</div>
				</label>
			</li>
		{/each}
	</ul>

	<!-- Generate Password Button -->
	<button
		on:click={() => (password = generate_password(length, DEFAULT_OPTIONS))}
		class="generate-password relative inline-flex w-full h-12 mt-8 bg-gradient-to-tr from-blue-700 to-sky-400 cursor-pointer touch-manipulation select-none items-center justify-center whitespace-nowrap rounded-md border-0 px-4 text-lg leading-none text-white active:translate-y-[1px]"
		>Generate Password</button
	>
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
</style>
