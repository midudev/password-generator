<template>
	<div
		class="main-container min-h-screen min-w-full flex text-black  justify-center items-center bg-contain bg-center bg-no-repeat">
		<section>
			<div class="window" style="width: 300px">
				<div class="title-bar">
					<div class="title-bar-text">Password Generator</div>
				</div>
				<div class="window-body">
					<div class="my-2">Your password: <span id="generatedPasswordText" class="font-bold"
							v-on:focus="$event.target.select()">{{generatedPassword}}</span><button v-if="generatedPassword"
							@click="copyToClipboard" class="mx-1">Copy</button></div>
					<div class="field-row my-2">
						<label for="range26">Low</label>
						<input id="range26" type="range" min="1" max="20" v-model="passwordLength" class="block" />
						<label for="range27">High</label>
					</div>
					<p class="my-2 text-center">Length: {{passwordLength}} </p>
					<button @click="generatePassword" class="">Generate password</button>
				</div>
			</div>

		</section>
	</div>
</template>

<script>
export default {
	name: "passwordGenerator",
	components: {},
	data () {
		return {
			generatedPassword: '',
			passwordLength: 10,
			lowercaseChars: "abcdefghijklmnopqrstuvwxyz",
			uppercaseChars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
			numbersChars: "0123456789",
			symbolsChars: "!@#$%^&*_-+=",
			selectedChars: ''
		}
	},
	computed: {

	},
	methods: {
		generatePassword () {
			this.selectedChars = this.lowercaseChars;
			this.generatedPassword = this.generateString();
		},
		generateString () {
			let password = '';
			for (let i = 0; i < this.passwordLength; i++) {
				password += this.selectedChars.charAt(Math.floor(Math.random() * this.selectedChars.length)
				);
			}
			return password;
		},
		copyToClipboard () {
			navigator.clipboard.writeText(this.generatedPassword);
		}
	},
}
</script>

<style scoped>
.main-container {
	background-image: url('./assets/windows_98_background_in_1920x1080.png')
}
</style>
