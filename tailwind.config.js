/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			container: {
				center: true,
				padding: '1rem',
			},
			colors: {
				primary: {
					400: '#579DFF',
					DEFAULT: '#1e65a7',
					500: '#1e65a7',
				},
				secondary: {
					400: '#F1F2F4',
					DEFAULT: '#52617A',
					500: '#52617A',
					600: '#454e5e',
				},
				tertiary: {
					DEFAULT: '#349C55',
					500: '#349C55',
				},
				quaternary: {
					DEFAULT: '#F5751C',
					500: '#F5751C',
				},
			},
		},
	},
	plugins: [],
};
