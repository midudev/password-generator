import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'
import react from '@astrojs/react'
import vue from '@astrojs/vue'
import solidJs from '@astrojs/solid-js'
import tailwind from '@astrojs/tailwind'
import image from '@astrojs/image'
// import analogjsangular from '@analogjs/astro-angular'

import preact from '@astrojs/preact'

// https://astro.build/config
export default defineConfig({
	integrations: [
		svelte(),
		react(),
		vue(),
		solidJs(),
		tailwind(),
		image(),
		// analogjsangular(),
		preact()
	]
})
