import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		container: {
			center: true,
			padding: '4.5vw',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			fontFamily: {
				moranga: ['var(--font-moranga)', 'fallbackFontHere'],
				silka: ['var(--font-silka)', 'fallbackFontHere'],
			},
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				border: 'var(--border)',
				highlight: 'var(--nav-link-highlight)',
				secondary: 'var(--secondary)',
			},
			height: {
				navbar: 'var(--top-navbar-height)',
				logo: 'var(--logo)',
			},
			width: {
				logo: 'var(--logo)',
			},
		},
	},
	plugins: [],
}
export default config
