/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				title: 'hsla(58, 80%, 91%, 1)',
				accent: '#F2EF88',
				tomato: {
					primary: '#2D83AE',
					light: '#EBF8FF',
				},
				foreground: '#FFFFFF',
			},
		},
	},
	plugins: [],
};
