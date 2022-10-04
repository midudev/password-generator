<template>
	<h1
		class="font-mono font-bold text-4xl text-center bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-slate-300 to-slate-700 mt-14"
	>
		Random Password Generator
	</h1>
	<div class="justify-center items-center p-2 m-2 text-center">
		<div class="bg-zinc-800 font-mono justify-center items-center rounded-xl mx-2 my-6">
			<button
				v-on:click="copy"
				class="m-9 lg:p-2 sd:p-1 rounded-lg focus:bg-amber-500 hover:bg-amber-400"
				:disabled="!password"
			>
				📋
			</button>
			<input
				class="bg-zinc-800 text-amber-500 rounded-md lg:text-2xl md:text-md lg:w-96 md:w-56"
				:value="password"
				placeholder="your password will be here!"
				v-on:focus="$event.target.select()"
				ref="clone"
				readonly
			/>
		</div>
		<div class="bg-zinc-800 font-mono justify-center items-center rounded-xl m-2">
			<span class="text-white">Password length: </span>
			<input
				type="range"
				class="mx-3 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-amber-500 active:bg-amber-500"
				min="6"
				max="25"
				v-model="value"
			/>
			<input
				type="number"
				class="bg-zinc-800 text-amber-500 lg:w-10 ml-2 lg:text-2xl md:w-6 md:text-md"
				min="6"
				max="25"
				v-model="value"
				readonly
			/>
			<button
				type="button"
				class="rounded-md bg-gray-100 hover:bg-amber-200 active:bg-amber-300 lg:text-2xl md:text-md m-8 px-32 py-2"
				v-on:click="generatePassword(this.value)"
			>
				<strong>Generate</strong>
			</button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'pwdGenerator',
	data() {
		return {
			password: '',
			value: 8
		}
	},
	methods: {
		generatePassword(length) {
			let chars = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ'
			let passwordLength = length
			this.password = ''
			for (let i = 0; i <= passwordLength; i++) {
				let randomNumber = Math.floor(Math.random() * chars.length)
				this.password += chars.substring(randomNumber, randomNumber + 1)
			}
		},
		copy() {
			this.$refs.clone.focus()
			document.execCommand('copy')
			this.password === ''
				? alert('You have to generate a password first!')
				: alert('Password copied!')
		}
	}
}
</script>
