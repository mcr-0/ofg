import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import Head from "next/head";

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
      <Head>
        {/* Google Tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-16648022210"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16648022210');
          `}
        </Script>
      </Head>
      <body className="bg-black bg-gradient-to-r from-purple-500 to-blue-500">
        {children}

        <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
      </body>
    </html>
  );
}
