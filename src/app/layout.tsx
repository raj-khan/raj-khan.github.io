import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/contexts/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meher Ullah Khan Raj - Full-Stack Software Engineer",
  description: "Full-Stack Software Engineer with 7+ years of experience in JavaScript, TypeScript, Node.js, React, Next.js, NestJS, and PostgreSQL. Based in Kuala Lumpur, Malaysia.",
  keywords: "Full-Stack Developer, Software Engineer, JavaScript, TypeScript, Node.js, React, Next.js, NestJS, PostgreSQL, Kuala Lumpur",
  authors: [{ name: "Meher Ullah Khan Raj" }],
  openGraph: {
    title: "Meher Ullah Khan Raj - Full-Stack Software Engineer",
    description: "Full-Stack Software Engineer with 7+ years of experience",
    type: "website",
  },
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
