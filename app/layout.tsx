import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Poppins } from 'next/font/google';
import './globals.css';
import AccessVbucks from '@/components/AccessVbucks/AccessVbucks';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Image from 'next/image';
import { GoogleTagManager } from '@next/third-parties/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] });

export const metadata: Metadata = {
  title: 'OnlyforG',
  description: 'Get Access To OnlyforG and Claim Your Rewards',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-XYZ" />

      <body className={`${poppins.className} mx-auto max-w-xl bg-white`}>
        <Header />
        {/* <AccessVbucks /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
