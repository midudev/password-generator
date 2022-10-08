<template>
  <h1 class="font-mono font-bold text-4xl text-center bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-slate-300 to-slate-700 mt-14">Random Password Generator</h1>
  <div class="justify-center items-center p-2 m-2 text-center">
    <div class="content-center bg-zinc-800 font-mono justify-center items-center rounded-xl mx-2 my-6 py-3 text-white hover:text-amber-800 
	hover:bg-amber-200 hover:cursor-pointer hover:border-amber-500 border-4 border-zinc-800 m-9" v-on:click="copy(password)">
      <span class="m-9 hover:bg-amber-200 font-bold rounded-md text-2xl xl:text-4xl md:text-3xl sm:text-2xl" :value="password" v-on:focus="$event.target.select()" ref="clone">{{password || msg}}</span>
	</div>
    <div class="bg-zinc-800 font-mono justify-center rounded-xl m-2 p-4">
		<span class="text-white text-lg">Select length </span>
      	<input type="range" class="bg-gray-200 rounded-lg w-40 appearance-none cursor-pointer dark:bg-amber-500 active:bg-amber-500 focus:ring-0" min="6" max="25" v-model="value" v-on:click="generatePassword(this.value)">
      	<input type="number" class="text-center bg-zinc-800 text-amber-500 text-3xl" min="6" max="25" v-model="value" readonly>
	  <button type="button" class="rounded-md font-bold bg-gray-100 hover:bg-amber-200 hover:text-amber-700 active:bg-amber-300 m-6 px-32 py-2 xl:text-2xl md:text-xl sm:text-lg" v-on:click="generatePassword(this.value)">Generate</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pwdGenerator',
  data() {
    return {
      password: '', value: 8, msg: 'Password here...'
    }
  }, 
  methods: {
    generatePassword(length) {
    let chars = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let passwordLength = length
    this.password = ''
		for (let i = 0; i <= passwordLength; i++) {
			let randomNumber = Math.floor(Math.random() * chars.length)
			this.password += chars.substring(randomNumber, randomNumber +1)
		}
    },
    async copy(password) {
		if (password !== '' ) await navigator.clipboard.writeText(password)
		this.password === '' ? alert('You have to generate a password first!') : alert('Password copied!')
    }
  }
}
</script>
