import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'
import react from '@astrojs/react'
import vue from '@astrojs/vue'
import tailwind from '@astrojs/tailwind'
import image from '@astrojs/image'
import solidJs from '@astrojs/solid-js'
import preact from '@astrojs/preact'

// https://astro.build/config
export default defineConfig({
	integrations: [svelte(), react(), vue(), tailwind(), image(), solidJs(), preact()]
})
