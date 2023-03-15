/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  colors: {
			base: "#656690",
			base100: "#866ba0",
			baseOrange: "#fc9c42",
			basePurple: "#a65fec",
		  }
		},
	  },
	  plugins: [require("@tailwindcss/forms")],
}
