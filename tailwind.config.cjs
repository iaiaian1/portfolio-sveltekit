const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		// Add inside extend
		extend: {
			fontFamily : {
				nanum: ['Nanum Pen Script', 'cursive'],
				quicksand: ['Quicksand', 'sans-serif'],
				encode: ['Encode Sans SC', 'sans-serif'],
			},
			colors: {
				lampblack : "#231F20",
				neutralBlackC : "#232222",
			},
			animation: {
				'spin-slow': 'spin 10s linear infinite',
			},
		},
	},

	// darkMode: 'class',

	plugins: []
};

module.exports = config;
