import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundColor: {
				background: '#FFF0F0',
				button: '#EAEEF7',
			},
			backgroundImage: {
				'button-active':
					'linear-gradient(165.54deg, #141333 -33.39%, #202261 15.89%, #543C97 55.84%, #6939A2 74.96%)',
			},
			borderColor: {
				border: '#E0E0E0',
			},
			boxShadow: {
				primary: '2px 2px 6px 0 #543C973F',
			},
			textColor: {
				'button-default': '#201F1F',
				'button-active': '#FBFBFF',
			},
		},
	},
	plugins: [],
};
export default config;
