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
  title: "Barhio — Save places. Share with friends.",
  description:
    "The social map for foodies. Capture spots from Instagram or Google Maps, build lists, and see what the people you trust actually recommend.",
  openGraph: {
    title: "Barhio — Save places. Share with friends.",
    description:
      "The social map for foodies. Launching in France and Spain.",
    url: "https://barhio.com",
    siteName: "Barhio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Barhio — Save places. Share with friends.",
    description:
      "The social map for foodies. Launching in France and Spain.",
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
