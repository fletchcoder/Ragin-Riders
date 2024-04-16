import type { Metadata } from "next";
import { inter } from "@/lib/fonts/font";
import ReactQueryClientProvider from "@/components/ReactQueryClientProvider";
import "@/styles/globals.css";

export const metadata: Metadata = {
	title: `Ragin' Riders - Motorcycle Parts, Accessories & More`,
	description:
		"Website that sells motorcycle parts and accessories with a focus on sport bikes",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ReactQueryClientProvider>
			<html lang="en">
				<body className={inter.className}>{children}</body>
			</html>
		</ReactQueryClientProvider>
	);
}
