<script setup>
import KeyIcon from './icons/KeyIcon.vue'
</script>
<template>
	<div
		class="w-full max-w-md p-8 pt-14 rounded-lg border border-[#222528] bg-[#111418] shadow-sm shadow-[#222528] relative"
	>
		<span
			class="w-3 h-3 rounded-full bg-[#E9CA76] flex items-center justify-center absolute top-5 left-8 after:absolute after:ml-1 after:left-full after:content-[''] after:w-3 after:h-3 after:rounded-full after:bg-[#60E99D] before:absolute before:mr-1 before:right-full before:content-[''] before:w-3 before:h-3 before:rounded-full before:bg-[#E4665E]"
		></span>
		<header class="flex gap-2 items-center">
			<span
				class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#5FE69B] text-[#111418] shrink-0"
			>
				<KeyIcon class="w-6 h-6" />
			</span>
			<h1 class="text-lg font-bold text-white">victormarcas / Hacktoberfest</h1>
		</header>
		<section class="space-y-4">
			<header
				class="mt-4 py-3 relative before:z-[0] before:absolute before:inset-x-0 before:content-[''] before:block before:border-b before:top-full before:border-gray-600/40 before:-mx-8"
			>
				<h2
					class="text-base tracking-tighter inline-flex leading-tight text-gray-400 before:absolute relative before:transform before:translate-y-0.5 before:content-[''] before:border-b before:border-[#5FE79C]/40 before:top-full before:mt-3 before:-mx-8 before:inset-x-0 before:z-[1]"
				>
					<slot name="title"></slot>
				</h2>
			</header>
			<div>
				<slot name="content"></slot>
			</div>
		</section>
	</div>
</template>
