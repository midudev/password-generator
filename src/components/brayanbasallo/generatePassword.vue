<template>
	<div class="min-h-screen min-w-full flex">
			<div class="border rounded bg-white m-auto w-11/12 sm:w-8/12 md:w-6/12 p-5">
					<h1 class="text-2xl font-semibold">Generate password</h1>
					<div class="my-3 relative">
							<input
								type="text"
								id="password"
								v-model="password"
								class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
								 focus:border-blue-500 block w-full p-2.5"
								placeholder="You new password" disabled>
							<div @click="copyText" class="absolute bg-gray-50 rounded top-[20%] right-1 text-gray-300 hover:text-gray-500 cursor-pointer" v-if="password !== ''">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
											<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" />
									</svg>
							</div>
					</div>
					<div class="my-4">
							<div class="flex">
									<p class="w-4/12">Length: {{passwordLength}} </p>
									<input v-model="passwordLength" class="w-full" type="range" name="" id="" min="8" max="60">
							</div>
					</div>
					<div class="my-4">
							<h1 class="text-xl font-semibold">Options</h1>
							<div class="my-2" v-for="(detail,index) in checkboxDetails" :key="index">
									<checkbox :detail="detail" :id="index"></checkbox>
							</div>
							<div class="my-2" >
									<button v-if="checkActivate"  type="button" @click="generatePassword" class="bg-blue-600 text-white text-center w-full rounded p-2">
											Generate password
									</button>
									<p v-else class="bg-red-200 border border-red-600 text-center text-red-500 w-full rounded p-2">At least one active option</p>
							</div>
					</div>
			</div>


	</div>
</template>
<script>
import Checkbox from "./input/checkbox.vue";
export default {
		name: "generatePassword",
		components: {Checkbox},
		data() {
				return {
						removeCharacters: [33,34,39,40,41,42,43,44,45,46,47,58,59,60,61,62,63,64,91,92,93,94,95,96],
						checkboxDetails: {
								uppercase: {
										title: "Uppercase",
										active: true,
										min: 65,
										max: 90
								},
								lowercase: {
										title: "Lowercase",
										active: true,
										min: 97,
										max: 122
								},
								numbers: {
										title: "Numbers",
										active: true,
										min: 48,
										max: 57
								},
								specialCharacters: {
										title: "Special characters \"#$%&\"",
										active: true,
										min: 35,
										max: 38
								}
						},
						password: "",
						passwordLength: 10,
						count: 0
				}
		},
		computed: {
				checkActivate(){
						let allow = 0
						Object.entries(this.checkboxDetails).forEach(data =>{
								if (data[1].active){
										allow += 1
								}
						})
						return allow
				}
		},
		methods: {
				randomNumber(min=33,max=122) {
						let number = Math.floor(Math.random() * (max - min + 1) + min)
						let allow = 0
						Object.entries(this.checkboxDetails).forEach(data =>{
								if (!data[1].active){
										if(this.checkNumbers(data[1].min, data[1].max, number)) {
												allow += 1
										}
								}
						})
						if(allow === 0) return number
						return false
				},
				checkNumbers(min, max, number){
						return number <= max && number >= min;
				},
				newCharacter() {
						const number = this.randomNumber()
						if(number && !this.removeCharacters.includes(number)) {
								const letter = String.fromCharCode(number)
								return `${this.password}${letter}`
						}
						return this.password
				},
				generatePassword() {
						this.password = ""
						while (this.password.length <= this.passwordLength){
								this.password = this.newCharacter()
						}
				},
				copyText(){
						navigator.clipboard.writeText(this.password)
				}
		},
}
</script>
