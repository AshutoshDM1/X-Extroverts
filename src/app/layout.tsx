import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'EXTROVERT - Performance Ads Agency',
  description: 'Scale your brand with high-converting paid ads',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${poppins.variable}`} suppressHydrationWarning>
      <head />
      <body className="bg-black text-white antialiased selection:bg-purple-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
