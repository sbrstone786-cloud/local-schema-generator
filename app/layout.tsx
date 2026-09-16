import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Local Business FAQ Schema Generator",
  description: "Free JSON-LD FAQ & Service Schema generator for local businesses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        {children}
      </body>
    </html>
  );
}
