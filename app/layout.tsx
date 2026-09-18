import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Local Business FAQ Schema Generator | Free JSON-LD Tool",
  description: "Generate Google-compliant FAQ JSON-LD schema markup for local businesses, dentists, plumbers, real estate, and more.",
  metadataBase: new URL("https://local-schema-generator.vercel.app"),
  openGraph: {
    title: "Local Business FAQ Schema Generator",
    description: "Generate Google-compliant FAQ JSON-LD schema markup for local businesses.",
    url: "https://local-schema-generator.vercel.app",
    siteName: "Local FAQ Schema Generator",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Local Business FAQ Schema Generator",
    description: "Generate Google-compliant FAQ JSON-LD schema markup for local services.",
  },
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
      <head>
        {/* Google Analytics 4 Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_ACTUAL_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XYGRLXKZMH');
          `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
