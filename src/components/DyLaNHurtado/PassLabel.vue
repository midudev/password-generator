<template>
	<div class="w-full h-1/6 flex flex-row border-y-4 border-cyan-500">
		<div
			class="w-full bg-gray-600 p-4 font-black duration-300 flex justify-center items-center text-5xl select-text"
		>
			{{ password }}
		</div>
		<button
			@click="copyPasswd()"
			class="w-1/6 bg-gray-600 group aspect-square active:bg-cyan-900 transition-colors duration-200 hover:bg-gray-700"
		>
			<div class="flex items-center justify-center flex-col group">
				<SaveIcon
					v-if="!saveCheck"
					class="w-10 h-10 group-hover:animate-bounce animate-none opacity-40 animate-bounce transition-all duration-100"
				/>
				<CheckIcon v-else class="w-10 h-10" />
				<p class="hidden group-focus:block">Saved!</p>
			</div>
		</button>
	</div>
</template>
<script>
import SaveIcon from './icons/save-icon.vue'
import CheckIcon from './icons/check-icon.vue'
export default {
	name: 'PassLabel',
	data() {
		return {
			password: 'Password Generator',
			saveCheck: false
		}
	},
	props: {},
	components: {
		SaveIcon,
		CheckIcon
	},
	methods: {
		copyPasswd() {
			navigator.clipboard.writeText(this.password).then(() => {
				this.saveCheck = true
				const timeout = window.setTimeout(() => {
					this.saveCheck = false
					window.clearTimeout(timeout)
				}, 1500)
			})
		}
	}
}
</script>
<style scoped></style>
