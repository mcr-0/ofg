import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "OnlyforG",
  description: "Get Access To OnlyforG and Claim Your Rewards",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black bg-gradient-to-r from-purple-500 to-blue-500">
        {children}

        <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
      </body>
    </html>
  );
}
