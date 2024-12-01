import type { Metadata } from "next";
import "./reset.css";
import "./globals.css";

export const metadata: Metadata = {
	title: "Dungeon Keeper",
	description: "",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
