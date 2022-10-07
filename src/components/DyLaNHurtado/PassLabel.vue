<template>
	<div class=" w-full h-1/6 flex flex-row border-y-4  border-cyan-500 ">
			<div class="w-full  bg-gray-600 p-4 font-black duration-300  flex justify-center items-center text-5xl select-text">
				s23j!fdsd
			</div>
			<button class=" w-1/6 bg-gray-600  group aspect-square active:bg-cyan-900 transition-colors duration-200  hover:bg-gray-700">
				<div class="flex items-center justify-center flex-col group">
					<SaveIcon class="w-10 h-10 group-hover:animate-bounce  animate-none opacity-40 animate-bounce transition-all duration-100"/>
					<p class="hidden group-focus:block ">Saved!</p>
				</div>
		</button>
		</div>
</template>
<script>
import SaveIcon from './icons/save-icon.vue';
export default{
name:'PassLabel',
		props:{

		},
		components:{
			SaveIcon
		}
	}
</script>
<style scoped>

</style>
