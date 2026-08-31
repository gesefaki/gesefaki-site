import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://127.0.0.1:3000';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin', 'cyrillic'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin', 'cyrillic'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'gesefaki — backend, веб-сервисы и автоматизация',
  description:
    'Разработка backend, API, веб-сервисов, ботов и автоматизации. C#/.NET, ASP.NET Core, PostgreSQL, Redis и Docker.',
  authors: [{ name: 'gesefaki', url: 'https://github.com/gesefaki' }],
  alternates: { canonical: '/' },
  icons: { icon: '/favicon.svg' },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: '/',
    title: 'gesefaki — backend, веб-сервисы и автоматизация',
    description:
      'Превращаю IT-задачи в работающие системы: backend, API, боты и автоматизация.',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'gesefaki — backend, web и automation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'gesefaki — backend, веб-сервисы и автоматизация',
    description:
      'Превращаю IT-задачи в работающие системы: backend, API, боты и автоматизация.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
