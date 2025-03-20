import type { Metadata } from "next";
import "./reset.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

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
			<body>
				<Header />
				<Navigation />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
