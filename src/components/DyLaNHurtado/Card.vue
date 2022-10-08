<template>
	<div
		class="card h-full w-full xl:w-2/4 lg:w-3/4 bg-stone-900 text-center pt-10 rounded-t-2xl flex flex-col select-none"
	>
		<PassLabel :password="passwordValue" />
		<div class="w-full h-4/6 flex flex-col p-10">
			<Length @rangeUpdated="updatePassLength" />
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
			passLength: 4,
			passwordValue: 'Password Generator',
			arrayCheckbox: [],
			characters: {
				lowercase: 'qwertyuiopasdfghjklzxcvbnm',
				uppercase: 'QWERTYUIOPASDFGHJKLZXCVBNM',
				numbers: '1234567890',
				symbols: '!?$%&@#'
			}
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
			if (!this.arrayCheckbox.length == 0) {
				const charsChoosen = []
				if (this.arrayCheckbox.includes('lowercase')) {
					charsChoosen.push(this.characters.lowercase)
				}
				if (this.arrayCheckbox.includes('uppercase')) {
					charsChoosen.push(this.characters.uppercase)
				}
				if (this.arrayCheckbox.includes('numbers')) {
					charsChoosen.push(this.characters.numbers)
				}
				if (this.arrayCheckbox.includes('symbols')) {
					charsChoosen.push(this.characters.symbols)
				}
				this.passwordValue = ''
				for (let i = 0; i < this.passLength; i++) {
					let charType = charsChoosen[Math.floor(Math.random() * charsChoosen.length)]
					this.passwordValue += charType[Math.floor(Math.random() * charType.length)]
				}
			} else {
				window.alert('Select at least one option!')
			}
		},
		updatePassLength(newValue) {
			console.log(this.passLength)
			this.passLength = newValue
			console.log(this.passLength)
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
