import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Extroverts',
  description:
    'Turn city strangers into your real-world friends. Discover themed meetups, host spontaneous hangouts, and connect with people who share your authentic vibe.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Extroverts',
    description:
      'Turn city strangers into your real-world friends. Discover themed meetups, host spontaneous hangouts, and connect with people who share your authentic vibe.',
    type: 'website',
  },
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
