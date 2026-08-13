import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://meherullah.dev/";
const siteName = "Meher Ullah Khan Raj — Software Engineer";
const siteDescription =
	"Software Engineer at Snappymob. Building production web applications with TypeScript, React, Next.js, Node.js, and AWS. Based in Kuala Lumpur, Malaysia.";

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: {
		default: siteName,
		template: `%s | ${siteName}`,
	},
	description: siteDescription,
	keywords: [
		"Software Engineer",
		"Full-Stack Developer",
		"TypeScript Developer",
		"React Developer",
		"Next.js Specialist",
		"Node.js Developer",
		"NestJS Developer",
		"PostgreSQL",
		"MySQL",
		"MongoDB",
		"AWS",
		"Meher Ullah Khan Raj",
		"Kuala Lumpur",
		"Malaysia",
	],
	authors: [{ name: "Meher Ullah Khan Raj", url: siteUrl }],
	creator: "Meher Ullah Khan Raj",
	publisher: "Meher Ullah Khan Raj",
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: siteUrl,
		siteName: siteName,
		title: siteName,
		description: siteDescription,
		images: [
			{
				url: `${siteUrl}/avatar.jpg`,
				width: 460,
				height: 460,
				alt: "Meher Ullah Khan Raj",
				type: "image/jpeg",
			},
		],
	},
	twitter: {
		card: "summary",
		title: siteName,
		description: siteDescription,
		images: [`${siteUrl}/avatar.jpg`],
	},
	alternates: {
		canonical: siteUrl,
	},
	category: "technology",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;650&family=Geist+Mono:wght@400;500&display=swap"
				/>
			</head>
			<body>
				<Header />
				{children}
			</body>
		</html>
	);
}
