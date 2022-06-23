/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/*.{html,js,svelte,ts}", "./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			minWidth: {
				mobile: "360px",
			},
			maxWidth: {
				laptop: "1200px",
			},
			fontSize: {
				h1: "2.3rem",
				h2: "2rem",
				h3: "1.7rem",
				h4: "1.4rem",
			},
			boxShadow: {
				dark: "0 5px 5px rgba(0,0,0,0.4)",
				darklat: "5px 0 5px rgba(0,0,0,0.4)",
				darkinner: "inset 0 5px 5px rgba(0,0,0,0.4)",
			},
		},
	},
	plugins: [
		require("@tailwindcss/forms"),
		require("@tailwindcss/typography"),
	],
};
