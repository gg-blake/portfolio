import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "moody.mx",
  description: "Blake Moody's personal website and professional portfolio showcasing his work in software development and photography.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="overflow-x-hidden w-screen" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
