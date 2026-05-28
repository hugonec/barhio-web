import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://barhio.com"),
  title: "Barhio — Word of mouth. Only better.",
  description:
    "How you've always found great restaurants — from the people whose taste you trust. Now in one app. No ads. No strangers. Just your people. Launching in Barcelona.",
  openGraph: {
    title: "Barhio — Word of mouth. Only better.",
    description:
      "The social food app built on trust. Launching in Barcelona.",
    url: "https://barhio.com",
    siteName: "Barhio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Barhio — Word of mouth. Only better.",
    description:
      "The social food app built on trust. Launching in Barcelona.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={fraunces.variable}>
      <head>
        <link
          rel="preconnect"
          href="https://api.fontshare.com"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@400,500,700,800,900&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
