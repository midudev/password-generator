<template>
	<div class="min-h-screen min-w-full flex text-white justify-center items-center">
		<section>
			<h1>Password Generator</h1>
			<p>Your password: <span id="generatedPasswordText" ref="generatedPasswordText"
					v-on:focus="$event.target.select()">{{generatedPassword}}</span><button v-if="generatedPassword"
					@click="copyToClipboard" class="mx-1">Copy</button></p>
			<input type="range" min="1" max="20" v-model="passwordLength" class="block" />
			<p class="">Length: {{passwordLength}} </p>
			<button @click="generatePassword" class="">Generate password</button>
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
