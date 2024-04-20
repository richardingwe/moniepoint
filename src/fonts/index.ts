import localFont from "next/font/local";

export const sfPro = localFont({
	src: [
		{
			path: "./SF Pro/SFProText-Regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "./SF Pro/SFProText-Light.woff2",
			weight: "300",
			style: "normal",
		},
		{
			path: "./SF Pro/SFProText-Medium.woff2",
			weight: "500",
			style: "normal",
		},
		{
			path: "./SF Pro/SFProText-Semibold.woff2",
			weight: "600",
			style: "normal",
		},
		{
			path: "./SF Pro/SFProText-Bold.woff2",
			weight: "700",
			style: "normal",
		},
	],
	display: "swap",
	variable: "--font-sf-pro",
});
