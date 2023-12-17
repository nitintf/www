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
			padding: '4vw',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			fontFamily: {
				primary: ['var(--font-primary)', 'fallbackFontHere'],
				secondary: ['var(--font-secondary)', 'fallbackFontHere'],
			},
			spacing: {
				xxl: 'var(--spacing-xxl)',
				xl: 'var(--spacing-xl)',
				l: 'var(--spacing-l)',
				m: 'var(--spacing-m)',
				s: 'var(--spacing-s)',
				xs: 'var(--spacing-xs)',
				xxs: 'var(--spacing-xxs)',
			},
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				border: 'var(--border)',
				highlight: 'var(--nav-link-highlight)',
				secondary: 'var(--secondary)',
				navBg: 'var(--nav-link-bg)',
				opaque: 'var(--opaque)',
				link: 'var(--link)',
			},
			height: {
				navbar: 'var(--top-navbar-height)',
				logo: 'var(--logo)',
			},
			width: {
				logo: 'var(--logo)',
			},
			maxWidth: {
				content: '1600px',
			},
			boxShadow: {
				link: 'var(--link)',
				expand: 'var(--expand)',
				linkhover: 'var(--link-hover)',
			},
			fontSize: {
				h1: 'var(--font-h1)',
				h2: 'var(--font-h2)',
				h3: 'var(--font-h3)',
				h4: 'var(--font-h4)',
				h5: 'var(--font-h5)',
				h6: 'var(--font-h6)',
				body: 'var(--font-body)',
				link: 'var(--font-link)',
				mini: 'var(--font-mini)',
				h2Display: 'var(--font-h2-display)',
			},
			padding: {
				link: 'calc(1rem - 10px) calc(1rem - 6px)',
			},
			zIndex: {
				nav: '1000',
			},
			transitionTimingFunction: {
				custom: 'var(--custom-ease)',
			},
			animation: {
				scale: 'scaleUp 0.3s ease-in-out 0.8s',
			},
			borderRadius: {
				base: 'var(--radius-base)',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
export default config
