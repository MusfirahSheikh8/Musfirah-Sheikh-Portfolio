import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Musfirah Sheikh | Full-Stack Developer & Software Engineer",
  description: "Professional portfolio of Musfirah Sheikh, a Full-Stack Developer with 3+ years of experience building scalable web applications, real-time dashboards, and secure session architectures using Next.js, React, Node.js, TypeScript, PostgreSQL, and AWS.",
  keywords: [
    "Musfirah Sheikh",
    "Full-Stack Developer",
    "Software Engineer",
    "Next.js Portfolio",
    "React Developer",
    "Node.js Developer",
    "TypeScript",
    "PostgreSQL",
    "AWS",
    "Shopify Developer",
    "Computer Vision Portfolio"
  ],
  authors: [{ name: "Musfirah Sheikh" }],
  creator: "Musfirah Sheikh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="bg-dark-bg text-gray-200 antialiased min-h-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
