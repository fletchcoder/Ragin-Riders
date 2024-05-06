import type { Metadata } from "next";
import { ReduxProvider } from "@/redux/provider";
import { inter } from "@/lib/fonts/font";
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
		<html lang="en">
			<body className={inter.className}>
				<ReduxProvider>{children}</ReduxProvider>
			</body>
		</html>
	);
}
