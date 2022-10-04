<template>
	<div class="flex items-start">
		<div class="flex items-center h-5">
			<input
				:id="id"
				type="checkbox"
				v-model="detail.active"
				value=""
				class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
			/>
		</div>
		<label :for="id" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">
			{{ detail.title }}
		</label>
	</div>
</template>

<script>
export default {
	name: 'checkbox',
	props: {
		detail: {
			required: true,
			type: Object
		},
		id: {
			required: true,
			type: String
		}
	}
}
</script>

<style scoped></style>
