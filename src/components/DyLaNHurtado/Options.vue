<template>
	<span class="flex justify-center items-center text-3xl mb-4">Options:</span> 
			<div class="h-full flex items-center justify-center flex-col w-full gap-4 ">
				<div class="h-full flex items-center justify-center w-full gap-4">
						<Option icon="1" sum="Include uppercase to password"/>
						<Option icon="2" sum="Include lowercase to password"/>
				</div>
				<div class="h-full flex items-center justify-center w-full gap-4">
						<Option icon="3" sum="Include numbers to password"/>
						<Option icon="4" sum="Include symbols to password"/>
				</div>
			</div>
</template>
<script>
	import Option from './Option.vue';
	export default{
		name:'Options',
		props:{

		},components:{Option}
	}
</script>
<style>

</style>
