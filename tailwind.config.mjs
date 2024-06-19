/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				bg1: '#292F36',
				bg2: '#1A1E23',
				brand1: '#12F7D6',
				brand2: '#98FAEC',
				grey1: '#43454D',
				negro1: '#1A1E23'		
			},
			fontFamily: {
				code: '"Press Start 2P"',
				ibm: '"IBM Plex Mono"',
				ubuntu: 'Ubuntu'
			},
			boxShadow: {
				'card': '-4px -4px 2px 0px #12F7D6',
				'highlights': '2px 2px 4px 0px rgba(0, 0, 0, 0.25)'
			  },
			  flex: {
				'1-0-0': '1 0 0'
			  },
		},
	},
	plugins: [],
}
