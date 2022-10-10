<template>
	<div
		class="min-h-screen min-w-full flex text-black  justify-center items-center bg-contain bg-center bg-no-repeat bg-[url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b3c1a7a9-2c1c-48cb-8617-15da6ec76015/dehkuhv-ae62c66e-1994-4910-bce4-95cb0e4bd753.png/v1/fill/w_1280,h_720,strp/windows_98_background_in_1920x1080_by_adamv11_dehkuhv-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvYjNjMWE3YTktMmMxYy00OGNiLTg2MTctMTVkYTZlYzc2MDE1XC9kZWhrdWh2LWFlNjJjNjZlLTE5OTQtNDkxMC1iY2U0LTk1Y2IwZTRiZDc1My5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.RduA2fKkl3I-tj7q0nRVS_T1ZlQkP4RcJJJh6UwcdG4')]">
		<section>
			<div class="window" style="width: 300px">
				<div class="title-bar">
					<div class="title-bar-text">Password Generator</div>
					<div class="title-bar-controls">
						<!-- <button aria-label="Minimize"></button>
						<button aria-label="Maximize"></button>
						<button aria-label="Close"></button> -->
					</div>
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
