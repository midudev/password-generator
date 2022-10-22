<script setup lang="ts">
import { ref } from 'vue'

const notifications = ref([])

const notification = (evt: CustomEvent) => {
	console.log(evt)
	notifications.value.unshift({
		type: evt.detail.type,
		text: evt.detail.text
	})
}
</script>

<template>
	<div @notify="notification">
		<div class="notification" :class="notification.type" v-for="notification in notifications">
			{{ notification.text }}
		</div>
	</div>
</template>

<style scoped>
div {
	z-index: 1;
	position: fixed;
	bottom: 1em;
	right: 0.5em;
	width: 10em;
	max-height: 100vh;
}

.notification {
	/* background-color: var(--primary); */
	padding: 0.5em;
	border-radius: 0.5em;
	/* color: var(--background); */
}
</style>
