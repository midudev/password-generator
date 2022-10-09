<script>
	import Button from '../atoms/Button.svelte'
	import Slider from '../atoms/Slider.svelte'
	import Title from '../atoms/Title.svelte'
	import PassInput from '../molecules/PassInput.svelte'
	import PassOptions from './PassOptions.svelte'
</script>

<div class="w-5/6 lg:w-2/4 h-auto py-5 px-8 bg-slate-600 rounded-2xl">
	<Title />
	<PassInput />
	<Slider />
	<PassOptions />
	<Button />
</div>
