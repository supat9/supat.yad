import type { Metadata } from "next";
import { Instrument_Serif, Newsreader, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Supat Yadav — Full Stack Software Engineer",
  description:
    "Full Stack Software Engineer building web applications with React, Next.js, and Go. Experience in API integration, AWS, CI/CD, and AI-powered knowledge retrieval.",
  openGraph: {
    title: "Supat Yadav — Full Stack Software Engineer",
    description:
      "Full Stack Software Engineer building web applications with React, Next.js, and Go. Experience in API integration, AWS, CI/CD, and AI-powered knowledge retrieval.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${instrumentSerif.variable} ${newsreader.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
