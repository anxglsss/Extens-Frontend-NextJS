import type { Config } from 'tailwindcss'

const config: Config = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#5A67D8', // You can add more shades if needed
				secondary: '#ED64A6',
				accent: '#48BB78',
				dark: '#2D3748',
				light: '#EDF2F7',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},

				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			fontFamily: {
				mont: ['var(--font-montserrat)'],
				mon: ['Montserrat', 'sans-serif'],
			},
			fontWeight: {
				normal: '400',
				medium: '500',
				semibold: '600',
				bold: '700',
			},
			backgroundImage: {
				'custom-blue-white': 'linear-gradient(220deg, #87CEFA, #3B82F6)',
			},
			screens: {
				sm: '640px', // Small screens
				md: '768px', // Medium screens
				lg: '1024px', // Large screens
				xl: '1280px', // Extra large screens
				'2xl': '1440px', // 2x Extra large screens.
				'3xl': '1920px', // 3x Extra large screens.
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
}
export default config
