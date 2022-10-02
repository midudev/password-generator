/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				spark: '#ffe27d',
				surf: '#64e2ff',
				psybeam: '#9092ff',
				giga: '#b4ff39',
				manga: '#e5e1e6',
				body: '#170F1E'
			}
		},
		fontFamily: {
			sans: ['Jet Brains Mono', 'monospace'],
			special: ['Orbitron', 'sans-serif']
		}
	},
	plugins: [require('@tailwindcss/typography')]
}
