<template>
	<div
		class="card h-full w-full xl:w-2/4 lg:w-3/4 bg-stone-900 text-center pt-10 rounded-t-2xl flex flex-col select-none"
	>
		<PassLabel :password="passwordValue" />
		<div class="w-full h-4/6 flex flex-col p-10">
			<Length @rangeUpdated="updateCharLength" />
			<Options @checksUpdated="updateCheckboxs" />
		</div>
		<SecureIndicator />
	</div>
	<button
		@click="generatePasswd()"
		class="w-full xl:w-2/4 lg:w-3/4 bg-cyan-500 py-4 px-8 rounded-b-2xl font-bold hover:bg-cyan-400 active:bg-cyan-900 transition-colors duration-300"
	>
		Generate a new password
	</button>
</template>
<script>
import SecureIndicator from './SecureIndicator.vue'
import Length from './Length.vue'
import Options from './Options.vue'
import PassLabel from './PassLabel.vue'
export default {
	name: 'Card',
	data() {
		return {
			charLength: 4,
			passwordValue: 'Password Generator',
			arrayCheckbox: []
		}
	},
	props: {},
	components: {
		SecureIndicator,
		Length,
		Options,
		PassLabel
	},
	methods: {
		generatePasswd() {
			console.log('Gol')
			this.passwordValue = '3!3213!fd'
			console.log(this.passwordValue)
		},
		updateCharLength(newValue) {
			console.log(this.charLength)
			this.charLength = newValue
			console.log(this.charLength)
		},
		updateCheckboxs(newValue) {
			console.log(this.arrayCheckbox)
			this.arrayCheckbox = newValue
			console.log(this.arrayCheckbox)
		}
	}
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@500&display=swap');
.card {
	font-family: 'Baloo 2', cursive;
}
</style>
