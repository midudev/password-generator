<script setup>
const props = defineProps({
	message: {
		type: String,
		required: true
	}
})

const { message } = props
</script>

<template>
	<div
		class="flex gap-2 text-white absolute top-1/2 -right-1/2 -translate-y-1/2 translate-x-full bg-gray-700 p-2 px-3 rounded-lg before:content-[''] before:absolute before:top-1/2 before:right-[100%] before:-translate-y-1/2 before:border-8 before:border-y-transparent before:border-l-transparent before:border-r-gray-700"
	>
		{{ message }}
		<slot></slot>
	</div>
</template>
