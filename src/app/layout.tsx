import type { Metadata } from "next";
import "./globals.scss";
import { sfPro } from "@/fonts";
import Navigation from "@/components/layout/Navigation";

export const metadata: Metadata = {
	title: "Winden | Dashboard",
	description: "This a Moniepoint's task",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={sfPro.variable}>
				<Navigation />
				<main>{children}</main>
			</body>
		</html>
	);
}
