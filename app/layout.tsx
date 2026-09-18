import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Local Business FAQ Schema Generator",
  description: "Generate Google-compliant JSON-LD markup for local services.",
  verification: {
    google: "z7gGkUxZxR6hciwbmYIxAYUkZftL7-7iiCb5BEM2S2M",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
