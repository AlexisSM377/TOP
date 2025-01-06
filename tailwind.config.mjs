/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				top: {
					primary: '#5281EB',
					secondary: '#5281EB'
				}
			},
			screens: {
				base: '1000px'
			}
		},
	},
	plugins: [],
}
