import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/contexts/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://meherullah.dev/";
const siteName = "Md Meher Ullah - AI-Augmented Software Engineer";
const siteDescription =
	"AI-Augmented Software Engineer with 8+ years of experience specializing in TypeScript, React, Next.js, and AWS. Expert in building financial applications, HRM systems, and custom software solutions in Kuala Lumpur, Malaysia.";

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: {
		default: siteName,
		template: `%s | ${siteName}`,
	},
	description: siteDescription,
	keywords: [
		"AI-Augmented Software Engineer",
		"Full-Stack Developer Kuala Lumpur",
		"TypeScript Developer Malaysia",
		"Node.js Expert",
		"React Developer",
		"Next.js Specialist",
		"AI Code Development",
		"Custom Software Solutions",
		"Financial App Developer",
		"HRM Application Developer",
		"AWS Cloud Architect",
		"GitHub Copilot Developer",
		"Cursor AI Developer",
		"Claude AI Development",
		"JavaScript Expert Malaysia",
		"NestJS Developer",
		"PostgreSQL Expert",
		"Docker Kubernetes Developer",
		"Social Media App Developer",
		"Meher Ullah Khan Raj",
		"Md Meher Ullah",
	],
	authors: [
		{ name: "Md Meher Ullah", url: siteUrl },
		{ name: "Meher Ullah Khan Raj", url: siteUrl },
	],
	creator: "Md Meher Ullah (Meher Ullah Khan Raj)",
	publisher: "Md Meher Ullah",
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
				url: `${siteUrl}/og-image.png`,
				width: 1200,
				height: 630,
				alt: "Md Meher Ullah - AI-Augmented Software Engineer Portfolio",
				type: "image/png",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: siteName,
		description: siteDescription,
		images: [`${siteUrl}/og-image.png`],
		creator: "@raajkhan",
	},
	verification: {
		google: "google-site-verification-code", // Add your Google Search Console verification code
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
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className} suppressHydrationWarning>
				<ThemeProvider>
					<Header />
					{children}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
