/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				bg1: '#292F36',
				brand1: '#12F7D6',
				grey1: '#43454D',
				negro1: '#1A1E23'		
			},
			fontFamily: {
				code: '"Press Start 2P"',
				ibm: '"IBM Plex Mono"'
			},
			boxShadow: {
				'card': '-4px -4px 2px 0px #12F7D6',
			  },
		},
	},
	plugins: [],
}
