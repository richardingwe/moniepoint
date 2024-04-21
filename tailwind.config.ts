import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#040823",
				secondary: "#6935F5",
				tc: {
					light: "#FAFAFA",
					"light-gray": "#9FA1AC",
				},
			},
			fontFamily: {
				SFPro: ["var(--font-sf-pro)"],
			},
			container: {
				center: true,
				padding: {
					DEFAULT: "1rem",
					sm: "2rem",
					lg: "4rem",
					xl: "5rem",
					"2xl": "6rem",
				},
			},
			transitionProperty: {
				height: "height",
				"max-height": "max-height",
				"min-width": "min-width",
			},
		},
	},
	plugins: [],
};
export default config;
