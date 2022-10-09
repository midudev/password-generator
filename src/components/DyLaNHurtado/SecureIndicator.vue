<template>
	<div
		v-if="isThinking"
		class="h-1/6 bg-stone-900 border-stone-500 border-t-2 w-full text-3xl py-5 flex flex-row justify-center items-center animate-pulse"
	>
		<img src="./icons/brain.gif" class="h-24 w-34" alt="Thinking gif icon" />
		Brainy is thinking ...
	</div>

	<div
		v-else
		v-if="password != 'Password Generator'"
		class="h-1/6 bg-gradient-to-r from-green-900 via-emerald-500 to-green-900 border-emerald-500 border-t-2 w-full text-3xl py-5 flex justify-center items-center"
	>
		<span>
			{{ message }}<br />
			{{ stars }}
		</span>
		<br />
	</div>
</template>
<script>
export default {
	name: 'SecureIndicator',
	data() {
		return {
			message: '',
			stars: '',
			isThinking: false
		}
	},
	props: {
		password: String
	},
	methods: {
		evaluatePassword() {
			if (this.password != 'Password Generator') {
				this.isThinking = true
				this.stars = ''
				this.message = 'Thinking...'
				setTimeout(() => {
					console.log(this.password)
					if (this.password.length >= 4 && this.password.length < 7) {
						this.stars = '⭐⚫⚫'
						this.message = '🙄 Your password could be better ! 🤓 '
					} else if (this.password.length >= 7 && this.password.length < 12) {
						this.stars = '⭐⭐⚫'
						this.message = '🔥 🤘 Your password rocks ! 🤘 🔥 '
					} else {
						this.stars = '⭐⭐⭐'
						this.message = '👹 Your password is hell for hackers! 👹 '
					}
					this.isThinking = false
				}, 1000)
			}
		}
	},
	watch: {
		password(newValue) {
			this.evaluatePassword()
		}
	}
}
</script>
